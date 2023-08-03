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
  const data = {
    insulinType: formData.get("insulinType"),
    insulinDosage: formData.get("insulinDosage"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.patch(`/api/v1/insulin/${id}`, data);
    toast.success("Record Edited");
    window.location.reload();
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    console.log(error);
    return error;
  }
};

function EditInsulin(props) {
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
          <Modal.Title>Edit Insulin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="post" onSubmit={handleEditSubmit}>
            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                name="insulinType"
              >
                <option>Rapid-Acting Insulin</option>
                <option>Short-Acting (Regular) Insulin</option>
                <option>Intermediate-Acting Insulin</option>
                <option>Long-Acting Insulin</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Dosage</Form.Label>
              <Form.Control
                type="insulinDosage"
                placeholder="enter insulin dose in units"
                name="insulinDosage"
                autoFocus
                required
              />
            </Form.Group>
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

export default EditInsulin;
