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
        exerciseType: formData.get('exerciseType'),
        duration: formData.get('duration'),
        comment: formData.get('comment'),
    }
    console.log('Data to be sent to API:', data)
    try {
        await axios.patch(`/api/v1/exercise/${id}`, data);
        toast.success('Record Edited');
        window.location.reload()
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        console.log(error);
        return error;
      }
}

function EditExercise(props) {
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
          <Modal.Title>Edit Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form method='post' onSubmit={handleEditSubmit}>
        <Form.Select aria-label="Default select example" name="exerciseType">
                <option>walking</option>
                <option>running/jogging</option>
                <option>cycling</option>
                <option>swimming</option>
                <option>strength training/weightlifting</option>
                <option>yoga</option>
                <option>aerobics</option>
                <option>dancing</option>
                <option>hiking</option>
                <option>tennis</option>
            </Form.Select> 
            <Form.Group className="mb-3">
            <Form.Label>Duration</Form.Label>
            <Form.Control
            type="duration"
            placeholder="enter duration"
            name="duration"
            autoFocus
            required
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Comment</Form.Label>
            <Form.Control
            type="comment"
            placeholder="enter comment"
            name="comment"
            autoFocus
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

export default EditExercise