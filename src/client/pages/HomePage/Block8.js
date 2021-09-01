import React from 'react';
import factory1 from '../../../img/Factory1.png'
import factory2 from '../../../img/Factory2.png'
import factory3 from '../../../img/Factory3.png'
import EpikurGoogleMaps from "../../components/GoogleMaps/EpikurGoogleMaps";
import {Row, Col} from 'react-bootstrap'

const Block8 = () => {
    return (
        <div className={'block__8__container'}>
            {/*<div className={'block__8__round__dark'}></div>*/}
            {/*<Row className={'width100__height100'}>*/}
            {/*    <Col md={6} xs = {3}></Col>*/}
            {/*    <Col md={6} xs={9}>*/}

                    <div className={'block__8__map__container'}>
                        <EpikurGoogleMaps/>
                    </div>
                {/*</Col>*/}
            {/*</Row>*/}

            {/*<div className={'block__8__footer__img__container'}>*/}
            {/*    <img src={factory1} alt="factory1" className={'block__8__footer__img1'}/>*/}
            {/*    <img src={factory2} alt="factory1" className={'block__8__footer__img2'}/>*/}
            {/*    <img src={factory3} alt="factory1" className={'block__8__footer__img3'}/>*/}
            {/*</div>*/}
        </div>
    );
};

export default Block8;