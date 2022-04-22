import React from 'react';
import { Modal } from 'react-bootstrap';

const NewModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose} size={props.size}>
    <Modal.Header>
      <Modal.Title style={{ paddingLeft: '120px', fontFamily: 'Roboto Mono, monospace', paddingTop: '30px', paddingBottom: '20px', fontWeight: '700', fontSize: '30px'  }}> {props.modalTitle} </Modal.Title>
    </Modal.Header>
    <Modal.Body className=''>
        {props.children}
    </Modal.Body>
    <Modal.Footer>
     
    </Modal.Footer>
  </Modal>
  )
}

export default NewModal