import React from 'react';
import { Row, Col } from 'react-bootstrap';
import calc from '../../../img/calc.jpeg';
import girl from '../../../img/epikur_KV_Girl.png';
import Block3LogoLapka from '../../components/Svg/Images/Block3LogoLapka';
import Preloader from '../../components/PreloaderHeader/Preloader';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import shlunki from '../../../img/шлунки.jpg';
import Calc from '../../../shared/components/Calc/Сalc';

const Block3 = () => {
  return (
    <div className={'block__3__container'}>
      <div className={'block__3__round__dark'} />
      <Preloader
        classname="block__3__logo__lapka__container" //lapka
        viewBox="0 0 1335.000000 1335.000000"
        path={<Block3LogoLapka />}
      />

      <Row className={'align-items-center'}>
        <Col md={6} className={'block__3__left__container'}>
          <div className={'block__3__header'}>
            <div className={'Formular-Light inline block__3__header__text__1'}>
              {'ПОРАХУЙ '}
            </div>
            <div className={'inline text__space'}> </div>
            <div className={'Formular-Light inline block__3__header__text__1'}>
              КАЛОРІЇ
            </div>
          </div>

          <ParallaxProvider>
            <Parallax
              y={[20, -20]}
              tagOuter="figure"
              slowerScrollRate
              tag="figure"
            >
              <img src={girl} alt="girl" className={'block__3__girl__img'} />
            </Parallax>
          </ParallaxProvider>
        </Col>
        <Col md={6} className={'block__3__calc__container h-75 pt-3'}>
          <div className={'block__3__calc__container__inner'}>
            <Calc />
          </div>

          {/*<div className={'block__3__calc__img__container'}>*/}
          {/*    <div className={'block__3__text Formular-Light'}>*/}
          {/*        ПРОДУКЦІЯ ТМ” ЕПІКУР” - ЦЕ БІЛЬШЕ НІЖ СМАЧНА Й КОРИСНА КУРОЧКА БЕЗ АНТИБІОТИКІВ ТА ІНШИХ СТИМУЛЯТОРІВ РОСТУ. ВОНА ПОКЛИКАНА ДОПОМАГАТИ КОЖНІЙ ЛЮДИНІ ВЕСТИ ЗДОРОВЕ ТА ЩАСЛИВЕ ЖИТТЯ Й БУДУВАТИ ЙОГО ДЛЯ БЛИЗЬКИХ.*/}
          {/*    </div>*/}
          {/*    /!*<img src={calc} alt="calc" className={'block__3__calc__img'}/>*!/*/}
          {/*</div>*/}
        </Col>
      </Row>
    </div>
  );
};

export default Block3;
