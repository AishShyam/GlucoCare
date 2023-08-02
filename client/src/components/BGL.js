import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Edit from "./EditGlucose";
import Delete from "./DeleteGlucose";
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
  const data = {
    glucose: formData.get("glucose"),
    unit: formData.get("unit"),
    mealTag: formData.get("mealTag"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.post("/api/v1/glucose", data);
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
    const data = await axios.get("/api/v1/glucose");
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
      <AreaChart data={props.glucoseData} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="createdAt" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="glucose"
          stroke="#052e7e"
          fill="#052e7e"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

function BGL() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    await action(event, navigate);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [glucoseData, setGlucoseData] = useState([]);
  console.log("this data for condition", glucoseData);

  useEffect(() => {
    fetchGlucoseData();
  }, []);

  const fetchGlucoseData = async () => {
    try {
      const data = await loader();
      const formattedData = data.data.glucoseData.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
      }));
      setGlucoseData(formattedData);
      // setGlucoseData(data.data.glucoseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="element">
        <div className="blg--component">
          <div className="title">Blood Glucose Tracker</div>
          <div className="table--container">
          <div className="container">
            {glucoseData.length > 0 ? (
              <div className="scroll">
                <table class="table table-responsive w-100 d-block d-md-table">
                  <thead>
                    <tr>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Blood Glucose Level</th>
                      <th scope="col">Unit</th>
                      <th scope="col">Meal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {glucoseData.map((item) => (
                      <tr key={item.createdAt}>
                        {/* <td>{item.createdAt}</td> */}
                        <td>{item.createdAt}</td>
                        <td>{item.glucose}</td>
                        <td>{item.unit}</td>
                        <td>{item.mealTag}</td>
                        <td>
                          <Edit id={item._id} />
                          <Delete id={item._id} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No glucose readings yet </p>
            )}
          </div>
          </div>
          <br></br>
          <Button className="button" type="submit" onClick={handleShow}>
            <img src={AddLogo} width="25px" alt="" /> Add new record
          </Button>
          {glucoseData.length > 0 && (
            <AreaChartComponent glucoseData={glucoseData} />
          )}
        </div>
        <div className="container">
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Blood Glucose</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form method="post" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Blood Glucose Value</Form.Label>
                  <Form.Control
                    type="glucose"
                    placeholder="enter glucose value"
                    name="glucose"
                    autoFocus
                    required
                  />
                </Form.Group>
                <Form.Select aria-label="Default select example" name="unit">
                  <option>Unit</option>
                  <option>mmol/L</option>
                  <option>mg/dL</option>
                </Form.Select>
                <br></br>
                <Form.Select aria-label="Default select example" name="mealTag">
                  <option>Meal Tag</option>
                  <option>breakfast</option>
                  <option>lunch</option>
                  <option>dinner</option>
                  <option>fasting</option>
                  <option>snack</option>
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

export default BGL;
