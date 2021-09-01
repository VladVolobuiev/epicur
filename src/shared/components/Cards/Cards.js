import React, {useState} from 'react';
import '../../../styles/cards.scss'

const Cards = ({children, frontContent, backPhotoLink, height = '320px', width = '480px', classname = 'card-flip-container'}) => {
    const [show, setShow] = useState(false)

    const backContent = <div className='img-block cards-img-block' style={{backgroundImage: `url(${backPhotoLink})`, width, height}}/* width ={width} height = {height} alt = ''*//>

    const flipCard = () => {
        setShow(true)
    }
    return (
        <div className="photo-card-block">
        <div className={show?`${classname} active`: `${classname}`} onClick={flipCard}>
            <div className="card-flipper">
                <div className="card-front">
                    <div className='outsource-photo p-5'>
                        {frontContent|| children}
                    </div>
                </div>
                <div className="card-back">
                    {children||backContent}
                </div>
            </div>
        </div>
</div>
    );
};

export default Cards;