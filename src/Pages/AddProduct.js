import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hook/useTitle';

const AddService = () => {
    useTitle('AddService');

    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const submitService = (event) => {
        event.preventDefault();



        let date = new Date();
        date = format(date, 'PP');

        const name = event.target.Name.value;
        const image = event.target.Image.value;
        const locatoin = event.target.locatoin.value;
        const category = event.target.category.value;
        const usedTime = event.target.usedTime.value;
        const originalPrice = event.target.originalPrice.value;
        const resalePrice = event.target.resalePrice.value;
        const sellername = event.target.sellername.value;

        console.log(image)

        const newService = {
            name: name,
            categoryName: category,
            location: locatoin,
            resale_price: resalePrice,
            orginal_price: originalPrice,
            used_year: usedTime,
            post_date: date,
            picture: image,
            sellername: sellername,
            user_email: user.email
        }

        console.log(newService)

        fetch('http://localhost:1001/categories', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newService),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.acknowledged) {
                    alert('Added Service successfully')
                    event.target.reset();
                    navigate('/dashboard/My_Product');
                }
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    return (
        <div>
            <h2>Add Product</h2>
            <Form className='container w-50 border ' onSubmit={submitService}>
                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control name="Name" type="text" placeholder="Product Name" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Seller Name</Form.Label>
                    <Form.Control name="sellername" type="text" placeholder="Seller Name" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control name="Image" type="text" placeholder=" Image URL" required />
                </Form.Group>

                <Form.Group className='m-3'>
                    <Form.Label>Condition</Form.Label>
                    <select name='condition' className="form-select" aria-label="Default select example">
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                </Form.Group>

                <Form.Group className='m-3'>
                    <Form.Label>Location</Form.Label>
                    <select name='locatoin' className="form-select" aria-label="Default select example">
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                    </select>
                </Form.Group>

                <Form.Group className='m-3'>
                    <Form.Label>Category</Form.Label>
                    <select name='category' className="form-select" aria-label="Default select example">
                        <option value="AMD">AMD</option>
                        <option value="Apple Mac">Apple Mac</option>
                        <option value="Intel">Intel</option>

                    </select>
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control name="mobileNumber" type="text" placeholder="Number" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="Description" type="text" placeholder="Description" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Year of purchase</Form.Label>
                    <Form.Control name="Description" type="text" placeholder="Date" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Used Time</Form.Label>
                    <Form.Control name="usedTime" type="text" placeholder="Date" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Original Price</Form.Label>
                    <Form.Control name="originalPrice" type="text" placeholder="Original" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Resale Price</Form.Label>
                    <Form.Control name="resalePrice" type="text" placeholder="Resale" required />
                </Form.Group>


                <div className='ms-3 mb-5'>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </div>







            </Form>
        </div>
    );
};

export default AddService;