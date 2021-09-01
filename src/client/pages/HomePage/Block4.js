import React from 'react';
import { Row, Col } from 'react-bootstrap';

import chickencontur1 from '../../../img/chickencontur1.png';
import egg1 from '../../../img/egg1.png';
import egg2 from '../../../img/egg2.png';
import egg3 from '../../../img/egg3.png';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

const Block4 = () => {
  return (
    <div className={'block__4__container'}>
      {/* <div className="site-wrapper Bebas-Neue-Bold"> */}
      {/*<div className="content-wrapper">*/}
      {/*<div className="top-section">*/}
      {/* <div className="rolling animate">
                            <div className={'block__4__text__1 Bebas-Neue-Bold'}>EPIKUR - </div>
                            <div className={'inline text__space'}>{' '}</div>
                            <div className={'block__4__text__2 Bebas-Neue-Bold'}>НАЙКРАЩИЙ КУР!</div>
                            <div className={'inline text__space'}>{' '}</div>
                            <div className={'block__4__text__3 Bebas-Neue-Bold'}>ЕПIКУР - </div>
                            <div className={'inline text__space'}>{' '}</div>
                            <div className={'block__4__text__1 Bebas-Neue-Bold'}>EPIKUR - </div>
                            <div className={'inline text__space'}>{' '}</div>
                            <div className={'block__4__text__2 Bebas-Neue-Bold'}>НАЙКРАЩИЙ КУР!</div>
                            <div className={'inline text__space'}>{' '}</div>
                            <div className={'block__4__text__3 Bebas-Neue-Bold'}>ЕПIКУР - </div>
                            <div className={'inline text__space'}>{' '}</div>
                        </div> */}
      {/*</div>*/}
      {/*</div>*/}
      {/* </div> */}

      {/* <div className={'block__4__egg1__container'}>
        <ParallaxProvider>
          <Parallax
            y={[-75, 75]}
            tagOuter="figure"
            slowerScrollRate
            tag="figure"
          >
            <img src={egg1} alt="egg1" className={'block__4__egg1'} />
          </Parallax>
        </ParallaxProvider>
      </div>
      <div className={'block__4__egg2__container'}>
        <ParallaxProvider>
          <Parallax
            y={[-50, 50]}
            tagOuter="figure"
            slowerScrollRate
            tag="figure"
          >
            <img src={egg2} alt="egg1" className={'block__4__egg2'} />
          </Parallax>
        </ParallaxProvider>
      </div>
      <div className={'block__4__egg3__container'}>
        <ParallaxProvider>
          <Parallax
            y={[-100, 100]}
            tagOuter="figure"
            slowerScrollRate
            tag="figure"
          >
            <img src={egg3} alt="egg1" className={'block__4__egg3'} />
          </Parallax>
        </ParallaxProvider>
      </div> */}

      {/*<div >*/}
      <Row className={'block__4__text__container'}>
        <Col md={6} className={'display__flex__center'}>
          <div className={'block__4__header Bebas-Neue-Bold'}>
            COMPANY EPIKUR
          </div>
        </Col>
        <Col md={6} className={'display__flex__center'}>
          <div className={'block__4__text Formular-Light'}>
            ПРОДУКЦІЯ ТМ” ЕПІКУР” - ЦЕ БІЛЬШЕ НІЖ СМАЧНА Й КОРИСНА КУРОЧКА БЕЗ
            АНТИБІОТИКІВ ТА ІНШИХ СТИМУЛЯТОРІВ РОСТУ. ВОНА ПОКЛИКАНА ДОПОМАГАТИ
            КОЖНІЙ ЛЮДИНІ ВЕСТИ ЗДОРОВЕ ТА ЩАСЛИВЕ ЖИТТЯ Й БУДУВАТИ ЙОГО ДЛЯ
            БЛИЗЬКИХ.
          </div>
        </Col>
      </Row>
      {/*</div>*/}
      {/* <Row>
        <div className={'block__4__img4__container'}>
          <ParallaxProvider>
            <Parallax
              y={[-5, 5]}
              tagOuter="figure"
              slowerScrollRate
              tag="figure"
            >
              <img
                src={chickencontur1}
                alt="egg1"
                className={'block__4__img4'}
              />
            </Parallax>
          </ParallaxProvider>
        </div>
      </Row> */}
    </div>
  );
};

export default Block4;
