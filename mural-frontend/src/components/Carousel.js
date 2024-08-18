import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getAllImages } from '../client/image';
import Button from './Button';
import { FireQuestion, FireError, FireSucess } from '../utils/alertHandler';
import { useNavigate } from 'react-router-dom';
import { deleteImage } from '../client/image';
import { Trash, Trash2 } from 'react-feather';
import { isAuthenticated } from '../utils/auth';
import LoadingSpinner from '../components/LoadingSpinner';

const Responsive = () => {
    const [getImage, setImage] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Desea eliminar la imagen?',
                'Esta acción no se puede deshacer.'
            );

            if (!confirmation.isConfirmed) return;
            await deleteImage(id);

            FireSucess('Imagen eliminada exitosamente');
            navigate('/gallery');
        } catch (error) {
            FireError(error);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const image = await getAllImages();

                setImage(image);
            } catch (error) {
                FireError('Error al cargar las imágenes.');
            } finally {
                setLoading(false); // Set loading to false once the data is fetched
            }
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
            {loading ? (
                <LoadingSpinner /> // Show loading spinner while loading
            ) : getImage.length > 0 ? (
                <Slider {...settings}>
                    {getImage.map((el, i) => (
                        <div key={i}>
                            <img src={el.imageUrl} alt={el.title} />
                            <h5>{el.title}</h5>
                            {isAuthenticated() && (
                                <Button
                                    type='delete'
                                    action={(e) => handleDelete(el._id)}
                                    icon={<Trash2 size={15} />}
                                />
                            )}
                        </div>
                    ))}
                </Slider>
            ) : (
                <p>No hay imágenes en la galeria.</p>
            )}
        </div>
    );
};

export default Responsive;
