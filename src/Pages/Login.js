import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import {  GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import useTitle from '../Hook/useTitle';

const Login = () => {

    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useTitle('Login')

    const [errormsg, setError] = useState();
    const { ProviderLogin, signIn } = useContext(AuthContext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        ProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='p-5'>
            <Form className='container w-50 border p-5 bg-light' onSubmit={handleSubmit}>
                <h2 className='p-1 fw-bold '>Login In</h2>
                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <p className='mb-2 '>
                    Haven't Account.<Link className='text-decoration-none' to='/register'> Create a new account</Link>
                </p>
                    <Button variant="info w-100 text-white" type="submit">
                        Login
                    </Button>
                <hr />
                <div>
                    {
                        <p className='ms-3 mt-2 text-danger'>{errormsg}</p>
                    }
                </div>
                <Button onClick={handleGoogleLogin} className='rounded text-white w-100 p-3' variant="info"><FaGoogle></FaGoogle> Login with Google</Button>
            </Form>
        </div>
    );
};

export default Login;