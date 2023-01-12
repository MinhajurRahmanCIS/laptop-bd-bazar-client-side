import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../Hook/useTitle';


const Services = () => {
    const Services = useLoaderData();
    useTitle('Services');
    return (
        <div>
            <div className='row g-2'>
                <h2 className="pb-2 border-bottom">Services</h2>
                {
                    Services.map(Services =>
                        <div key={Services._id} className='my-4  col-lg-12 col-12 col-md-12'>
                            <div className="card mb-3" style={{ width: '100%' }}>
                                <div className="row g-0">
                                    <div className="col-md-3">
                                        <PhotoProvider>
                                            <PhotoView src={Services.picture}>
                                                <img src={Services.picture} style={{ width: '300px', height: '180px' }} className="img-fluid rounded-start" alt="..." />
                                            </PhotoView>
                                        </PhotoProvider>

                                    </div>
                                    <div className="col-md-9 ">
                                        <div className="card-body ">
                                            <h4 className="card-title" style={{ color: "tomato" }}>{Services.name}</h4>
                                            <h5 className="card-title">Price: {Services.price}</h5>
                                            <p className="card-text ">{(Services.about).slice(0, 100)}</p>
                                            <Link to={`/sevices/${Services._id}`} ><Button variant="primary">View Details</Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;