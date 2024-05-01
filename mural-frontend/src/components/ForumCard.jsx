import React from 'react';
import '../styles/forumCard.css';
import Button from './Button';
import logo from '../assets/logo_gw_forum.png';
import { Edit, Trash2 } from 'react-feather';

const ForumCard = ({
    id,
    title,
    description,
    editPost,
    deletePost,
    seeMore,
}) => {
    return (
        <div>
            <article>
                <div class='article-image-container'>
                    <img src={logo} alt='logo gender watch' />
                </div>
                <div class='content-container'>
                    <h3 class='article-title'>{title}</h3>
                    <p class='article-content'>{description}</p>
                    <div className='button-container'>
                        <Button
                            type='modify'
                            icon={<Edit size={15} />}
                            action={editPost}
                        />
                        <Button
                            type='delete'
                            icon={<Trash2 size={15} />}
                            action={(e) => deletePost(id)}
                        />
                        <Button
                            type='action'
                            text={'Ver mas...'}
                            action={seeMore}
                        />
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ForumCard;
