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
                    <b>Foro</b>
                </div>

                <div className='container-form'>
                    <label>
                        <Input
                            label={'Buscar publicación'}
                            getVal={getPostTitle}
                            setVal={setPostTitle}
                        />
                    </label>
                    <br />
                    <Button
                        text={'Nueva publicación'}
                        type='create'
                        action={() => navigate(`/posts/new`)}
                    />
                    <br />
                    {loading ? (
                        <LoadingSpinner /> // Show loading spinner while loading
                    ) : filteredBlog.length > 0 ? (
                        filteredBlog.map((post) => (
                            <ForumCard
                                key={post._id}
                                id={post._id}
                                title={post.title}
                                description={post.content}
                                deletePost={handleDeletePost}
                                editPost={() => navigate(`/posts/${post._id}`)}
                                seeMore={() =>
                                    navigate(`/posts/view/${post._id}`)
                                }
                            />
                        ))
                    ) : (
                        <p>No hay publicaciones en el foro.</p>
                    )}
                </div>
            </body>
        </div>
    );
};

export default Forum;
