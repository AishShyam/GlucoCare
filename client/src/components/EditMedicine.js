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
    medicineName: formData.get("medicineName"),
    dosage: formData.get("dosage"),
    medicineUnit: formData.get("medicineUnit"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.patch(`/api/v1/medicine/${id}`, data);
    toast.success("Record Edited");
    window.location.reload();
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

function EditMedicine(props) {
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
          <Modal.Title>Edit Medicine</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="post" onSubmit={handleEditSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" name="date" />
              <Form.Control type="time" name="time" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Medicine Name</Form.Label>
              <Form.Control
                type="medicineName"
                placeholder="enter medicine name"
                name="medicineName"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Select aria-label="Default select example" name="dosage">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Select>
            <br></br>
            <Form.Select
              aria-label="Default select example"
              name="medicineUnit"
            >
              <option>unit</option>
              <option>mg</option>
              <option>g</option>
            </Form.Select>
            <br></br>
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

export default EditMedicine;
