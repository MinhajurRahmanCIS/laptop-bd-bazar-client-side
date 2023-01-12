import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import Header from '../Shared/Header';
import ListGroup from 'react-bootstrap/ListGroup';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Header></Header>

            <div className="container overflow-hidden text-center">
                <div className="row gy-5">
                    <div className="col-2 ">

                        {
                            user?.photoURL === 'Buyer' &&
                            <>
                                <div><Link className='text-decoration-none' to="/dashboard/MyReview" ><Button className="btn btn-secondary">My Orders</Button></Link></div>
                            </>
                        }
                        {
                            user?.emailVerified &&
                            <>
                                <div><Link className='text-decoration-none' to="/dashboard/MyReview" ><Button className="btn btn-secondary">My Orders</Button></Link></div>
                            </>
                        }
                        {
                            user?.photoURL === 'Seller' &&
                            <>
                                <ListGroup>
                                    <ListGroup.Item><Link className='text-decoration-none hover text-dark' to="/dashboard/My_Product">My product</Link></ListGroup.Item>
                                    <ListGroup.Item><Link className='text-decoration-none hover text-dark' to="/dashboard/addProduct ">Add Product</Link></ListGroup.Item></ListGroup>

                            </>
                        }
                        {
                            user?.photoURL === "Admin" &&
                            <>
                                <div><Link className='text-decoration-none' to='/dashboard/AllBuyers'><Button className="btn btn-secondary">All Buyer User</Button></Link> </div> <br />
                                <div><Link className='text-decoration-none' to='/dashboard/AllSeller'><Button className="btn btn-secondary">All Seller User</Button></Link></div>
                            </>
                        }
                    </div>

                    <div className="col-10">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Dashboard;