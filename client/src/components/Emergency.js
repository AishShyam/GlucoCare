import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import AddLogo from "../assets/add-button.png";
import callLogo from "../assets/ambulance.png";

export const action = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {
    name: formData.get("name"),
    dob: formData.get("dob"),
    bloodType: formData.get("bloodType"),
    allergies: formData.get("allergies"),
    medicalConditions: formData.get("medicalConditions"),
    currentMedication: formData.get("currentMedication"),
    contact: formData.get("contact"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.post("/api/v1/emergency", data);
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
    const data = await axios.get("/api/v1/emergency");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Emergency() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    await action(event, navigate);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [emergencyData, setEmergencyData] = useState([]);

  useEffect(() => {
    fetchEmergencyData();
  }, []);

  const fetchEmergencyData = async () => {
    try {
      const data = await loader();
      setEmergencyData(data.data.emergencyData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="blg--component">
        <div className="title">Emergency Information</div>
        <div className="container">
          <Card>
            <Card.Header>Medical Information Summary</Card.Header>
            {emergencyData && (
              <Card.Body>
                <p>
                  <strong>Full Name:</strong> {emergencyData.name}
                </p>
                <p>
                  <strong>Date of Birth:</strong> {emergencyData.dob}
                </p>
                <p>
                  <strong>Blood Type:</strong> {emergencyData.bloodType}
                </p>
                <p>
                  <strong>Allergies:</strong> {emergencyData.allergies}
                </p>
                <p>
                  <strong>Medical Conditions:</strong>{" "}
                  {emergencyData.medicalConditions}
                </p>
                <p>
                  <strong>Medications:</strong>{" "}
                  {emergencyData.currentMedication}
                </p>
                <p>
                  <strong>Emergency Contacts:</strong> {emergencyData.contact}
                </p>
              </Card.Body>
            )}
          </Card>
          <br></br>
          <Button className="button" type="submit" onClick={handleShow}>
            <img src={AddLogo} width="25px" alt="" /> Add/Edit Medical
            Information
          </Button>
          {/* <Button className="button2">
          {emergencyData.contact && (
            <a href={`tel:${emergencyData.contact}`}>
              <img src={callLogo} width="25px" alt="" /> Call Emergency Number
            </a>
          )}
          </Button> */}

          {emergencyData ? (
            <Button className="button2">
              <a href={`tel:${emergencyData.contact}`}>
                <img src={callLogo} width="25px" alt="" /> Call Emergency Number
              </a>
            </Button>
          ) : (
            <Button className="button2" onClick={() => alert("Update emergency number by adding Medical Information")}>
              <img src={callLogo} width="25px" alt="" /> Call Emergency Number
            </Button>
          )}

          {/* <Button><a href='tel:{emergencyData.contact}'>Emergency Call</a></Button> */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add/Edit Medical Information</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form method="post" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter Full Name"
                    name="name"
                    autoFocus
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control type="date" name="dob" />
                </Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  name="bloodType"
                >
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                  <option>O+</option>
                  <option>O-</option>
                </Form.Select>
                <Form.Group className="mb-3">
                  <Form.Label>Allergies</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter allergies of the person you care for"
                    rows={3}
                    required
                    name="allergies"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Medical Conditions</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter medical conditions of the person you care for"
                    rows={3}
                    required
                    name="medicalConditions"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Medications</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Enter all the current medication the person you care for takes"
                    rows={3}
                    required
                    name="currentMedication"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Emergency Contact</Form.Label>
                  <Form.Control
                    type="contact"
                    placeholder="Enter Emergency Contact Number"
                    name="contact"
                    autoFocus
                    required
                  />
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
      </div>
    </>
  );
}

export default Emergency;
