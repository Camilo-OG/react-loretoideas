import Modal from "react-bootstrap/Modal";
import "../login/stylesLogin.css";
import AppRegister from "./AppRegister";

function LoginModal({ show, onHide }) {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <AppRegister />
      </Modal>
    </>
  );
}

export default LoginModal;

