import React from 'react';
import Loader from 'react-loader-spinner';

const LoaderContainer = () => {
    return (
        <div className="loader_box position-absolute">
            <Loader type="Circles"
            color="#F9A52B"
            height={100}
            width={100}
            timeout={100000}
            />
        </div>
    )
    
}

export default LoaderContainer;