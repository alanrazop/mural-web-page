import React from 'react';
import '../styles/button.css';

function Button(props) {
    const { action, text, type, icon } = props;

    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                action(e);
            }}
            className={`button button-${type}`}
        >
            {icon && <span className='button-icon'>{icon}</span>}
            {text}
        </button>
    );
}

export default Button;
