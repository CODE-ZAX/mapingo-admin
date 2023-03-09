import React, { useContext, useState } from "react";

import poker from "../assets/images/poker.png";
const DataContext = React.createContext();
export const useData = () => {
  return useContext(DataContext);
};

const DataProvider = ({ children }) => {
  const Colors = {
    primaryColor: "#081950",
    accentColor: "#547bfc",
    accentColorLight: "#4f63a7",
  };

  const logs = [
    { lid: 0, date: Date(), message: "success login to system!" },
    { lid: 1, date: Date(), message: "faliure login to system!" },
    { lid: 2, date: Date(), message: "faliure login to system!" },
    { lid: 3, date: Date(), message: "success login to system!" },
    { lid: 4, date: Date(), message: "success login to system!" },
    { lid: 5, date: Date(), message: "warning login to system!" },
    { lid: 6, date: Date(), message: "warning login to system!" },
    { lid: 7, date: Date(), message: "success login to system!" },
    { lid: 8, date: Date(), message: "fatal login to system!" },
    { lid: 9, date: Date(), message: "fatal login to system!" },
    { lid: 10, date: Date(), message: "success login to system!" },
    { lid: 11, date: Date(), message: "success login to system!" },
    { lid: 12, date: Date(), message: "faliure login to system!" },
    { lid: 13, date: Date(), message: "faliure login to system!" },
    { lid: 14, date: Date(), message: "success login to system!" },
    { lid: 15, date: Date(), message: "success login to system!" },
    { lid: 16, date: Date(), message: "warning login to system!" },
    { lid: 17, date: Date(), message: "warning login to system!" },
  ];

  function siRound(x) {
    if (x < 1e3) return x + "";
    const digits = Math.log10(x) | 0;
    const tier = (digits / 3) | 0;
    let str = (x / 10 ** (tier * 3)).toFixed(2 - (digits % 3));
    // Turn "10.00" into "10.0" and "100.0" into "100"
    str = str.replace(/^(.{3})\..+|^(.{4}).+/, "$1$2");
    if (str.length > 4) {
      ///Add this check
      siRound(str);
    }
    return str + ["", "k", "M", "G", "T"][tier];
  }
  const places = [
    {
      ratings: siRound(354612),
      title: "Port Luse",
      location: "Los Duseca, Italy",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
      ratings: siRound(3612),
      title: "Bay",
      location: "Los Angel, USA",
      image:
        "https://images.unsplash.com/photo-1610906570945-f1463d3a6558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      ratings: siRound(3524612),
      title: "Gladiator",
      location: "Rome , Russia",
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80",
    },
    {
      ratings: siRound(1354612),
      title: "Bay",
      location: "Los Angel, USA",
      image:
        "https://images.unsplash.com/photo-1610906570945-f1463d3a6558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      ratings: siRound(22612),
      title: "Bay",
      location: "Los Angel, USA",
      image:
        "https://images.unsplash.com/photo-1610906570945-f1463d3a6558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      ratings: siRound(35458612),
      title: "Bay",
      location: "Los Angel, USA",
      image:
        "https://images.unsplash.com/photo-1610906570945-f1463d3a6558?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
  ];
  const tableData = [
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
    {
      uid: "asdasd2313dsad",
      fname: "Faraz",
      lname: "Shams",
      age: "22",
      country: "Pakistan",
      username: "@zax",
      phoneNo: "+923235235327",
      joinDate: "12 March, 2023",
      email: "zax@gmail.com",
    },
  ];

  return (
    <DataContext.Provider value={{ logs, places, tableData, Colors }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;
