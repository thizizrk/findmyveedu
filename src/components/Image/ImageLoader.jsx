import React, { useState } from 'react';

const ImageLoader = ({ src, alt, className, style }) => {
    const [loading, setLoading] = useState(true); // State to track loading status

    const handleImageLoad = () => {
        setLoading(false); // Set loading to false when the image loads
    };

    return (
        <div>
            {loading && (
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1
                }}>
                    {/* Loader or Spinner component */}
                    <span>Loading...</span> {/* You can replace this with a spinner component */}
                </div>
            )}
            <img
                src={src}
                alt={alt}
                className={className}
                onLoad={handleImageLoad} // Call this function when the image has loaded
                style={{ ...style,display: loading ? 'none' : 'block' }} // Hide image until loaded
            />
        </div>
    );
};

export default ImageLoader;
