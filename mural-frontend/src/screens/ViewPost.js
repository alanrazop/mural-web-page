import React, { useState, useEffect } from 'react';
import { getPost, postComment, deleteComment } from '../client/forum';
//import { getUserSaved } from '../utils/auth';
import '../styles/viewPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import TextArea from '../components/TextArea';
import Input from '../components/Input';
import Button from '../components/Button';
import { Trash2 } from 'react-feather';
import { isAuthenticated } from '../utils/auth';

const ViewPost = () => {
    const searchParams = useParams();
    //const SavedUser = getUserSaved();
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        content: '',
        createdAt: '',
        user: '',
        comments: [],
    });
    const [commentData, setCommentData] = useState({
        post: searchParams.id,
        user: '',
        content: '',
    });

    useEffect(() => {
        if (searchParams.id) {
            getPost(searchParams.id).then((post) => {
                setData({
                    title: post.title, // Set title from post data
                    content: post.content, // Set content from post data
                    createdAt: post.createdAt,
                    user: post.user,
                    comments: post.comments,
                });
            });
        }
    }, [searchParams.id]);

    const onSubmit = async (e) => {
        e.preventDefault();

        if (commentData.content.length === 0 || commentData.user.length === 0) {
            FireError('¡No puedes enviar un comentario vacio!');
            return;
        }
        try {
            await postComment(commentData);

            FireSucess('Comentario creado exitosamente');
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

    const handleDeleteComment = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Desea eliminar el comentario?',
                'Esta acción no se puede deshacer.'
            );

            if (!confirmation.isConfirmed) return;
            await deleteComment(id);

            FireSucess('Comentario eliminada exitosamente');
            navigate('/forum');
        } catch (error) {
            FireError(error);
        }
    };

    const onInputChange = (key, value) => {
        setCommentData({
            ...commentData,
            [key]: value,
        });
    };

    return (
        <div className='container-post'>
            <h2 className='post-title'>{data.title}</h2>
            <h7>{data.user}</h7>
            <p className='post-date'>
                {new Date(data.createdAt).toLocaleDateString()}
            </p>
            <div className='post-content'>{data.content}</div>
            <TextArea
                label='Deja un comentario:'
                getVal={commentData.content}
                setVal={(value) => onInputChange('content', value)}
            />
            <Input
                label='Escrito por:'
                getVal={commentData.user}
                setVal={(value) => onInputChange('user', value)}
            />
            <Button text='Enviar' type='create' action={onSubmit} />
            <h3>Comentarios</h3>
            {data.comments.length <= 0 ? (
                <p>No hay comentarios</p>
            ) : (
                data.comments.map((comment) => (
                    <div className='post-comment'>
                        <div className='post-comment-row'>
                            <b>{comment.user}</b>
                            <p className='post-date'>
                                {new Date(
                                    comment.createdAt
                                ).toLocaleDateString()}
                            </p>
                        </div>
                        <p className='post-content'>{comment.content}</p>
                        {isAuthenticated() && (
                            <>
                                <Button
                                    key={comment._id}
                                    id={comment._id}
                                    type='delete'
                                    icon={<Trash2 size={15} />}
                                    action={(e) =>
                                        handleDeleteComment(comment._id)
                                    }
                                />
                            </>
                        )}
                    </div>
                ))
            )}
        </div>
    );
};

export default ViewPost;
