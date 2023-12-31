import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import EditExercise from "./EditExercise";
import DeleteExercise from "./DeleteExercise";
import AddLogo from "../assets/add-button.png";

export const action = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const date = formData.get("date");
  const time = formData.get("time");
  const combinedDateTime = `${date}T${time}`;
  formData.set("date", combinedDateTime);
  const data = {
    date: formData.get("date"),
    exerciseType: formData.get("exerciseType"),
    duration: formData.get("duration"),
    comment: formData.get("comment"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.post("/api/v1/exercise", data);
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
    const data = await axios.get("/api/v1/exercise");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Excercise() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    await action(event, navigate);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [exerciseData, setExerciseData] = useState([]);

  useEffect(() => {
    fetchExerciseData();
  }, []);

  const fetchExerciseData = async () => {
    try {
      const data = await loader();
      const formattedData = data.data.exerciseData.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
        date: new Date(item.date).toLocaleString(),
      }));
      setExerciseData(formattedData);
      // setExerciseData(data.data.exerciseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="element">
        <div className="blg--component">
          <div className="title">Exercise Tracker</div>
          <div className="container ">
            {exerciseData.length > 0 ? (
              <div className="scroll">
                <table class="table table-responsive w-100 d-block d-md-table">
                  <thead>
                    <tr>
                      <th scope="col">Date & Time</th>
                      <th scope="col">Exercise Type</th>
                      <th scope="col">Duration</th>
                      <th scope="col">Comment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {exerciseData.map((item) => (
                      <tr key={item.createdAt}>
                        <td>{item.date}</td>
                        <td>{item.exerciseType}</td>
                        <td>{item.duration}</td>
                        <td>{item.comment}</td>
                        <td>
                          <EditExercise id={item._id} />
                          <DeleteExercise id={item._id} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p>No exercise readings yet</p>
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
              <Modal.Title>Add Exercise</Modal.Title>
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
                  name="exerciseType"
                >
                  <option>walking</option>
                  <option>running/jogging</option>
                  <option>cycling</option>
                  <option>swimming</option>
                  <option>strength training/weightlifting</option>
                  <option>yoga</option>
                  <option>aerobics</option>
                  <option>dancing</option>
                  <option>hiking</option>
                  <option>tennis</option>
                </Form.Select>
                <Form.Group className="mb-3">
                  <Form.Label>Duration</Form.Label>
                  <Form.Control
                    type="duration"
                    placeholder="enter duration"
                    name="duration"
                    autoFocus
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control
                    type="comment"
                    placeholder="enter comment"
                    name="comment"
                    autoFocus
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

export default Excercise;
