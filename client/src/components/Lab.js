import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import EditLab from "./EditLab";
import DeleteLab from "./DeleteLab";
import AddLogo from "../assets/add-button.png";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export const action = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const date = formData.get("date");
  const time = formData.get("time");
  const combinedDateTime = `${date}T${time}`;
  formData.set("date", combinedDateTime);
  const data = {
    date: formData.get("date"),
    testType: formData.get("testType"),
    testResult: formData.get("testResult"),
    testUnit: formData.get("testUnit"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.post("/api/v1/lab", data);
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
    const data = await axios.get("/api/v1/lab");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const AreaChartComponent = (props) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={props.labData} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="testResult"
          stroke="#052e7e"
          fill="#052e7e"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

function Lab() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    await action(event, navigate);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [labData, setLabData] = useState([]);

  useEffect(() => {
    fetchLabData();
  }, []);

  const fetchLabData = async () => {
    try {
      const data = await loader();
      const formattedData = data.data.labData.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
        date: new Date(item.date).toLocaleString(),
      }));
      setLabData(formattedData);
      //setLabData(data.data.labData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="element">
        <div className="blg--component">
          <div className="title">Lab Results Tracker</div>
          <div className="container">
            {labData.length > 0 ? (
              <div className="scroll">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Test Type</th>
                      <th scope="col">Test Results</th>
                      <th scope="col">Test Unit</th>
                    </tr>
                  </thead>
                  <tbody>
                    {labData.map((item) => (
                      <tr key={item.createdAt}>
                        <td>{item.date}</td>
                        <td>{item.testType}</td>
                        <td>{item.testResult}</td>
                        <td>{item.testUnit}</td>
                        <td>
                          <EditLab id={item._id} />
                          <DeleteLab id={item._id} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No lab readings yet</p>
            )}
          </div>
          <br></br>
          <Button className="button" type="submit" onClick={handleShow}>
            <img src={AddLogo} width="25px" alt="" /> Add new record
          </Button>
          {labData.length > 0 && <AreaChartComponent labData={labData} />}
        </div>
        <div className="container">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Lab Record</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form method="post" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" name="date" />
                  <Form.Control type="time" name="time" />
                </Form.Group>
                <Form.Select
                  aria-label="Default select example"
                  name="testType"
                >
                  <option>HbA1c</option>
                  <option>Fasting Blood Glucose</option>
                  <option>Oral Glucose Tolerance Test</option>
                  <option>Lipid Profile</option>
                  <option>Other</option>
                </Form.Select>
                <br></br>
                <Form.Group className="mb-3">
                  <Form.Label>Test Result</Form.Label>
                  <Form.Control
                    type="testResult"
                    placeholder="Enter Result"
                    name="testResult"
                    autoFocus
                    required
                  />
                </Form.Group>
                <br></br>
                <Form.Select
                  aria-label="Default select example"
                  name="testUnit"
                >
                  <option>%</option>
                  <option>mg/dL</option>
                  <option>mmol/L</option>
                  <option>Other</option>
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
      </div>
    </>
  );
}

export default Lab;
