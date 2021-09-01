import React from 'react';
import {Row, Col} from 'react-bootstrap'
import plate from '../../../img/plate.png'
import LogoTextBlock1 from "../../components/Svg/Images/LogoTextBlock1";
import Preloader from "../../components/PreloaderHeader/Preloader";


const Block1 = () => {
    return (
        <div className={'block__1__container'}>

            {/*<div className={'home__dark__round__back'}/>*/}
            {/*<Row className={'height__width__100'}>*/}
            {/*    <Col md={6} className={'height__width__100'}>*/}
                    {/*<p className={'Formular-Regular'}>Formular-Regular HELLO hello привет ЗДОРОВА world 123</p>*/}
                    {/*<br/>*/}
                    {/*<p className={'Formular-Bold'}>Formular-Bold HELLO hello привет ЗДОРОВА world 123</p>*/}
                    {/*<br/>*/}
                    {/*<p className={'Formular-Light'}>Formular-Light HELLO hello привет ЗДОРОВА world 123</p>*/}
                    {/*<br/>*/}
                    {/*<p className={'Formular-Medium'}>Formular-Medium HELLO hello привет ЗДОРОВА world 123</p>*/}
                    {/*<br/>*/}

                    <div className={'block__1__left__card__text block__1__display__container'}>
                        <img src={plate} alt="plate" className={'block__1__left__card__image'}/>
                        <div className={"block__1__title__container"}>
                            <h1 className={'Bebas-Neue-Regular left__margin__2'}>FRESH КУР</h1>
                            <h1 className={'Bebas-Neue-Bold left__margin__2'}>MAX PROTEIN</h1>
                            <h1 className={'Bebas-Neue-Bold left__margin__2'}>MIN FAT</h1>
                        </div>

                        <div className={'block__1__left__card__text__red__line'}>
                            <div className={'Bebas-Neue-Regular left__margin__2 blok__1__red__back'}>БЕЗ АНТИБIOТИКIВ ТА ГОРМОНIВ РОСТУ</div>
                        </div>
                    </div>

                {/*</Col>*/}
                {/*<Col md={6} className={'height__width__100 block__1__display__none'}>*/}
            <div>
                <div className={'block__1__circle'}></div>
                <div className={'block__1__square'}></div>
                <div className={'block__1__text'}></div>
                <Preloader
                    classname="block__1__logo__text__container"
                    viewBox='0 420 3360.000000 490.000000'
                    path={<LogoTextBlock1/>}
                />
            </div>

                {/*</Col>*/}
            {/*</Row>*/}
        </div>
    );
};

export default Block1;