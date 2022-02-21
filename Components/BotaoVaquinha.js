import { Modal, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function BotaoVaquinha() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary small-screen"
        variant="primary"
        onClick={handleShow}
      >
        Nossa vaquinha
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-info">Nossa Vaquinha</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-info">
          <p>
            Estamos recebendo o PIX na conta do irmão do Luis, ok? A chave é o
            celular dele (61) 98115 7672 em nome de João Paulo Machado Baumotte.
          </p>
          <p>
            Se você for fazer o PIX da conta de outra pessoa, lembra de mandar o
            comprovante para gente incluir seu nome nome. Pode ser nesse mesmo
            número de celular.
          </p>
          <p>
            Ah, um pacote da Pampers com 50 fraldas custa R$40, só para você ter
            uma referência 😉
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
