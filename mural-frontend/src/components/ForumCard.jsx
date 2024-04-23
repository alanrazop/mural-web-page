import React from 'react';
import '../styles/forumCard.css';
import Button from './Button';

const ForumCard = ({ id, title, description, editPost, deletePost }) => {
    return (
        <div>
            <article>
                <div class='article-image-container'>
                    <img src='https://img.freepik.com/free-vector/newspaper-concept-illustration_114360-22666.jpg?w=826' />
                </div>
                <div class='content-container'>
                    <h3 class='article-title'>{title}</h3>
                    <p class='article-content'>{description}</p>
                    <div className='button-container'>
                        <Button
                            type='modify'
                            text={'Editar'}
                            action={editPost}
                        />
                        <Button
                            type='delete'
                            text={'Eliminar'}
                            action={(e) => deletePost(id)}
                        />
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ForumCard;
