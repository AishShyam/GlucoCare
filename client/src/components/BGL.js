import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import Edit from './EditGlucose'
import Delete from './DeleteGlucose';

export const action = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      glucose: formData.get('glucose'),
      unit: formData.get('unit'),
      mealTag: formData.get('mealTag'),
    }
    console.log('Data to be sent to API:', data)
    try {
      await axios.post('/api/v1/glucose', data);
      toast.success('Record Added');
      window.location.reload()
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
      return error;
    }
}

export const loader = async () => {
  try {
    const  data  = await axios.get('/api/v1/glucose')
    console.log(data)
    return data
  } catch (error) {
    console.log(error)   
    toast.error(error?.response?.data?.msg) 
    return error
  }
}


function BGL() {
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        await action(event, navigate)       
      }
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [glucoseData, setGlucoseData] = useState([])

    useEffect(() => {
    fetchGlucoseData();
  }, []);

  const fetchGlucoseData = async () => {
    try {
      const data = await loader();
      setGlucoseData(data.data.glucoseData);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleEdit = (rowId) => {
  //   console.log('Edit row with id:', rowId)
  // }

  // const handleDelete = (rowId) => {
  //   console.log('Delete row with id:', rowId)
  // }


    return (
        <>
        <div className='title'>Blood Glucose Tracker</div>
        <div className='blg--component'>
        <div class="container pt-5 my-5 border">
        <table class="table">
        <thead>
            <tr>
            <th scope="col">Date & Time</th>
            <th scope="col">Blood Glucose Level</th>
            <th scope='col'>Unit</th>
            <th scope="col">Meal</th>
            </tr>
        </thead>

        <tbody>
          {glucoseData.map((item) => (
            <tr key={item.createdAt}>
              <td>{item.createdAt}</td>
              <td>{item.glucose}</td>
              <td>{item.unit}</td>
              <td>{item.mealTag}</td>
              <td>
                <Edit id={item._id}/>
                <Delete id={item._id}/>
              </td>
            </tr>
          ))}
        </tbody>
        </table>        
        </div> 
        </div>
        <div className='container'>
        <Button className='button' type="submit" onClick={handleShow}>
            Add new record
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Blood Glucose</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method='post' onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Blood Glucose Value</Form.Label>
              <Form.Control
                type="glucose"
                placeholder="enter glucose value"
                name="glucose"
                autoFocus
                required
              />
            </Form.Group>  
            <Form.Select aria-label="Default select example" name="unit">
                <option>Unit</option>
                <option>mmol/L</option>
                <option>mg/dL</option>
            </Form.Select>  
            <br></br>
            <Form.Select aria-label="Default select example" name="mealTag">
               <option>Meal Tag</option>
                <option>breakfast</option>
                <option>lunch</option>
                <option>dinner</option>
                <option>fasting</option>
                <option>snack</option>
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
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
        </div>  
              
        </>
    )
}

export default BGL