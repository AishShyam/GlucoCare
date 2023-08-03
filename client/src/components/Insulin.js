import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import AddLogo from "../assets/add-button.png";
import EditInsulin from "./EditInsulin";
import DeleteInsulin from "./DeleteInsulin";

export const action = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {
    insulinType: formData.get("insulinType"),
    insulinDosage: formData.get("insulinDosage"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.post("/api/v1/insulin", data);
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
    const data = await axios.get("/api/v1/insulin");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Insulin() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    await action(event, navigate);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [insulinData, setInsulinData] = useState([]);

  useEffect(() => {
    fetchInsulinData();
  }, []);

  const fetchInsulinData = async () => {
    try {
      const data = await loader();
      const formattedData = data.data.insulinData.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
      }));
      setInsulinData(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="blg--component">
        <div className="title">Insulin Tracker</div>
        <div className="container">
          {insulinData.length > 0 ? (
            <div className="scroll">
              <table class="table table-responsive w-100 d-block d-md-table">
                <thead>
                  <tr>
                    <th scope="col">Date & Time</th>
                    <th scope="col">Insulin Type</th>
                    <th scope="col">Dosage</th>
                  </tr>
                </thead>
                <tbody>
                  {insulinData.map((item) => (
                    <tr key={item.createdAt}>
                      <td>{item.createdAt}</td>
                      <td>{item.insulinType}</td>
                      <td>{item.insulinDosage} Units</td>
                      <td>
                        <EditInsulin id={item._id} />
                        <DeleteInsulin id={item._id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No insulin readings yet</p>
          )}
        </div>
        <br></br>
        <Button className="button" type="submit" onClick={handleShow}>
          <img src={AddLogo} width="25px" alt="" /> Add new record
        </Button>
      </div>
      <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Insulin</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form method="post" onSubmit={handleSubmit}>
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
                Add Record
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Insulin;
