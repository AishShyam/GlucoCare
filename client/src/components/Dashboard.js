import axios from 'axios';
import {redirect } from 'react-router-dom';

export const loader = async () => {
  try {
    const { data } = await axios.get('/api/v1/users/current-user')
    return data;
  } catch (error) {
    console.log(error)
    return redirect('/login')
  }
};


const Dashboard = () => {

    return <h1>Dashboard</h1>;
  };
  export default Dashboard;