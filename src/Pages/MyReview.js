import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useTitle from '../Hook/useTitle';

const MyReview = () => {
    useTitle('My reviews');

    const { user } = useContext(AuthContext);
    const [reviews, setreviews] = useState([]);

    console.log(reviews);


    useEffect(() => {
        fetch(`https://laptop-bd-bazar-server.vercel.app/review?User_email=${user?.email}`)
            .then(response => response.json())
            .then(json => setreviews(json))
    }, [user]);


    return (
        <div>
            <h2>My Orders</h2> 
            <table className="table mb-5">
                <thead>
                    <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Pay Now</th>
                    </tr>
                </thead>


                <tbody>
                    {
                        reviews.length === 0 ?

                            <h2 className='mt-3 text-primary !'>No orders were added</h2>
                            :
                            reviews.map((review, i) => <tr key={i}>
                                <td>{review.Product_Name}</td>
                                <td>{review.Price}</td>

                                <td><button type="button" className="btn btn-warning">Pay</button></td>
                            </tr>)
                    }
                </tbody>
            </table >
        </div>
    );
};

export default MyReview;