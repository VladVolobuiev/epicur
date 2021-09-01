import React, {useState} from 'react';
import '../../../styles/countdown.scss'

const Countdown = ({firstText ='', secondText='', startCounting = true , num = 8}) => {
    const [count, setCount] = useState(-1)
    if (startCounting && num >= count) {
        setTimeout(() => setCount(() => count + 1), 500)
    }




    return (
        <div className="counter">
            <div>{firstText}
                <div className="card-block-general">
                    <div className="card-block">
                    <div className={!startCounting?"flip-container" : "flip-container activate"}>
                        <div className="background-top">
                            <div className='flip-top-content'>{count}</div>
                        </div>
                        <div className="background-bottom">
                            <div className='flip-bottom-content'>{count-1}</div>
                        </div>
                        <div className="flipper">
                            <div className="flipper-front">
                                <div className="background-top-flipper">
                                    <div className='background-top-flipper-content'>{count-1}</div>
                                </div>
                                <div/>
                            </div>
                            <div className="flipper-back">
                                <div className="background-bottom-flipper">
                                    <div className='background-bottom-flipper-content'>{count}</div>
                                </div>
                                <div/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                {secondText}</div>

        </div>)

};

export default Countdown;
/*
import React from 'react';
import '../../../styles/cards.scss'

const Cards = ({children, frontContent, backPhotoLink, height = '320px', width = '480px'}) => {
    return (
        <div className="card-block">
            <div className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <div className='outsource-photo p-5'>{children||frontContent}</div>
                    </div>
                    <div className="back">
                        <div className='img-block' style={{backgroundImage: `url(${backPhotoLink})`, width, height}}/* width ={width} height = {height} alt = ''/>
               /*     </div>
                </div>
            </div>
        </div>
    );
};
*/
