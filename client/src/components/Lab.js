import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import EditLab from './EditLab'
import DeleteLab from './DeleteLab';

export const action = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      testType: formData.get('testType'),
      testResult: formData.get('testResult'),
      testUnit: formData.get('testUnit'),
    }
    console.log('Data to be sent to API:', data)
    try {
      await axios.post('/api/v1/lab', data);
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
      const  data  = await axios.get('/api/v1/lab')
      console.log(data)
      return data
    } catch (error) {
      console.log(error)   
      toast.error(error?.response?.data?.msg) 
      return error
    }
  }

function Lab() {
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        await action(event, navigate)       
      }
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const [labData, setLabData] = useState([])

    useEffect(() => {
        fetchLabData();
      }, []);

      const fetchLabData = async () => {
        try {
          const data = await loader();
          setLabData(data.data.labData);
        } catch (error) {
          console.log(error);
        }
      }


    return (
        <>
        <div className='title'>Lab Results Tracker</div>
        <div className='blg--component'>
        <div class="container pt-5 my-5 border">
        <table class="table">
            <thead>
            <tr>
            <th scope="col">Date & Time</th>
            <th scope="col">Test Type</th>
            <th scope='col'>Test Results</th>
            <th scope='col'>Test Unit</th>
            </tr>
            </thead>
            <tbody>
            {labData.map((item) => (
            <tr key={item.createdAt}>
                <td>{item.createdAt}</td>
                <td>{item.testType}</td>
                <td>{item.testResult}</td>
                <td>{item.testUnit}</td>
                <td>
                <EditLab id={item._id}/>
                <DeleteLab id={item._id} />
                </td>
            </tr>
            ))}
        </tbody>
        </table>
        </div>
        </div>
        <div className='container'>
        <Button className='button' type="submit" onClick={handleShow}>
            Add new lab record
        </Button>  
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Lab Record</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form method='post' onSubmit={handleSubmit}>
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
        <Form.Select aria-label="Default select example" name="testUnit">
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
        </div>

        </>
    )
}

export default Lab