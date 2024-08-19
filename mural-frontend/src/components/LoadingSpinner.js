import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

const LoadingSpinner = () => {
    return (
        <div className='loading-spinner'>
            Cargando{' '}
            <RotatingLines
                visible={true}
                height='25'
                width='25'
                color='blue'
                strokeColor='purple'
                strokeWidth='5'
                animationDuration='0.75'
                ariaLabel='rotating-lines-loading'
                wrapperStyle={{}}
                wrapperClass=''
            />
        </div>
    );
};

export default LoadingSpinner;
