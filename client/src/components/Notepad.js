import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Card from "react-bootstrap/Card";
import EditNote from "./EditNote";
import DeleteNote from "./DeleteNote";
import AddLogo from "../assets/add-button.png";

export const action = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {
    text: formData.get("text"),
    title: formData.get("title"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.post("/api/v1/notes", data);
    toast.success("Record Added");
    window.location.reload();
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

export const loader = async () => {
  try {
    const data = await axios.get("/api/v1/notes");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Notepad() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    await action(event, navigate);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [notesData, setNotesData] = useState([]);

  useEffect(() => {
    fetchNotesData();
  }, []);

  const fetchNotesData = async () => {
    try {
      const data = await loader();
      setNotesData(data.data.notesData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="blg--component">
        <div className="title">Notepad</div>
        <div className="container">
          <div className="flex">
            {notesData.map((item) => (
              <Card style={{ width: "18rem" }} key={item.createdAt}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Body>
                  <Card.Text>{item.text}</Card.Text>
                  <EditNote id={item._id} />
                  <DeleteNote id={item._id} />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
        <br></br>
        <Button className="button" type="submit" onClick={handleShow}>
          <img src={AddLogo} width="25px" alt="" /> Add new note
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Notes</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form method="post" onSubmit={handleSubmit}>
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
                <Form.Control as="textarea" rows={3} required name="text" />
              </Form.Group>
              <br></br>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" type="submit">
                Add Record
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Notepad;
