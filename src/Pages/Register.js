import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hook/useTitle';

const Register = () => {



    const [errormsg, setError] = useState();
    useTitle('Register')

    const { createUser, ProviderLogin, UpdateUser, user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();
    // Google log In.
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        ProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                const info = {
                    User_name: user.displayName,
                    User_Email: user.email,
                    Roll: "Buyer"
                }

                fatching(info);

                UpdateUser(user.name, 'Buyer');
            })
            .catch(error => console.error(error))
    }


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const category = form.category.value;
        const email = form.email.value;
        const password = form.password.value;


        createUser(email, password)
            .then(result => {
                const user = result.user;
                UpdateUser(name, category, email)
                    .then(() => {
                        SetUserInfo(user);
                        form.reset();
                    })
            })
            .catch(error => setError(error.message))
    }


    const SetUserInfo = (user) => {
        console.log(user)
        const info = {
            User_name: user.displayName,
            User_Email: user.email,
            Roll: user.photoURL
        }

        fatching(info)


    }


    const fatching = (info) => {
        fetch('http://localhost:1001/UserInfo', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert('Added Service successfully')
                }
                console.log('Success:', data);
                logOut().then(() => {
                    navigate('/login')
                }).catch((error) => {
                    console.log(error.message)
                })
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }






    return (
        <div>
            <Form className='container w-50 border p-5 bg-light ' onSubmit={handleSubmit}>
                <h2 className='p-1 fw-bold '>Signup</h2>
                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="EnterFull Name" required />
                </Form.Group>
                <Form.Group className='m-3'>
                    <Form.Label>Enter Your category</Form.Label>
                    <select name='category' className="form-select" aria-label="Default select example">
                        <option value="Buyer">Buyer</option>
                        <option value="Seller">Seller</option>
                    </select>
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="email address" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="password" required />
                </Form.Group>
                <p className='mb-2 '>Already have an account. <Link className='text-decoration-none' to='/logIn'>Login In</Link> </p>
                <Button className='w-100 text-white' variant="info" type="submit">
                    SignUp
                </Button>
                <hr />
                <div>
                    {
                        <p className='ms-3 mt-2 text-danger'>{errormsg}</p>
                    }
                </div>
                <Button onClick={handleGoogleLogin} className='rounded text-white w-100 p-3' variant="info"><FaGoogle></FaGoogle> Login with Google</Button>
                <div>

                </div>
            </Form>




        </div>
    );
};

export default Register;