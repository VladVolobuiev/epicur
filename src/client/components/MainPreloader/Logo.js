import React, {useState} from 'react';

/** ====================================================================================================
 *              Main
 =====================================================================================================*/

const Logo = (className, viewBox) => {

    const [show, setShow] = useState(false)

    setTimeout(() => {
        setShow(true)
    }, 1000);

    return (
        <>
            {show && (
                <svg
                    className={className}
                    viewBox={viewBox}
                >
                </svg>
            )}
        </>
    )
}

export default Logo
