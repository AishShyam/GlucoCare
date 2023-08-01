import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import EditFood from "./EditFood";
import DeleteFood from "./DeleteFood";
import AddLogo from "../assets/add-button.png";

export const action = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const data = {
    carbs: formData.get("carbs"),
    fats: formData.get("fats"),
    proteins: formData.get("proteins"),
    calories: formData.get("calories"),
    meal: formData.get("meal"),
  };
  console.log("Data to be sent to API:", data);
  try {
    await axios.post("/api/v1/food", data);
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
    const data = await axios.get("/api/v1/food");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

function Food() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    await action(event, navigate);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [foodData, setFoodData] = useState([]);

  useEffect(() => {
    fetchFoodData();
  }, []);

  const fetchFoodData = async () => {
    try {
      const data = await loader();
      const formattedData = data.data.foodData.map((item) => ({
        ...item,
        createdAt: new Date(item.createdAt).toLocaleString(),
      }));
      setFoodData(formattedData);
      //setFoodData(data.data.foodData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="blg--component">
        <div className="title">Nutrition Tracker</div>
        <div className="container">
          {foodData.length > 0 ? (
            <div className="scroll">
              <table class="table table-responsive w-100 d-block d-md-table">
                <thead>
                  <tr>
                    <th scope="col">Date & Time</th>
                    <th scope="col">Carbs</th>
                    <th scope="col">Fats</th>
                    <th scope="col">Proteins</th>
                    <th scope="col">Calories</th>
                    <th scope="col">Meal</th>
                  </tr>
                </thead>
                <tbody>
                  {foodData.map((item) => (
                    <tr key={item.createdAt}>
                      <td>{item.createdAt}</td>
                      <td>{item.carbs} g</td>
                      <td>{item.fats} g</td>
                      <td>{item.proteins} g</td>
                      <td>{item.calories} kcal</td>
                      <td>{item.meal}</td>
                      <td>
                        <EditFood id={item._id} />
                        <DeleteFood id={item._id} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>No nutrition readings yet</p>
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
            <Modal.Title>Add Food</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form method="post" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Carbs</Form.Label>
                <Form.Control
                  type="carbs"
                  placeholder="enter carbs"
                  name="carbs"
                  autoFocus
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Fats</Form.Label>
                <Form.Control
                  type="fats"
                  placeholder="enter fats"
                  name="fats"
                  autoFocus
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Proteins</Form.Label>
                <Form.Control
                  type="proteins"
                  placeholder="enter proteins"
                  name="proteins"
                  autoFocus
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Calories</Form.Label>
                <Form.Control
                  type="calories"
                  placeholder="enter calories"
                  name="calories"
                  autoFocus
                  required
                />
              </Form.Group>
              <Form.Label>Meal</Form.Label>
              <Form.Select aria-label="Default select example" name="meal">
                <option>breakfast</option>
                <option>lunch</option>
                <option>dinner</option>
                <option>snack</option>
                <option>other</option>
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

export default Food;
