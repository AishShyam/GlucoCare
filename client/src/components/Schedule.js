import React, { useState, useEffect } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import AddLogo from "../assets/add-button.png";
import EditSchedule from "./EditSchedule";
import DeleteSchedule from "./DeleteSchedule";

function Schedule() {
  const [show, setShow] = useState(false);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    fetchScheduleData();
  }, []);

  const handleSubmit = async (event) => {
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
      await axios.post("/api/v1/schedule", data);
      toast.success("Record Added");
      window.location.reload();
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      console.log(error);
    }
  };

  const fetchScheduleData = async () => {
    try {
      const data = await axios.get("/api/v1/schedule");
      const formattedData = data.data.scheduleData.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
        date: new Date(item.date).toLocaleString(),
      }));
      setScheduleData(formattedData);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="blg--component">
        <div className="title">Appointment Tracker</div>
        <div className="container">
          {scheduleData.length > 0 ? (
            <div className="scroll">
              <table className="table table-responsive w-100 d-block d-md-table">
                <thead>
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Appointment Title</th>
                    <th scope="col">Address</th>
                    <th scope="col">Appointment Type</th>
                    <th scope="col">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleData.map((item) => (
                    <tr key={item.createdAt}>
                      <td>{item.date}</td>
                      <td>{item.appointmentTitle}</td>
                      <td>{item.location}</td>
                      <td>{item.appointmentType}</td>
                      <td>{item.note}</td>
                      <td>
                        <EditSchedule id={item._id} />
                        <DeleteSchedule id={item._id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No schedule readings yet</p>
          )}
        </div>
        <br />
        <Button className="button" type="submit" onClick={handleShow}>
          <img src={AddLogo} width="25px" alt="" /> Add new record
        </Button>
      </div>
      <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Medicine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form method="post" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" />
                <Form.Control type="time" name="time" />
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
                Add Record
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Schedule;
