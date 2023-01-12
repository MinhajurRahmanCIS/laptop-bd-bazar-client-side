import React, { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { BsFillCheckCircleFill, BsFillFileExcelFill, IconName } from "react-icons/bs";


const Cat = ({ laptops_info, setModalData }) => {

    const { user } = useContext(AuthContext);
    console.log(user);

    const ModalData = (info) => {
        setModalData(info);
    }
    console.log(laptops_info)

    return (
        <div className="container text-center">
            <div className="row g-2">
                {
                    laptops_info.map((info, i) =>
                        < div key={i} className="col-6" >
                            <div className="card" >
                                <img style={{ height: "320px", width: "auto" }} src={info.picture} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h4 style={{ color: 'SteelBlue' }} className="card-title">{info.name}</h4>
                                    <p>Original Price: {info.orginal_price}</p>
                                    <p className='fw-bold'>Resale Price: {info.resale_price}</p>
                                    <p>Location: {info.location}</p>
                                    <p>Year of use: {info.used_year}</p>
                                    <p>Seller name: {info.sallerName}</p>
                                    <p>Post Date: {info.post_date}</p>
                                    <p>Valid User: {user?.emailVerified ? <span className='text-primary'><BsFillCheckCircleFill></BsFillCheckCircleFill></span> : <span className='text-danger'><BsFillFileExcelFill></BsFillFileExcelFill></span>}</p>
                                    <button onClick={() => ModalData(info)} style={{ color: "white", backgroundColor: 'SteelBlue' }} className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">Book Now</button>
                                </div>
                            </div>
                        </div >
                    )
                }
            </div>
        </div>

    );
};

export default Cat;