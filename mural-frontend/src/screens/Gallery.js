import React, { useEffect, useState } from 'react';
import '../styles/galley.css';
import InputImage from '../components/InputImage';
import Button from '../components/Button';
import Carousel from '../components/Carousel';
import {
    FireError,
    FireSucess,
    FireQuestion,
    FireLoading,
} from '../utils/alertHandler';
import { createImage } from '../client/image';
import Input from '../components/Input';

const Gallery = () => {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!title) {
            FireError('Por favor, ingrese todos los campos requeridos');
            return;
        }

        const swal = FireLoading('Guardando...');
        try {
            const formData = new FormData();
            formData.append('image', image);
            formData.append('title', title);

            await createImage(formData);

            swal.close();

            FireSucess('Imagen creada exitosamente');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                FireError(error.response.data.message);
            } else {
                FireError('Error al crear la imagen');
            }
        }
    };

    return (
        <div>
            <div className='containerTitle'>
                <b>Galería</b>
            </div>
            <div className='container'>
                <div className='logoFundacion'>
                    <form>
                        <Input
                            type='text'
                            id='title'
                            label='Escribe un título'
                            getVal={title}
                            setVal={setTitle}
                            required
                        />
                        <br></br>
                        <InputImage
                            type='file'
                            label='Sube una imagen'
                            id='image'
                            accept='image/*'
                            setVal={setImage}
                            required
                        />

                        <Button
                            text='Publicar imagen'
                            type='create'
                            action={onSubmit}
                        />
                        <br></br>
                    </form>
                </div>
            </div>
            <br></br>
            <Carousel />
        </div>
    );
};

export default Gallery;
