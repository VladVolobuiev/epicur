import React, {useEffect, useState} from 'react';
// import {isMobile, isMobileOnly} from "react-device-detect";

import PreloaderHeader from "../../components/PreloaderHeader/index";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";
import Block5 from "./Block5";
import Block6 from "./Block6";
import Block7 from "./Block7";
import Block8 from "./Block8";
import Footer from "../../components/Footer/Footer";
import BurgerMenu from "../../../shared/components/Bugrer-menu/Burger-menu";
import Preloader from "../../components/PreloaderHeader/Preloader";
import FullLogoEpikur from "../../components/Svg/Images/FullLogoEpikur";
import Burger from "../../components/Burger";



const Home = () => {
    const [show, setShow] = useState(false);
    useEffect(() => {

        setTimeout(() => {
            setShow(true)
        }, 3000);
    }, []);
    const [active,setActive] = useState(false);
    /*********************************
     * RENDER
     *********************************/
    return (
        <div className={active ? "active body" : "body"}>
            <PreloaderHeader/>
            {/*<div className="burger__btn" onClick={()=>setActive(!active)}>*/}
            {/*    <div className={active ? 'active hamburger' : "hamburger"}><i className={active ? "active" : ""}/></div>*/}
            {/*</div>*/}
            <Burger active={active} setActive={setActive} />
            {show && (
                <>
                    <Block1/>
                    {/*{!isMobile && <Block2/>}*/}
                    {/*{!isMobileOnly && <Block2/>}*/}
                    <Block2/>
                    <Block3/>
                    <Block4/>
                    <Block5/>
                    <Block6/>
                    <Block7/>
                    <Block8/>
                    <Footer/>
                </>
            )}
        </div >
    );
};

export default Home;