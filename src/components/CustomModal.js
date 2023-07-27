import React from 'react'
import Modal from 'react-modal';
const CustomModal = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Example Modal">
      <h2>Modal Content</h2>
      <button onClick={closeModal}>Close Modal</button>
    </Modal>
  );
};


export default CustomModal

