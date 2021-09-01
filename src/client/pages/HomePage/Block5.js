import React from 'react';
import {Row, Col} from 'react-bootstrap';


import chicken from '../../../img/chicken.jpeg'
import ch1_1 from '../../../img/chicken1-1.png'
import ch1_2 from '../../../img/chicken1-2.png'
import ch2_1 from '../../../img/chicken2-1.png'
import ch2_2 from '../../../img/chicken2-2.png'
import grass from '../../../img/grass.png'


const Block5 = () => {
    return (
        <>
        <Row className={'block__5__container'}>
            <Row className={'block__5__header__absolute'}>
                <Row>
                    <Col>
                        <div className={'block__5__header__small Formular-Light'}>
                            НІЖНИЙ КУР
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={'block__5__header'}>
                            <div className={'Bebas-Neue-Bold inline block__5__header__text__1'}>{'НАШЕ '}</div>
                            <div className={'inline text__space'}>{' '}</div>
                            <div className={'Bebas-Neue-Bold inline block__5__header__text__2'}>ВИРОБНИЦТВО</div>
                        </div>
                    </Col>
                </Row>
                <Row className={'block__5__header'}>
                    {/*<Col sm={6}>*/}
                        <div className={'Bebas-Neue-Bold inline block__5__header__text__3 '}>НАЙКРАЩИХ КУР</div>
                    {/*</Col>*/}
                </Row>
                <Row className={"block__5__img__text__container"}>
                    <Col  className={'block__5__left__container'}>
                        <div className={'block__5__img__circle'}/>
                        <div className={'block__5__img__container'}>

                            <img src={chicken} alt="chicken" className={'block__5__img'}/>

                        </div>
                    </Col>
                    <Col>
                        <div className={'block__5__text Formular-Light'}>
                            ПРОДУКЦІЯ ТМ” ЕПІКУР” - ЦЕ БІЛЬШЕ НІЖ СМАЧНА Й КОРИСНА КУРОЧКА БЕЗ АНТИБІОТИКІВ ТА ІНШИХ СТИМУЛЯТОРІВ РОСТУ. ВОНА ПОКЛИКАНА ДОПОМАГАТИ КОЖНІЙ ЛЮДИНІ ВЕСТИ ЗДОРОВЕ ТА ЩАСЛИВЕ ЖИТТЯ Й БУДУВАТИ ЙОГО ДЛЯ БЛИЗЬКИХ. МИ МРІЄМО ПРО ЩАСЛИВЕ СУСПІЛЬСТВО, ЩО ВМІЄ РАДІТИ ДРІБНИЦЯМ Й ЦІНУВАТИ КОЖНУ МИТЬ.
                        </div>
                    </Col>




                </Row>
            </Row>
        </Row>

            <Col md={6} className={'block__5__right__container'}>
                <div className={'ch__all__images__container'}>
                    <div className={'chicken__images__1__container'}>
                        <img src={ch1_1} alt="ch1_1" className={'chicken__images__img__1'}/>
                        <img src={ch1_2} alt="ch1_2" className={'chicken__images__img__2'}/>
                    </div>
                    <div className={'chicken__images__2__container'}>
                        <img src={ch2_1} alt="ch1_1" className={'chicken__images__img__2__1'}/>
                        <img src={ch2_2} alt="ch1_2" className={'chicken__images__img__2__2'}/>
                    </div>
                    <img src={grass} alt="ch1_2" className={'chicken__images__img__3'}/>
                </div>

            </Col>

        </>
    );
};

export default Block5;