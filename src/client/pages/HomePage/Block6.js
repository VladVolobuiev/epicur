import React from 'react';
import {Row, Col} from 'react-bootstrap'
import img from '../../../img/IMG_0289.PNG'
import factory from '../../../img/Factory.png'
import {Parallax, ParallaxProvider} from "react-scroll-parallax";
import chickencontur1 from "../../../img/chickencontur1.png";
import chicken from '../../../img/chicken.jpeg'
import chickencontur2 from '../../../img/chickencontur2.png'
import chickenhot1 from '../../../img/chickenhot1.png'
import chickenhot2 from '../../../img/chickenhot2.png'
import chickenhot3 from '../../../img/chickenhot3.png'
import chickenhot4 from '../../../img/chickenhot4.png'
import chickenhot5 from '../../../img/chickenhot5.png'
import egg4 from '../../../img/egg4.png'
import eggs1 from '../../../img/eggs1.png'
import eggs2 from '../../../img/eggs2.png'
import eggs3 from '../../../img/eggs3.png'
import grass from '../../../img/grass.png'
import grass1 from '../../../img/grass1.png'
import grass2 from '../../../img/grass2.png'
import grass3 from '../../../img/grass3.png'
import grass4 from '../../../img/grass4.png'
import grass5 from '../../../img/grass5.png'
import grass6 from '../../../img/grass6.png'

const Block6 = () => {
    return (
        <div className={'block__6__container'}>
            <div className={'block__6__header'}>
                <div className={'Bebas-Neue-Bold inline block__5__header__text__1'}>{'EPIKUR '}</div>
                <div className={'inline text__space'}>{' '}</div>
                <div className={'Bebas-Neue-Bold inline block__5__header__text__2'}>СМАЧНА КОМПАНIЯ</div>
            </div>

            {/*         PARALLAX                    */}
            <>
                <div className={'block__6__img4__container'}>
                    <ParallaxProvider>
                        <Parallax
                            y={[-20, 20]} tagOuter="figure"
                            slowerScrollRate
                            tag="figure">
                            <img src={grass6} alt="egg1" className={'block__6__img4'}/>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                <div className={'block__6__img1__container'}>
                    <ParallaxProvider>
                        <Parallax
                            y={[-55, 55]} tagOuter="figure"
                            slowerScrollRate
                            tag="figure">
                            <img src={chickenhot1} alt="egg1" className={'block__6__img1'}/>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                <div className={'block__6__img2__container'}>
                    <ParallaxProvider>
                        <Parallax
                            y={[-15, 15]} tagOuter="figure"
                            slowerScrollRate
                            tag="figure">
                            <img src={chickenhot2} alt="egg1" className={'block__6__img2'}/>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                {/*<div className={'block__6__img3__container'}>*/}
                {/*    <ParallaxProvider>*/}
                {/*        <Parallax*/}
                {/*            y={[-20, 20]} tagOuter="figure"*/}
                {/*            slowerScrollRate*/}
                {/*            tag="figure">*/}
                {/*            <img src={chickenhot4} alt="egg1" className={'block__6__img3'}/>*/}
                {/*        </Parallax>*/}
                {/*    </ParallaxProvider>*/}
                {/*</div>*/}
                <div className={'block__6__img5__container'}>
                    <ParallaxProvider>
                        <Parallax
                            y={[-35, 35]} tagOuter="figure"
                            slowerScrollRate
                            tag="figure">
                            <img src={grass4} alt="egg1" className={'block__6__img5'}/>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                <div className={'block__6__img6__container'}>
                    <ParallaxProvider>
                        <Parallax
                            y={[-15, 15]} tagOuter="figure"
                            slowerScrollRate
                            tag="figure">
                            <img src={chickenhot3} alt="egg1" className={'block__6__img6'}/>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                <div className={'block__6__img7__container'}>
                    <ParallaxProvider>
                        <Parallax
                            y={[-35, 35]} tagOuter="figure"
                            slowerScrollRate
                            tag="figure">
                            <img src={grass3} alt="egg1" className={'block__6__img7'}/>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                <div className={'block__6__img8__container'}>
                    <ParallaxProvider>
                        <Parallax
                            y={[-45, 45]} tagOuter="figure"
                            slowerScrollRate
                            tag="figure">
                            <img src={grass2} alt="egg1" className={'block__6__img8'}/>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                <div className={'block__6__img9__container'}>
                    <ParallaxProvider>
                        <Parallax
                            y={[-40, 40]} tagOuter="figure"
                            slowerScrollRate
                            tag="figure">
                            <img src={grass1} alt="egg1" className={'block__6__img9'}/>
                        </Parallax>
                    </ParallaxProvider>
                </div>
                <div className={'block__6__img10__container'}>
                    <ParallaxProvider>
                        <Parallax
                            y={[-40, 40]} tagOuter="figure"
                            slowerScrollRate
                            tag="figure">
                            <img src={grass5} alt="egg1" className={'block__6__img10'}/>
                        </Parallax>
                    </ParallaxProvider>
                </div>

            </>

            <div className={"block__6__img__text__container"}
                // className={'width100__height100'}
            >
                {/*<Col md={4}></Col>*/}
                {/*<Col md={4}>*/}
                <div className={'block__6__image__container'}>
                    <img src={img} alt="img" className={'block__6__round__back'}/>
                </div>
                {/*</Col>*/}
                {/*<Col md={4}>*/}
                <div className={'block__6__text__container'}>
                    <div className={'block__6__header__1 Bebas-Neue-Bold'}>СМАЧНО РАЗОМ З ДРУЗЯМИ</div>
                    <div className={'block__6__text__1 Formular-Light'}>
                        ПРОДУКЦІЯ ТМ” ЕПІКУР” - ЦЕ БІЛЬШЕ НІЖ СМАЧНА Й КОРИСНА КУРОЧКА БЕЗ АНТИБІОТИКІВ ТА ІНШИХ
                        СТИМУЛЯТОРІВ РОСТУ. ВОНА ПОКЛИКАНА ДОПОМАГАТИ КОЖНІЙ ЛЮДИНІ ВЕСТИ ЗДОРОВЕ ТА ЩАСЛИВЕ ЖИТТЯ Й
                        БУДУВАТИ ЙОГО ДЛЯ БЛИЗЬКИХ. МИ МРІЄМО ПРО ЩАСЛИВЕ СУСПІЛЬСТВО, ЩО ВМІЄ РАДІТИ ДРІБНИЦЯМ Й
                        ЦІНУВАТИ КОЖНУ МИТЬ.
                    </div>
                </div>
                {/*</Col>*/}
            </div>
            {/*<img src={factory} alt="factory" className={'block__6__img'}/>*/}
        </div>
    );
};

export default Block6;