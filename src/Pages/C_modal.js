import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { format } from 'date-fns';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const C_modal = ({ info }) => {



    const { user } = useContext(AuthContext);
    const date = new Date();

    const handleBook = (event) => {
        event.preventDefault();

        const Date = event.target.Date.value;
        const User_Name = event.target.User_Name.value;
        const Email = event.target.Email.value;
        const Product_Name = event.target.Product_Name.value;
        const Price = event.target.Price.value;
        const Phone_Number = event.target.Phone_Number.value;
        const Meeting_Location = event.target.Meeting_Location.value;

        const bookingInfo = {
            Date: Date,
            User_Name: User_Name,
            Roll: user?.photoURL,
            Email: Email,
            Product_Name: Product_Name,
            Price: Price,
            Phone_Number: Phone_Number,
            Meeting_Location: Meeting_Location


        }

        // POST modal data.
        fetch('http://localhost:1001/bookingCollection', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    notify();
                }
                else {
                    console.log("Something wrong")
                }
            })
    }

    const notify = () => {
        toast.success(' The item is booked.!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Buying info</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body text-start">
                        <form onSubmit={handleBook} >

                            <label>Date : </label>
                            <input name="Date" className='input border-0 w-full max-w-xs' disabled defaultValue={format(date, 'PP')} type="text" /> <br />
                            <label>User Name : </label>
                            <input name='User_Name' className='input border-0 w-full max-w-xs' defaultValue={user?.displayName} disabled placeholder={""} type="text" /> <br />
                            <label>Email : </label>
                            <input name='Email' className='input border-0 w-full max-w-xs' defaultValue={user?.email} disabled type="email" /> <br />
                            <label>Product : </label>
                            <input name='Product_Name' className='input border-0 w-full max-w-xs' disabled defaultValue={info?.name} type="phone" /> <br />
                            <label>Price : </label>
                            <input name='Price' className='input border-0 w-full max-w-xs' defaultValue={info?.resale_price} type="phone" /> <br /> <br />
                            <label>Phone Number : </label>
                            <input name='Phone_Number' className='input  w-full input-bordered max-w-xs' type="phone" /> <br />
                            <label>Meeting Location: </label>
                            <input name='Meeting_Location' className='input w-full input-bordered max-w-xs' type="phone" /> <br />

                            <br />

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default C_modal;