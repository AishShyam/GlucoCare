import {Button } from 'react-bootstrap'
import axios from 'axios'
import { toast } from 'react-toastify'

export const action = async (event, id) => {
    event.preventDefault()
    try {
      await axios.delete(`/api/v1/notes/${id}`);
      toast.success('Record Deleted');
      window.location.reload()
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
      return error;
    }
}

function DeleteNote(props) {
    const id = props.id
    const handleDelete = (event) => {
        action(event, id)
    }
    return (
        <>
        <Button variant="danger" onClick={handleDelete}>
        Delete
        </Button>
        </>
    )
}

export default DeleteNote