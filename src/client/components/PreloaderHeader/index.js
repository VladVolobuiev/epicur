import React, {useRef, useState} from 'react';
import Preloader from "./Preloader";
import LogoEpikur2 from "../Svg/Images/LogoEpikur2";
import LogoEpikur from "../Svg/Images/LogoEpikur";
import LogoTextHeader from "../Svg/Images/LogoTextHeader";
import BurgerMenu from "../../../shared/components/Bugrer-menu/Burger-menu";
import LogoTextBlock1 from "../Svg/Images/LogoTextBlock1";
import FullLogoEpikur from "../Svg/Images/FullLogoEpikur";
import MyComponent from "../../../shared/components/Vivus/vivus";
import Burger from "../Burger";

const Index = () => {

    return (
        <>
        <div className={'Header__Preloader__container'}>
            {/**
             * 1. Preloader
             * 1.1. Logo Epikur Lapka
             * 1.1. Logo Epikur Text
             * 2. Header
             */}
            <Preloader
                classname="preloader__container" //lapka
                viewBox='0 0 1335.000000 1335.000000'
                path={<LogoEpikur/>}
            />
            <Preloader
                classname="preloader__container2"
                viewBox='0 420 3360.000000 490.000000'
                path={<LogoEpikur2/>}
            />
            {/*<header className="head text-center head-sticky d-flex align-items-center justify-content-between">*/}
            <header className="head__preloader text-center head-sticky d-flex align-items-center justify-content-between">
                <Preloader
                    classname="header__text__load__container" //[ лапка, текст ]
                    viewBox="0 0 12169.000000 1860.000000"
                    path={<FullLogoEpikur className={"header__text__load__path"}/>}
                />
                <div className={'header__dark__round__back'}/>
                {/*<BurgerMenu/>*/}
                {/*<nav>*/}
                {/*<div style={{zIndex:"11"}} className="burger__btn" onClick={()=>setActive(!active)}>*/}
                {/*    <div className='hamburger'><i/></div>*/}
                {/*</div>*/}
                {/*</nav>*/}
                {/*<Burger active={active} setActive={setActive} />*/}
                {/*<BurgerMenu/>*/}
            </header>
        </div>
        </>
    );
};

export default Index;