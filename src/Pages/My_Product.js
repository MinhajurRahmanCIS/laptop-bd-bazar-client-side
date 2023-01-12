import React, { useContext, useEffect, useState } from 'react';
import { Button, ButtonGroup, Card } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
import { Form, Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hook/useTitle';

const My_Product = () => {
    const { user, setAddDetail } = useContext(AuthContext);
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:1001/my_product?Email=${user?.email}`)
            .then(response => response.json())
            .then(json => setreviews(json))
    }, [user]);


    const Add = (review) => {
        setAddDetail(review);
        alert('Advertisement Added')
    }



    const Delete = (review) => {

        const confirmation = window.confirm("Are you sure you want to DELETE this product");
        if (confirmation) {
            fetch(`http://localhost:1001/My_products/${review._id}`, {
                method: 'DELETE',
            })
                .then((response) => response.json())
                .then((data) => {
                    if (data.acknowledged) {
                        alert('You Deleteted the review successfully.')
                    }
                    const remaining = reviews.filter(rev => rev._id !== review._id);
                    setreviews(remaining);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }


    return (
        <div>
            <h2>My Products</h2>
            <table className="table mb-5">

                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Add In Advertisement</th>
                        <th scope="col">Delete Product</th>
                    </tr>
                </thead>

                {
                    reviews.length === 0 &&
                        <h2 className='mt-3 text-primary'>No Product Found</h2>
                }


                <tbody>
                    {
                            reviews.map((review, i) => <tr key={i}>
                                <th scope="row">{review.name}</th>
                                <td>{review.resale_price}</td>
                                <td><p>Available</p></td>
                                <td><button onClick={() => Add(review)} type="button" className="btn btn-success">Advertise</button></td>
                                <td><button onClick={() => Delete(review)} type="button" className="btn btn-danger">Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table >
        </div>
    );
};

export default My_Product;