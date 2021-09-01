import React from 'react';
import Preloader from "../PreloaderHeader/Preloader";
import FullLogoEpikur from "../Svg/Images/FullLogoEpikur";
import Burger from "../Burger";
import "../../../styles/header.scss"
import PreloaderHeader from "../PreloaderHeader";

const Header = () => {
    return (
        <>
            <header className="head text-center head-sticky d-flex align-items-center justify-content-between">
                {/*<FullLogoEpikur className={"Logo__header"}/>*/}
                <PreloaderHeader/>
                {/*<Preloader*/}
                {/*    classname="header__text__load__container__without__animation" //[ лапка, текст ]*/}
                {/*    viewBox="0 0 12169.000000 1860.000000"*/}
                {/*    path={<FullLogoEpikur/>}*/}
                {/*/>*/}
                {/*<div className={'header__dark__round__back'}/>*/}
            </header>
            <Burger/>
        </>
    );
};

export default Header;