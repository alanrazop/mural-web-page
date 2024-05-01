import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import logo from '../assets/Jaguar.PNG';
import { getAllImages } from '../client/image';

const Responsive = () => {
    const [getImage, setImage] = useState([]);

    useEffect(() => {
        (async () => {
            const image = await getAllImages();

            setImage(image);
        })();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className='slider-container'>
            <Slider {...settings}>
                {getImage.map((el) => (
                    <div>
                        <img
                            src={el.imageUrl}
                            alt={el.title}
                            width={50}
                            height={100}
                        />
                        <p>{el.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Responsive;
