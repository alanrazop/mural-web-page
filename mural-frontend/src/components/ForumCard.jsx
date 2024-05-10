import React from 'react';
import '../styles/forumCard.css';
import Button from './Button';
import logo from '../assets/logo_gw_forum.png';
import { Edit, Trash2 } from 'react-feather';
import { isAuthenticated } from '../utils/auth';

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
                <div className='article-image-container'>
                    <img src={logo} alt='logo gender watch' />
                </div>
                <div className='content-container'>
                    <h3 className='article-title'>{title}</h3>
                    <p className='article-content'>{description}</p>
                    <div className='button-container'>
                        {isAuthenticated() && (
                            <>
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
                            </>
                        )}
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
