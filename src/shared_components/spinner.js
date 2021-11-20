import React from 'react';
import Lottie from 'react-lottie';
import animationData from './book_loader.json';

// export const spinner = (<div className="pt-5"><div className="text-center mt-5 pt-5 text-dark"><Spinner animation="border" role="status">
//                         <span className="sr-only">Loading...</span>
//                         </Spinner></div></div>);

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Spinner = (props) => {
    return (<div ><div className="text-center text-dark"><Lottie
        options={defaultOptions}
        height={props.height}
        width={props.width}
    /></div></div>)
};

export default Spinner;