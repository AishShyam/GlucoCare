import {Button,Modal } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import DeleteLogo from '../assets/bin.png'
import React, { useState } from 'react';


export const action = async (event, id) => {
    event.preventDefault()
    try {
      await axios.delete(`/api/v1/medicine/${id}`);
      toast.success('Record Deleted');
      window.location.reload()
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
      return error;
    }
}

function DeleteMedicine(props) {
  const id = props.id;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async () => {
    setShowModal(false);
    try {
      await axios.delete(`/api/v1/medicine/${id}`);
      toast.success('Record Deleted');
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
      return error;
    }
  };

  return (
    <>
      <Button variant="danger" onClick={() => setShowModal(true)}>
        <img src={DeleteLogo} width="18px" alt="" />
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
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

export default DeleteMedicine