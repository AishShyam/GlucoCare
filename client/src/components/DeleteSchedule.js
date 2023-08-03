import {Button } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'
import DeleteLogo from '../assets/bin.png'

export const action = async (event, id) => {
    event.preventDefault()
    try {
      await axios.delete(`/api/v1/schedule/${id}`);
      toast.success('Record Deleted');
      window.location.reload()
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
      return error;
    }
}

function DeleteSchedule(props) {
    const id = props.id
    const handleDelete = (event) => {
        action(event, id)
    }
    return (
        <>
        <Button variant="danger" onClick={handleDelete}>
        <img src={DeleteLogo} width="18px" alt=""/>
        </Button>
        </>
    )
}

export default DeleteSchedule