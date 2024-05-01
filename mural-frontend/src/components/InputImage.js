import React from 'react';
import '../styles/input.css';

const FileInput = ({ label, setVal, accept = '.pdf' }) => {
    const onSelectFile = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
            setVal(undefined);
        } else {
            setVal(e.target.files[0]);
        }
    };

    return (
        <>
            <label>
                <div className='label-text'>{label}</div>
                <input className='' type='file' onChange={onSelectFile} />
            </label>
        </>
    );
};

export default FileInput;
