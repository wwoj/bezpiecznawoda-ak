import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Modal1 = ({ open, onClose, status, setStatus }) => {
  const handleClose = () => {
    onClose(false);
    setStatus(false);
  };

  useEffect(() => {
    setTimeout(() => {
      onClose(false);
      setStatus(false);
    }, 5000);
  });
  return (
    <>
      <Modal show={open} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Wiadomość</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {status
            ? "Wiadomość została wysłana!"
            : " Wiadomość nie została wysłana. Spróbój później"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modal1;
