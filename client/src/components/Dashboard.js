import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Card from "react-bootstrap/Card";
import BGLLogo from "../assets/diabetes_color.png";
import CarbsLogo from "../assets/low-carb-diet.png";
import CalorieLogo from "../assets/meal.png";
import MedicineLogo from "../assets/medicine2.png";
import LabLogo from "../assets/blood-sample.png";
import DiabetesLogo from "../assets/diabetes3.png";

export const loader = async () => {
  try {
    const data = await axios.get("/api/v1/glucose/latest");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const loader2 = async () => {
  try {
    const data = await axios.get("/api/v1/food/latest");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const loader3 = async () => {
  try {
    const data = await axios.get("/api/v1/medicine/latest");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const loader4 = async () => {
  try {
    const data = await axios.get("/api/v1/lab/latest");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

export const loader5 = async () => {
  try {
    const data = await axios.get("/api/v1/schedule/latest");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Dashboard = () => {
  const [glucoseData, setGlucoseData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [medicineData, setMedicineData] = useState([]);
  const [labData, setLabData] = useState([]);

  useEffect(() => {
    fetchGlucoseData();
  }, []);

  const fetchGlucoseData = async () => {
    try {
      const data = await loader();
      setGlucoseData(data.data.glucoseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  const fetchFoodData = async () => {
    try {
      const data = await loader2();
      setFoodData(data.data.foodData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMedicineData();
  }, []);

  const fetchMedicineData = async () => {
    try {
      const data = await loader3();
      setMedicineData(data.data.medicineData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchLabData();
  }, []);

  const fetchLabData = async () => {
    try {
      const data = await loader4();
      setLabData(data.data.labData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="blg--component">
        <div className="title">
          <img src={DiabetesLogo} width="40px" alt="" /> Welcome to GlucoCare
        </div>
        
          <div className="dashboard">
            <h5 className="app--color--text">Latest Readings:</h5>
            <br></br>
            <div className="readings">
              {glucoseData.length > 0 ? (
                <Card style={{ width: "18rem" }}>
                  <Card.Title>
                    <img src={BGLLogo} width="25px" alt="" /> Blood Glucose:
                  </Card.Title>
                  <Card.Body>
                    {glucoseData[0].glucose} {glucoseData[0].unit}
                  </Card.Body>
                </Card>
              ) : (
                <p>No glucose readings yet.</p>
              )}
              {foodData.length > 0 ? (
                <Card style={{ width: "18rem" }}>
                  <Card.Title>
                    <img src={CarbsLogo} width="25px" alt="" /> Carbs:
                  </Card.Title>
                  <Card.Body>{foodData[0].carbs} g</Card.Body>
                </Card>
              ) : (
                <p>No carbs readings yet.</p>
              )}
              {foodData.length > 0 ? (
                <Card style={{ width: "18rem" }}>
                  <Card.Title>
                    <img src={CalorieLogo} width="25px" alt="" /> Calories:
                  </Card.Title>
                  <Card.Body>{foodData[0].calories} kcal</Card.Body>
                </Card>
              ) : (
                <p>No calorie readings yet.</p>
              )}
              {medicineData.length > 0 ? (
                <Card style={{ width: "18rem" }}>
                  <Card.Title>
                    <img src={MedicineLogo} width="25px" alt="" /> Medicine:
                  </Card.Title>
                  <Card.Body>
                    {medicineData[0].medicineName} {medicineData[0].dosage}{" "}
                    {medicineData[0].medicineUnit}
                  </Card.Body>
                </Card>
              ) : (
                <p>No medicine readings yet.</p>
              )}
              {labData.length > 0 ? (
                <Card style={{ width: "18rem" }}>
                  <Card.Title>
                    <img src={LabLogo} width="25px" alt="" /> Lab:
                  </Card.Title>
                  <Card.Body>
                    {labData[0].testType} {labData[0].testResult}{" "}
                    {labData[0].testUnit}
                  </Card.Body>
                </Card>
              ) : (
                <p>No lab readings yet.</p>
              )}
            </div>
          </div>
          <br></br>
        
      </div>
    </>
  );
};
export default Dashboard;
