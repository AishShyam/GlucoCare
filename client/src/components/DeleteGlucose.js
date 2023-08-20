import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import DeleteLogo from '../assets/bin.png';

export const action = async (id) => {
  try {
    await axios.delete(`/api/v1/glucose/${id}`);
    toast.success('Record Deleted');
    window.location.reload();
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

function Delete(props) {
  const [showModal, setShowModal] = useState(false);
  const id = props.id;

  const handleDelete = async () => {
    setShowModal(false);
    await action(id);
  };

  return (
    <>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        <img src={DeleteLogo} width="18px" alt="" />
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this record?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Delete;
