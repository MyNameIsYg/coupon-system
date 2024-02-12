import { useNavigate } from 'react-router-dom';
import urls from './BaseUrl';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action/registerAction';
import { useState } from 'react';
import './Style/Login.css'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async () => {
        try {


            const response = await axios.post(`${urls.BASE_URL}/login`,
                {
                    email: email,
                    password: password
                });

            if (response.status === 200) {
                dispatch(login(response.data));
                navigate('/home');
            } else {
                setMsg("email or password incorrect, please try again");
            }
        } catch (error) {
            console.error(error);
            setMsg("An error occurred. Please try again later.");

        }
    }
    return (
        // <div>
        <>
<MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' 
        type='email' size="lg"  
                    onChange={(e) => setEmail(e.target.value)}/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg'
         type='password' size="lg" 
                    onChange={(e) => setPassword(e.target.value)}/>

        {/* <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p> */}
        <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleSubmit}>
          Login
        </MDBBtn>

        <div>
          <p className="mb-0">Don't have an account? 
          <a onClick={() => navigate('/signup')} class="text-white-50 fw-bold">Sign Up</a>
          </p>

        </div>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>
</MDBContainer>



            
            {/* <h1>Login</h1>
            <InputGroup>
                <InputGroup.Text id="basic-addon1"
                    type="text"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputGroup.Password id="basic-addon1"
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </InputGroup>
            <Button
                onClick={handleSubmit}
            >Login
            </Button>
            <Button
                onClick={() => navigate('/signup')}>
                Not have an account? Signup
            </Button>
            <p>{msg}</p>
        </div> */}
</>
    )
};