import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import EditMedicine from "./EditMedicine";
import DeleteMedicine from "./DeleteMedicine";
import AddLogo from "../assets/add-button.png";

export const action = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {
    medicineName: formData.get("medicineName"),
    dosage: formData.get("dosage"),
    medicineUnit: formData.get("medicineUnit"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.post("/api/v1/medicine", data);
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
    const data = await axios.get("/api/v1/medicine");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Medicine() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    await action(event, navigate);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [medicineData, setMedicineData] = useState([]);

  useEffect(() => {
    fetchMedicineData();
  }, []);

  const fetchMedicineData = async () => {
    try {
      const data = await loader();
      const formattedData = data.data.medicineData.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
      }));
      setMedicineData(formattedData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="title">Medication Tracker</div>
      <div className="blg--component">
        <div class="container pt-5 my-5 border">
          <table class="table table-responsive w-100 d-block d-md-table">
            <thead>
              <tr>
                <th scope="col">Date & Time</th>
                <th scope="col">Medicine Name</th>
                <th scope="col">Dosage</th>
                <th scope="col">Unit</th>
              </tr>
            </thead>
            <tbody>
              {medicineData.map((item) => (
                <tr key={item.createdAt}>
                  <td>{item.createdAt}</td>
                  <td>{item.medicineName}</td>
                  <td>{item.dosage}</td>
                  <td>{item.medicineUnit}</td>
                  <td>
                    <EditMedicine id={item._id} />
                    <DeleteMedicine id={item._id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                Add Record
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Medicine;
