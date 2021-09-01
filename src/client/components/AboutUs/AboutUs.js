import React from 'react';
import Preloader from "../PreloaderHeader/Preloader";
import FullLogoEpikur from "../Svg/Images/FullLogoEpikur";
import Block4 from "../../pages/HomePage/Block4";
import Block5 from "../../pages/HomePage/Block5";
import Footer from "../Footer/Footer";
import Burger from "../Burger";
import Header from "../Header/Header";

const AboutUs = () => {
    return (
        <div>
            <>
                {/*<header className="head text-center head-sticky d-flex align-items-center justify-content-between">*/}
                {/*    <Preloader*/}
                {/*        classname="header__text__load__container__without__animation" //[ лапка, текст ]*/}
                {/*        viewBox="0 0 12169.000000 1860.000000"*/}
                {/*        path={<FullLogoEpikur/>}*/}
                {/*    />*/}
                {/*    <div className={'header__dark__round__back'}/>*/}
                {/*</header>*/}
                {/*<Burger/>*/}
                <Header/>
                <Block4/>
                <Block5/>
                <Footer/>
            </>
        </div>
    );
};

export default AboutUs;