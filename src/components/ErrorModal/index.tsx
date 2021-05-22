import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { DEFAULT_ERROR } from "../../constants";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  error?: string;
};

const ErrorModal: React.FC<Props> = ({ isOpen, error, onClose }) => {
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Oh no!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{error || DEFAULT_ERROR}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;
