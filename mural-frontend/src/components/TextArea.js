import React from 'react';
import '../styles/input.css';

function TextInput(props) {
    const { label, placeholder, getVal, setVal, type } = props;

    return (
        <>
            <label>
                <div className='label-text'>{label}</div>

                <textarea
                    className='large-box-input'
                    type={type}
                    placeholder={placeholder}
                    onChange={(e) => setVal(e.target.value)}
                    value={getVal}
                    cols='40'
                    rows='5'
                ></textarea>
            </label>
        </>
    );
}

export default TextInput;
