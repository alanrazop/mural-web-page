import React, { useEffect, useState } from 'react';
import '../styles/forumForm.css';
import ForumCard from '../components/ForumCard';
import { getPosts } from '../client/forum';
import Input from '../components/Input';
import { deletePost } from '../client/forum';
import { FireError, FireSucess, FireQuestion } from '../utils/alertHandler';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';

const Forum = () => {
    const searchParams = useParams();
    const navigate = useNavigate();
    const [getBlog, setBlog] = useState([]);
    const [filteredBlog, setFilteredBlog] = useState([]); // Filtered list of blog posts
    const [getPostTitle, setPostTitle] = useState('');

    useEffect(() => {
        (async () => {
            const blog = await getPosts();

            setBlog(blog);
        })();
    }, []);

    // Filter blog posts when search term changes
    useEffect(() => {
        if (getPostTitle.trim() === '') {
            // If search term is empty, reset to original list
            setFilteredBlog(getBlog);
        } else {
            // Filter blog posts by title
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

            // Remove the deleted post from getBlog state
            setBlog(getBlog.filter((blog) => blog._id !== id));

            // Remove the deleted post from filteredBlog state
            setFilteredBlog(filteredBlog.filter((blog) => blog._id !== id));

            FireSucess('Publicación eliminada exitosamente');
            navigate('/forum');
        } catch (error) {
            FireError(error);
        }
    };

    return (
        <div>
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
                <br></br>
                <Button
                    text={'Nueva publicación'}
                    type='create'
                    action={() => navigate(`/posts/new`)}
                />
                <br></br>
                {filteredBlog.map((post) => (
                    <ForumCard
                        key={post._id} // Add a key prop for each rendered element
                        id={post._id} // Pass the post ID as a prop
                        title={post.title}
                        description={post.content}
                        deletePost={handleDeletePost}
                        editPost={() => navigate(`/posts/${post._id}`)}
                        seeMore={() => navigate(`/posts/view/${post._id}`)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Forum;
