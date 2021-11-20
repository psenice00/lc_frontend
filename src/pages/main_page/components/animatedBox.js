import React from 'react';

import { Spring } from 'react-spring/renderprops'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnimatedBox = (props) => {

    return (
        <div className="col-11 col-lg-3 border  mx-auto mt-4 py-5 text-center shadow">
            <FontAwesomeIcon className="text-dark mb-3 card-opacity ml-2 ml-md-3" icon={props.data.icon} size="3x" />
            <Spring
                from={{ number: 0 }}
                to={{ number: props.data.value }}
                config={{ duration: 2000 }}
            >{props => (
                <h1 className="web-color">
                    {props.number.toFixed()}
                </h1>
            )}
            </Spring>

            <h4 className="text-dark">{props.data.name}</h4>
        </div>
    );
}

export default AnimatedBox;