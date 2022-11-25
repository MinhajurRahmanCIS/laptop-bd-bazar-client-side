import React from 'react';
import b1 from '../../../asset/banner/b1.jpg'
import b2 from '../../../asset/banner/b2.jpg'
import b3 from '../../../asset/banner/b3.jpg'
import b4 from '../../../asset/banner/b4.jpeg'
const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt='' src={b1} className="w-full " />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle btn-outline">❮</a>
                    <a href="#slide2" className="btn btn-circle btn-outline">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt='' src={b2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle btn-outline">❮</a>
                    <a href="#slide3" className="btn btn-circle btn-outline">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src={b3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle btn-outline">❮</a>
                    <a href="#slide4" className="btn btn-circle btn-outline">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt='' src={b4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle btn-outline">❮</a>
                    <a href="#slide1" className="btn btn-circle btn-outline">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;