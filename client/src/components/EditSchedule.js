import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import EditLogo from "../assets/edit.png";

export const action = async (event, id) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const date = formData.get("date");
  const time = formData.get("time");
  const combinedDateTime = `${date}T${time}`;
  formData.set("date", combinedDateTime);

  const data = {
    date: formData.get("date"),
    appointmentTitle: formData.get("appointmentTitle"),
    location: formData.get("location"),
    appointmentType: formData.get("appointmentType"),
    note: formData.get("note"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.patch(`/api/v1/schedule/${id}`, data);
    toast.success("Record Edited");
    window.location.reload();
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

function EditSchedule(props) {
  const id = props.id;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditSubmit = (event) => {
    action(event, id);
    handleClose();
  };
  return (
    <>
      <Button className="button" onClick={handleShow}>
        <img src={EditLogo} width="18px" alt="" />
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Schedule</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="post" onSubmit={handleEditSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" required />
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" name="time" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Appointment Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Appointment Title"
                name="appointmentTitle"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Address"
                name="location"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              name="appointmentType"
              required
            >
              <option>Doctor's Appointment</option>
              <option>Diabetes Education Class</option>
              <option>Lab Tests</option>
              <option>Other</option>
            </Form.Select>
            <Form.Group className="mb-3">
              <Form.Label>Note</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter Note"
                name="note"
                autoFocus
                required
              />
            </Form.Group>
            <br />
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Edit Record
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditSchedule;
