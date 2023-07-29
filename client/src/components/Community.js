import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form'
import { toast } from 'react-toastify'
import axios from 'axios'
import {ListGroup, ListGroupItem, Card} from 'react-bootstrap'


export const action = async (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = {
      message: formData.get('message'),
    }
    console.log('Data to be sent to API:', data)
    try {
      await axios.post('/api/v1/community', data);
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
      const  data  = await axios.get('/api/v1/community')
      console.log(data)
      return data
    } catch (error) {
      console.log(error)   
      toast.error(error?.response?.data?.msg) 
      return error
    }
  }


function Community() {
    const [communityData, setCommunityData] = useState([])
    const handleSubmit = async (event) => {
        await action(event)       
    }
    useEffect(() => {
        fetchCommunityData()
    }, [])

    const fetchCommunityData = async() => {
        try {
            const data = await loader()
            setCommunityData(data.data.communityData)
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <>
        <div className='title'>Community Forum</div>
        <div className='blg--component'>
        <div className="container pt-5 my-5 border">
        <div className='scroll'>
        <ListGroup>
            {communityData.map((item) => (             
         <ListGroupItem key={item.createdAt}>
            <Card>
            <Card.Body><b>{item.name}:</b> {item.message}</Card.Body>
            </Card>
            </ListGroupItem>
            ))}
        </ListGroup>
        </div>
        </div>        
        <div class="container pt-5 my-5 border">
        <Form method='post' onSubmit={handleSubmit}>
        <Form.Control className="me-auto" placeholder="Add your message here..." name="message"/>
        <br></br>
        <Button variant="secondary" type="submit">Submit</Button>
        </Form>
        </div>
        </div> 
        
        </>
    )
}

export default Community