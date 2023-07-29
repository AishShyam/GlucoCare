import {Button } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'

export const action = async (event, id) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      testType: formData.get('testType'),
      testResult: formData.get('testResult'),
      testUnit: formData.get('testUnit'),
    }
    console.log('Data to be sent to API:', data)
    try {
        await axios.patch(`/api/v1/lab/${id}`, data);
        toast.success('Record Edited');
        window.location.reload()
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        console.log(error);
        return error;
      }
}

function EditLab(props) {
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
        <Button variant="primary" onClick={handleShow}>
        Edit
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Edit Lab</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form method='post' onSubmit={handleEditSubmit}>
        <Form.Select aria-label="Default select example" name="testType">
            <option>HbA1c</option>
            <option>Fasting Blood Glucose</option>
            <option>Oral Glucose Tolerance Test</option>
            <option>Lipid Profile</option>
            <option>Other</option>
        </Form.Select> 
        <br></br>
        <Form.Group className="mb-3">
            <Form.Label>Test Result</Form.Label>
            <Form.Control
            type="testResult"
            placeholder="Enter Result"
            name="testResult"
            autoFocus
            required
            />
            </Form.Group>
            <br></br>
        <Form.Select aria-label="Default select example" name="testResult">
            <option>%</option>
            <option>mg/dL</option>
            <option>mmol/L</option>
            <option>Other</option>
        </Form.Select> 
        <br></br>
        <Button variant="secondary" onClick={handleClose}>
        Close
        </Button>
        <Button variant="primary" type='submit'>
        Add Record
        </Button> 
        </Form>
        </Modal.Body>
        </Modal>
        </> 
    )
}

export default EditLab