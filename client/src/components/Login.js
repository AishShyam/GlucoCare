import { Link, useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { toast } from 'react-toastify'
import NavBar2 from './Navbar2'


export const action = async (event, navigate) => {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const data = Object.fromEntries(formData)
  try {
    await axios.post('/api/v1/auth/login', data)
    toast.success('Login successful')
    // return redirect('/')
    navigate('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    console.log(error)
    return error
  }    
}

const Login = () => {
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    await action(event, navigate)
  }
  return (
    <div>
      <NavBar2 />
      <div className='login--container'>
      <div class="container border">
        <div className='title'>Login</div>
        <Form method='post' onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" required/>
          </Form.Group>
          <Button className='button' type="submit">
            Submit
          </Button>
        </Form>
        Not a member yet? <Link to='/register'>Register Now</Link>
      </div>
      </div>
    </div>
  );
};
export default Login;