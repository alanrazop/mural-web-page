import React, { useState, useEffect } from 'react';
import { getPost } from '../client/forum';
import '../styles/viewPost.css';
import { useNavigate, useParams } from 'react-router-dom';

const ForumForm = () => {
    const searchParams = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        title: '',
        content: '',
        createdAt: '',
    });

    useEffect(() => {
        if (searchParams.id) {
            getPost(searchParams.id).then((post) => {
                setData({
                    title: post.title, // Set title from post data
                    content: post.content, // Set content from post data
                    createdAt: post.createdAt,
                });
            });
        }
    }, [searchParams.id]);

    return (
        <div className='container-post'>
            <h2 className='post-title'>{data.title}</h2>
            <p className='post-date'>
                {new Date(data.createdAt).toLocaleDateString()}
            </p>
            <div className='post-content'>{data.content}</div>
        </div>
    );
};

export default ForumForm;
