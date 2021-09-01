import React from 'react';

const ButtonAnimation = ({text,urlImg}) => {
    return (
        <div style={{marginTop: "20px"}}>
            <div  className='align-items-center justify-content-center col-2'>
                            {/*<span  style={{width:"10vw"}} className="closing-button btn-test"><span*/}
                            <span style={{width:"30vw"}} className="closing-button btn-test"><span
                                // className='text-pseudo-button'>Дізнатися більше</span>
                                className='text-pseudo-button'>
                                 <img
                                     height='30px'
                                     width='30px'
                                     src={urlImg}
                                 />
                                {text}
                            </span>

                        </span>
            </div>
        </div>
    );
};

export default ButtonAnimation;