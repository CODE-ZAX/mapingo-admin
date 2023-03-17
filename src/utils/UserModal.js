import Modal from "react-bootstrap/Modal";
import classes from "./UserModal.module.css";
function UsersModal({ show, setShow, user }) {
  return user ? (
    <Modal
      show={show}
      onHide={() => {
        setShow(false);
      }}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {`${user.fname} ${user.lname}`}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          <strong>ID:</strong> <span>{user.uid}</span>
        </p>
        <p>
          <strong>Last Login:</strong>
        </p>
        <p>
          <strong>No of Logins</strong> <span>{user.noOfLogins}</span>
        </p>
        <p>
          <strong>Invitations</strong> <span>{user.invitations}</span>
        </p>
        <p>
          <strong>Push Notifications</strong>{" "}
          <span>{user.isNotify ? "Enabled" : "Disabled"}</span>
        </p>
        <p>
          <strong>Pinned Locations</strong>{" "}
          <span>{user.pinnedLocations.length}</span>
        </p>
        <div>
          <h5>Pinned Locations</h5>
          <div className={classes.pinnedLocations}>
            {user.pinnedLocations.map((item, index) => {
              return (
                <p>
                  <strong>{index + 1}</strong>: {item}
                </p>
              );
            })}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          close
        </button>
      </Modal.Footer>
    </Modal>
  ) : (
    <Modal>"Close"</Modal>
  );
}
export default UsersModal;
