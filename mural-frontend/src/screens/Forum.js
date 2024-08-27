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

const Forum = () => {
    const searchParams = useParams();
    const navigate = useNavigate();
    const [getBlog, setBlog] = useState([]);
    const [filteredBlog, setFilteredBlog] = useState([]); // Filtered list of blog posts
    const [getPostTitle, setPostTitle] = useState('');
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        (async () => {
            try {
                const blog = await getPosts();
                setBlog(blog);
                setFilteredBlog(blog);
            } catch (error) {
                FireError('Error al cargar las publicaciones');
            } finally {
                setLoading(false); // Set loading to false once the data is fetched
            }
        })();
    }, []);

    // Filter blog posts when search term changes
    useEffect(() => {
        if (getPostTitle.trim() === '') {
            setFilteredBlog(getBlog);
        } else {
            const newFilteredBlog = getBlog.filter((post) =>
                post.title.toLowerCase().includes(getPostTitle.toLowerCase())
            );
            setFilteredBlog(newFilteredBlog);
        }
    }, [getPostTitle, getBlog]);

    const handleDeletePost = async (id) => {
        try {
            const confirmation = await FireQuestion(
                '¿Desea eliminar la publicación?',
                'Esta acción no se puede deshacer.'
            );

            if (!confirmation.isConfirmed) return;
            await deletePost(id);

            setBlog(getBlog.filter((blog) => blog._id !== id));
            setFilteredBlog(filteredBlog.filter((blog) => blog._id !== id));

            FireSucess('Publicación eliminada exitosamente');
            navigate('/forum');
        } catch (error) {
            FireError(error);
        }
    };

    return (
        <div className='overlay'>
            <body>
                <div className='containerTitle'>
                    <b>Elementos del mural</b>
                </div>

                <div className='container-form'>
                    <image src='./elementos.png'></image>
                </div>
            </body>
        </div>
    );
};

export default Forum;
