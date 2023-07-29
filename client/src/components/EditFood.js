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
        carbs: formData.get('carbs'),
        fats: formData.get('fats'),
        proteins: formData.get('proteins'),
        calories: formData.get('calories'),
        meal: formData.get('meal')
      }
      console.log('Data to be sent to API:', data)
      try {
        await axios.patch(`/api/v1/food/${id}`, data);
        toast.success('Record Edited');
        window.location.reload()
      } catch (error) {
        toast.error(error?.response?.data?.msg);
        console.log(error);
        return error;
      }
  }

  function EditFood(props) {
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
          <Modal.Title>Edit Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form method='post' onSubmit={handleEditSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Carbs</Form.Label>
            <Form.Control
            type="carbs"
            placeholder="enter carbs"
            name="carbs"
            autoFocus
            required
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Fats</Form.Label>
            <Form.Control
            type="fats"
            placeholder="enter fats"
            name="fats"
            autoFocus
            required
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Proteins</Form.Label>
            <Form.Control
            type="proteins"
            placeholder="enter proteins"
            name="proteins"
            autoFocus
            required
            />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Calories</Form.Label>
            <Form.Control
            type="calories"
            placeholder="enter calories"
            name="calories"
            autoFocus
            required
            />
            </Form.Group>
            <Form.Label>Meal</Form.Label>
            <Form.Select aria-label="Default select example" name="meal">
                <option>breakfast</option>
                <option>lunch</option>
                <option>dinner</option>
                <option>snack</option>
                <option>other</option>
            </Form.Select> 
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

export default EditFood