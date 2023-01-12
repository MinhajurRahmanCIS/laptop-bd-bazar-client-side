import React, { useContext, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import b1 from '../Assets/banner/b1.jpg';
import b2 from '../Assets/banner/b2.jpg';
import b3 from '../Assets/banner/b3.jpg';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../Hook/useTitle';
import { useQuery } from '@tanstack/react-query';

const Home = () => {
    useTitle('Home');
    const { addDetail } = useContext(AuthContext);
    console.log(addDetail);

    const [index, setIndex] = useState(0);
    // const categories = useLoaderData();

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://laptop-bd-bazar-server.vercel.app/categories')
            .then(res => res.json())
    })

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <div className='mb-5'>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={b1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={b2}
                            alt="Second slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={b3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>

            {addDetail &&
                <div>
                    <h1 className='fw-bold'>Advertisement</h1>
                    <div className="card mb-3" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={addDetail.picture} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title ">{addDetail.name}</h2>
                                    <h5 className="card-text">Price: {addDetail.resale_price}</h5>
                                    <h5 className="card-text">Used: {addDetail.used_year}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

            <div className='mt-5 row g-2'>
                <h1 className='fw-bold'>Laptop Categories</h1>
                <div>
                    {
                        categories.map(categorie =>
                            <div key={categorie.Category_No} className='my-4 col-lg-12 col-12 col-md-12'>
                                <div className="card mb-3">
                                    <div className="row g-0 bg-light">
                                        <div className="col-md-5">
                                            <PhotoProvider>
                                                <PhotoView src={categorie.picture}>
                                                    <img src={categorie.picture} style={{ width: '600px', height: '300px' }} className="img-fluid rounded-start" alt="Laptops" />
                                                </PhotoView>
                                            </PhotoProvider>
                                        </div>

                                        <div className="col-md-7 mt-5">
                                            <div className="card-body ">
                                                <h4 className="card-title" >{categorie.name}</h4>
                                                <Link to={`/categories/${categorie.name}`}> <button type="button" className="btn btn-info mt-5 p-3 text-white fw-bold">More Laptops</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>


            <Card className="bg-dark text-white">
                <Card.Img src="https://www.asus.com/WebsitesBanner/BD/banners/ntlywcpjsyhfziyy/ntlywcpjsyhfziyy-0_0_desktop_1X.jpg?webp" alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Asus</Card.Title>
                    <Card.Text>
                        The ultimate game changer.
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>

        </div >
    );
};

export default Home;