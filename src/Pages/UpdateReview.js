import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hook/useTitle';

const UpdateReview = () => {

    useTitle('Update Reviews');
    const data = useLoaderData();
    const review = data[0].Review;
    const email = data[0].User_email;
    const id = data[0]._id;
    const serviceName = data[0].serviceName;

    const updateReview = (event) => {

        event.preventDefault();
        const element = event.target;
        const Review = element.Review.value;

        const updateReview = {
            Review
        }

        console.log(updateReview);

        fetch(`https://laptop-bd-bazar-server.vercel.app/servicereview/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateReview),
        }).then((res) => res.json()).then((data) => {
            if (data.acknowledged) {



                console.log(data);
                element.reset();

            }

        }).catch((error) => {
            console.log(error.message);
        })
    }


    return (
        <div>
            <Form onSubmit={updateReview}>


                <Form.Group className="m-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="Email" defaultValue={email} readOnly type="text" placeholder="Service Image URL" required />
                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Label>Review-Update</Form.Label>
                    <Form.Control name="Review" defaultValue={review} type="text" placeholder="Review-Update" required />
                </Form.Group>
                <div className='ms-3 mb-5'>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default UpdateReview;