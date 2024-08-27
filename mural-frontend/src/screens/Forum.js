import React, { useEffect, useState, Suspense } from 'react';
import '../styles/forumForm.css';
import ForumCard from '../components/ForumCard';
import { getPosts } from '../client/forum';
import Input from '../components/Input';
import { deletePost } from '../client/forum';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import LoadingSpinner from '../components/LoadingSpinner'; // Import the LoadingSpinner
import elementos from '../assets/elementos.png';

const Forum = () => {
    const searchParams = useParams();
    const navigate = useNavigate();
    const [getBlog, setBlog] = useState([]);
    const [filteredBlog, setFilteredBlog] = useState([]); // Filtered list of blog posts
    const [getPostTitle, setPostTitle] = useState('');
    const [loading, setLoading] = useState(true); // Loading state

    return (
        <div className='overlay'>
            <body>
                <div className='containerTitle'>
                    <b>Elementos del mural</b>
                </div>

                <div className='container-form'>
                    <img src={elementos} alt=''></img>
                </div>
            </body>
        </div>
    );
};

export default Forum;
