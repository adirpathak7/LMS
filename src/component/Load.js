import React, { useState, useEffect } from 'react';

const Load = () => {
    const [opacity, setOpacity] = useState(1.0);
    const reducer = 0.1;

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateOpacity(reducer);
        }, 1000);
        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, []);

    const updateOpacity = (reducer) => {
        const updatedOpacity = opacity - reducer;
        if (updatedOpacity > 0) {
            document.getElementById('spin')?.style.setProperty('opacity', updatedOpacity);
            setOpacity(updatedOpacity);
        } else {
            document.getElementById('spin')?.style.setProperty('display', 'none');
            clearInterval(); // Clear interval when opacity reaches 0
        }
    };

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className="bg-black h-24 w-24 rounded-full animate-bounce" id='spin'></div>
        </div>
    );
};

export default Load;
