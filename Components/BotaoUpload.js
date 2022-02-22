import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

import CloudinaryUploadWidget from './CloudinaryUploadWidget';

export default function BotaoUpload() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        type="button"
        className="btn btn-success small-screen"
        variant="primary"
        onClick={handleShow}
      >
        Mande seu Video
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-info">Mande seu Video</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-info">
          <p>A ideia é mandar um video para a Andressa e o Luis.</p>
          <p>Pode ter até 100mb</p>
        </Modal.Body>
        <Modal.Footer>
          <CloudinaryUploadWidget />
          <Button variant="success" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
