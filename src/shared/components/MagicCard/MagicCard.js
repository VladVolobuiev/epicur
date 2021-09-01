import React from 'react';
import '../../../styles/magicCards.scss'

const MagicCards = ({imgLink, classname, height = '320px', width = '480px'}) => {
    return (
        <div className="magic-card-block">
            <div className={classname}>
                            <div className='img-block cards-img-block' style={{backgroundImage: `url(${imgLink})`, width, height}}/>
                    </div>
                </div>

    );
};

export default MagicCards;