import React, { useContext, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
const UserContext = React.createContext();
export const useUser = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
    } else {
      setUser(null);
    }
  });

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
