import React, { useState } from 'react';
import { postPost } from '../client/forum';
import '../styles/forumForm.css';
import Input from '../components/Input';
import InputImage from '../components/InputImage';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import { useNavigate, useParams } from 'react-router-dom';

const ForumForm = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        content: '',
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!data.title || !data.content) {
            FireError('Por favor, ingrese todos los campos requeridos');
            return;
        }
        try {
            await postPost(data);

            FireSucess('Publicación creada exitosamente');
            navigate('/forum');
        } catch (error) {
            if (error.response && error.response.status === 400) {
                FireError(error.response.data.message);

                return;
            } else {
                FireError(error.response.data.message);
            }
        }
    };

    const onInputChange = (key, value) => {
        setData({
            ...data,
            [key]: value,
        });
    };

    return (
        <div>
            <h2>Nueva publicación</h2>
            <form className='forum-form'>
                <Input
                    label='Título'
                    getVal={data.titulo}
                    setVal={(value) => onInputChange('title', value)}
                />
                <br></br>

                <br></br>
                <TextArea
                    label='Descripción'
                    getVal={data.content}
                    setVal={(value) => onInputChange('content', value)}
                />
                <br></br>
                <Button
                    type='create'
                    action={onSubmit}
                    text={'Crear publicación'}
                />
                <br></br>
                <br></br>
            </form>
        </div>
    );
};

export default ForumForm;
