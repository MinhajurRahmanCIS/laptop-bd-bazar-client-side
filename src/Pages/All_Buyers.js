import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const All_Buyers = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setreviews] = useState([]);

    useEffect(() => {
        fetch('https://laptop-bd-bazar-server.vercel.app/Users?Roll=Buyer')
            .then(response => response.json())
            .then(json => setreviews(json))
    }, [user]);


    const Delete = (review) => {
        console.log(review._id)
        const confirmation = window.confirm("Are you sure you want to Delete!");
        if (confirmation) {
            fetch(`https://laptop-bd-bazar-server.vercel.app/UserInfo/${review._id}`, {
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
            <table className="table mb-5">

                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.length === 0 ?

                            <h2 className='mt-3 text-primary !'>No Buyer available</h2>
                            :
                            reviews.map((review, i) => <tr key={i}>
                                <th scope="row">{review.User_name}</th>
                                <td>{review.User_Email}</td>
                                <td><button onClick={() => Delete(review)} type="button" className="btn btn-danger">Delete</button></td>
                            </tr>)
                    }
                </tbody>
            </table >
        </div>
    );
};

export default All_Buyers;