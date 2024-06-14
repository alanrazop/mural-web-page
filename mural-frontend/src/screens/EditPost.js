// EditForm.js
import React, { useState, useEffect } from 'react';
import { getPost, updatePost } from '../client/forum';
import '../styles/forumForm.css';
import Input from '../components/Input';
import InputImage from '../components/InputImage';
import Button from '../components/Button';
import TextArea from '../components/TextArea';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import { useNavigate, useParams } from 'react-router-dom';

const EditForm = () => {
    const searchParams = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        content: '',
    });

    useEffect(() => {
        if (searchParams.id) {
            getPost(searchParams.id).then((post) => {
                setData({
                    title: post.title, // Set title from post data
                    content: post.content, // Set content from post data
                });
            });
        }
    }, [searchParams.id]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!data.title || !data.content) {
            FireError('Por favor, ingrese todos los campos requeridos');
            return;
        }
        try {
            // Remove the _id property as it's not needed for update
            const { _id, ...postData } = data;
            await updatePost(searchParams.id, postData);

            FireSucess('Publicación actualizada exitosamente');
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
            <h2>Editar publicación</h2>
            <form className='forum-form'>
                <Input
                    label='Título'
                    getVal={data.title}
                    setVal={(value) => onInputChange('title', value)}
                />
                <br />
                <TextArea
                    label='Descripción'
                    getVal={data.content}
                    setVal={(value) => onInputChange('content', value)}
                />
                <br />
                <InputImage label={'Sube una imagen (Opcional)'} />
                <br />
                <Button
                    type='create'
                    action={onSubmit}
                    text={'Guardar cambios'}
                />
                <br />
            </form>
        </div>
    );
};

export default EditForm;
