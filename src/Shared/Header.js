import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';




const Header = () => {
    const { user, logOut } = useContext(AuthContext);


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar bg="dark" variant="dark" className='mb-5'>
            <Container>
                <Navbar.Brand ><Link className='text-decoration-none text-white' to='/'>Laptop BD Bazar</Link></Navbar.Brand>
                <Nav className="me-auto">

                    <Nav.Link><Link className='text-decoration-none text-white' to='/'>Home</Link></Nav.Link>
                    {
                        user?.photoURL === 'Buyer' &&
                        <>
                            <Nav.Link><Link className='text-decoration-none text-white' to='/dashboard'>DashBoard</Link></Nav.Link>

                        </>

                    }
                    {
                        user?.emailVerified && <>

                            <Nav.Link><Link className='text-decoration-none text-white' to='/dashboard'>DashBoard</Link></Nav.Link>

                        </>
                    }
                    {
                        user?.photoURL === 'Seller' &&
                        <>
                            <Nav.Link><Link className='text-decoration-none text-white' to='/dashboard'>DashBoard</Link></Nav.Link>
                        </>

                    }
                    {
                        user?.photoURL === "Admin" &&
                        <>
                            <Nav.Link><Link className='text-decoration-none text-white' to='/dashboard'>DashBoard</Link></Nav.Link>

                        </>

                    }

                    <Nav.Link><Link className='text-decoration-none text-white' to='/blog '>Blog</Link></Nav.Link>
                    {
                        user?.displayName && <>
                            <Nav.Link><Link className='text-decoration-none text-warning '>Welcome, {user.displayName}</Link></Nav.Link>
                        </>
                    }

                </Nav>
                <Nav>

                    <Nav.Link>
                        {
                            user?.uid ?
                                <>
                                    <span></span>
                                    <Button className='text-white' variant='info' onClick={handleLogOut}>Log Out</Button>
                                </>
                                :
                                <>
                                    <Link to='/login'><Button className='text-white' variant='info'>Log In</Button></Link> <small> </small>
                                    <Link to='/register'><Button className='text-white' variant='info'>SignUp</Button></Link>
                                </>

                        } <span> </span>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;