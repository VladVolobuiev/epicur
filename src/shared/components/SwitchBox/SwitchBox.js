import React from 'react';

import './switchbox-styles.css'

const SwitchBox = ({name}) => {
    return (
        <div className='my-switchBox d-flex m-1'>

            <div className="switch-label position-relative" >{name}:</div>
            {/*// <!-- Rounded switch -->*/}
            <label className="switch">
                <input type="checkbox"/>
                    <span className="slider round"/>
            </label>
        </div>
    );
};

export default SwitchBox;


// <label className="switch">
//     <input type="checkbox"/>
//         <span className="slider"/>
// </label>