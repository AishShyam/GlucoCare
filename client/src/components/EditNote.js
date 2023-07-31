import {Button } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import EditLogo from '../assets/edit.png'


export const action = async (event, id) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      title: formData.get('title'),
      text: formData.get('text'),
    }
    console.log('Data to be sent to API:', data)
    try {
      await axios.patch(`/api/v1/notes/${id}`, data);
      toast.success('Record Added');
      window.location.reload()
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
      return error;
    }
}

function EditNote(props) {
    const id = props.id
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleEditSubmit = (event) => {
        action(event, id)
        handleClose()
    }
    return (
        <>
           <Button className="button" onClick={handleShow}>
           <img src={EditLogo} width="18px" alt=""/>
            </Button> 
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit Notes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form method='post' onSubmit={handleEditSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="title"
            placeholder="enter title"
            name="title"
            autoFocus
            required
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Text</Form.Label>
            <Form.Control
            as="textarea" 
            rows={3}
            required
            name="text"
            />
            </Form.Group> 
            <br></br> 
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" type='submit'>
            Edit Record
          </Button> 
            </Form>
            </Modal.Body>
        </Modal>
        </>
    )
}

export default EditNote