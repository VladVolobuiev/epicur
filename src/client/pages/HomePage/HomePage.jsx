import React, {useRef} from "react"
import ReactPlayer from 'react-player'

import Preloader from "../../components/PreloaderHeader/Preloader";
import LogoEpikur from "../../components/Svg/Images/LogoEpikur";
import LogoEpikur2 from "../../components/Svg/Images/LogoEpikur2";
import useOnScreen from "../../../customHooks/useOnScreen";
import BurgerMenu from "../../../shared/components/Bugrer-menu/Burger-menu";
import ProductsCounter from "../../components/ProductsCounter/ProductsCounter";
import Cards from "../../../shared/components/Cards/Cards";
import Countdown from "../../components/Countdown/Countdown";
import EpikurGoogleMaps from "../../components/GoogleMaps/EpikurGoogleMaps";

import food from '../../../img/food1.jpg'
import child from '../../../img/child1.jpg'
// import fakeBackground from './../../../img/Epikur-background.png'
// import fakeBackground from '../../../img/філе гомілки — копия.jpg'
import Calc from "../../../shared/components/Calc/Сalc";
import MagicCard from "../../../shared/components/MagicCard/MagicCard";
import ProductsCarousel from "../../components/Carousel/ProductsCarousel";
import MainNews from "../../components/MainNews/MainNews";
import Contacts from "../../components/Contacts/Contacts";
import MyComponent from "../../../shared/components/Vivus/vivus";
import NewsCarousel from "../../components/Carousel/NewsCarousel";
import MyCarousel from "../../components/MyCarousel/MyCarousel";

export const HomePage = () => {
    /**Prelodaer
     * 1. HEader using ...
     * Block1
     * Block1
     * Block1
     * Block1
     * Block1
     * Block1
     */
    const ref = useRef()
    const visible = useOnScreen(ref, "10px")
    const ref2 = useRef()
    const visible2 = useOnScreen(ref2, "-250px")
    const ref3 = useRef()
    const visible3 = useOnScreen(ref3, "10px")
    const ref4 = useRef()
    const visible4 = useOnScreen(ref4, "50px")
    const refLogo = useRef()
    const visibleLogo = useOnScreen(refLogo, "150px")
    const visibleCard = useOnScreen(ref3, "-250px")

    return <>
        {/**Prelodaer
            * 1. HEader using ...
            * Block1
            * Block1
            * Block1
            * Block1
            * Block1
            * Block1
        */}



        <Preloader
            // classname={visibleLogo || visible || visible3 ? "preloader__container2 smallLogo" : "preloader__container2"} //epikur
            classname="preloader__container2" //epikur
            viewBox='0 420 3360.000000 490.000000'
            path={<LogoEpikur2/>}
        />

        <MyComponent classname={visibleLogo || visible || visible3 ? "preloader-small-logo" : "preloader-big-logo"}/>

        <Preloader
            // classname={visibleLogo || visible || visible3 ? "preloader__container hiddenLogo" : "preloader__container"} //lapka
            classname="preloader__container" //lapka
            viewBox='0 0 1335.000000 1335.000000'
            path={<LogoEpikur/>}
        />


        <div className='d-flex justify-content-center align-items-center home-page-block'>

            <div className='children-content'>
                <header className="head text-center head-sticky d-flex align-items-center justify-content-end">
                    <BurgerMenu/>
                </header>
                <div className="container1 d-flex justify-content-between">
                    <container className="row-wrapper mb-0 p-0">
                        <aside className='left-menu first-pre-benefits-block first-pre-benefits-block-85'>
                            {/*<div className="top-bottom-anim-border"/>*/}
                            {/*<div className="left-anim-border"/>*/}
                            <div
                                className="d-flex justify-content-center mt-1 ml-2  p-5 align-items-center react-player-block">
                                <ReactPlayer controls width="100%" url='https://youtu.be/F_MxQ16INXk'/>
                            </div>
                            <div/>

                        </aside>
                        <main className="main-content-last-news">
                            {/*************************************************
                             Componennt foier preloader
                            *************************************************/}
                            {/*<div className="top-bottom-anim-border"/>*/}
                            {/*<div className="left-right-anim-border"/>*/}
                            {/*<p className="d-flex align-items-center justify-content-start">*/}
                            {/*    <div className='pre-benefits-block '>*/}
                            {/*            <span className='pre-benefits pre-benefits-1'>Bebas Neue regular*/}
                            {/*</span>*/}
                            {/*        <div className="line"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="benefits benefits-block benefits-1">fresh кур</div>*/}
                            {/*</p>*/}
                            {/*<p className="d-flex align-items-center">*/}
                            {/*    <div className='pre-benefits-block'>  <span className='pre-benefits pre-benefits-2'>Bebas Neue bold*/}
                            {/*</span>*/}
                            {/*        <div className="line"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="benefits-block">*/}
                            {/*        <p className="benefits benefits-2">max protein</p>*/}
                            {/*        <p className="benefits benefits-2">min fat</p>*/}
                            {/*    </div>*/}
                            {/*</p>*/}
                            {/*<p className="d-flex align-items-center">*/}
                            {/*    <div className='pre-benefits-block'> <span className='pre-benefits pre-benefits-3'>Bebas Neue regular*/}
                            {/*</span>*/}
                            {/*        <div className="line"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="benefits benefits-block benefits-3">без антибіотиків та гормонів росту*/}
                            {/*    </div>*/}
                            {/*</p>*/}
                            {/*<p className="d-flex align-items-center">*/}
                            {/*    <div className='pre-benefits-block'> <span className='pre-benefits pre-benefits-4'>Formular Medium*/}
                            {/*</span>*/}
                            {/*        <div className="line"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="benefits benefits-block benefits-4-block">*/}
                            {/*        <span*/}
                            {/*            className="benefits benefits-4">білки/protein </span>*/}
                            {/*        <span className="benefits benefits-4">жири/fat </span>*/}
                            {/*        <span className="benefits benefits-4">калорії/calories </span>*/}
                            {/*    </div>*/}
                            {/*</p>*/}

                            {/*<div className="d-flex align-items-center">*/}
                            {/*    <div className='pre-benefits-block'> <span className='pre-benefits pre-benefits-5'>Bebas Neue bold*/}
                            {/*</span>*/}
                            {/*        <div className="line"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="benefits benefits-block benefits-5-block">*/}
                            {/*        <span className="benefits benefits-5">24</span>*/}
                            {/*        <span className="benefits benefits-5 benefits-5-center">9</span>*/}
                            {/*        <span className="benefits benefits-5">190</span>*/}
                            {/*<ProductsCarousel/>*/}
                            {/*<Countdown/>*/}
                            {/*</div>*/}
                            {/*</div>*/}

                            {/*<p className="d-flex align-items-center">*/}
                            {/*    <div className='pre-benefits-block'> <span className='pre-benefits pre-benefits-6'>Formular Regular*/}
                            {/*</span>*/}
                            {/*        <div className="line"/>*/}
                            {/*    </div>*/}
                            {/*    <div className="benefits benefits-block benefits-6-block">*/}
                            {/*        <span className="benefits benefits-6">г (g)</span>*/}
                            {/*        <span className="benefits benefits-6">г (g)</span>*/}
                            {/*        <span className="benefits benefits-6">ккал (kcal)</span></div>*/}
                            {/*</p>*/}

                            {/*<MainNews/>*/}
                            <div className="d-flex flex-column align-content-lg-between p-2">
                                <NewsCarousel/>
                                <NewsCarousel/>
                                <NewsCarousel/>
                            </div>
                            {/*<a href="adminProducts" className="closing-button btn-test"><span*/}
                            {/*    className='text-pseudo-button'>adminProductsPage</span></a>*/}
                            {/*<a href="GoogleMapsAdminPage" className="closing-button btn-test"><span*/}
                            {/*    className='text-pseudo-button'>GoogleMapsAdminPage</span></a>*/}
                            <div className="page-number">01</div>
                        </main>

                        {/*<ProductsCarousel/>*/}
                        {/*                            <a href="adminProducts" className="closing-button btn-test">*/}
                        {/*                                <span className='text-pseudo-button'>adminProductsPage</span></a>*/}
                        {/*                        </main>*/}
                    </container>
                    <container className="row-wrapper mt-0 pt-2">
                        <aside ref={ref2} className='left-menu img-block aside-w-65 carousel-block position-relative'>
                            {/*<div className={visible2 ? "left-anim-border" : ""}/>*/}
                            {/*<div className={visible2 ? "top-bottom-anim-border" : ''}/>*/}
                            {/*<Cards frontContent={`*/}
                            {/*    Ви обрали здорове життя і вивчаєте склад на пакованнях продуктів?*/}
                            {/*    Отже наважилися змінити раціон на користь здорового харчування та готувати*/}
                            {/*    вдома, і тепер тішитеся приємною звичкою, яка насправді не потребує багато*/}
                            {/*    часу або зусиль.*/}
                            {/*    `}*/}
                            {/*       backPhotoLink={food}*/}
                            {/*       height='100%'*/}
                            {/*       width='100%'>*/}
                            {/*    <div className={"d-flex block1__small__container__right"}>*/}
                            {/*        <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>*/}
                            {/*        <div className={"block__1__text"}> змінити раціон на користь здорового харчування*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className={"block1__small__container__right"}>*/}
                            {/*        <h1 className={"block__1__header"}>Почніть зі здоров’я</h1>*/}
                            {/*        <div className={"block__1__text"}> змінити раціон на користь здорового харчування*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="page-number cards-page-number  ">02</div>*/}
                            {/*</Cards>*/}

                            <div className='product-carousel-block pl-2 pr-2'><ProductsCarousel sortBy='price'/></div>
                            <div className='product-carousel-block-2 pl-2 pr-2'><ProductsCarousel sortBy='quantity'/>
                            </div>
                        </aside>
                        <main className='main-content calc-parent-container pr-2'>
                            {/*<div className={visible2 ? "left-right-anim-border" : ""}/>*/}
                            {/*<div className={visible2 ? "top-bottom-anim-border" : ""}/>*/}
                            {/**<ProductsCarousel/>*/}
                            <div className="position-relative mb-2">
                                {/*<img className='fakebackground-img'*/}
                                {/*     width="100%"*/}
                                {/*     height="100%"*/}
                                {/*     src={fakeBackground} alt=""/>*/}
                                <div className={!visible2 ? "calc-container" : "calc-container calc-animation"}>
                                    <Calc/></div>
                            </div>
                            {/*<div className={"block1__container"}>*/}

                            <div ref={refLogo} className={"block1__small__container__right"}/>


                            <div className="page-number">02</div>


                            {/*</div>*/}


                        </main>
                    </container>
                    <container className="row-wrapper">
                        <aside ref={ref3} className='left-menu'>
                            {/*<div className={visible3 ? "left-anim-border" : ""}/>*/}
                            {/*<div className={visible3 ? "top-bottom-anim-border" : ''}/>*/}
                            <div className={"block1__container"}>
                                <div className={"block1__small__container__right"}>
                                    <h1 className={"block__1__header"}>Найчастіші запитання:</h1>
                                    <div className={"block__1__text"}> Скільки днів вирощуються кури
                                    </div>
                                </div>
                            </div>
                            <div className={"block1__container"}>
                                <div className={"block1__small__container__right"}>
                                    {/*<h1 className={"block__1__header"}>Почніть зі здоров’я</h1>*/}
                                    <div className={"block__1__text"}> Який раціон курей
                                    </div>
                                </div>
                            </div>
                            <div className={"block1__container"}>
                                <div className={"block1__small__container__right"}>
                                    {/*<h1 className={"block__1__header"}>Почніть зі здоров’я</h1>*/}
                                    <div className={"block__1__text"}> Які медикаменти застосовуються
                                    </div>
                                </div>
                            </div>
                            <div className="page-number">03</div>

                        </aside>
                        <aside ref={ref3} className='left-menu'>
                            {/*<div className={visible3 ? "left-anim-border" : ""}/>*/}
                            {/*<div className={visible3 ? "top-bottom-anim-border" : ''}/>*/}
                            <Cards
                                frontContent={`
                                Ви обрали здорове життя і вивчаєте склад на пакованнях продуктів?
                                Отже наважилися змінити раціон на користь здорового харчування та готувати
                                вдома, і тепер тішитеся приємною звичкою, яка насправді не потребує багато
                                часу або зусиль.
                                `}
                                backPhotoLink={child}
                                height='100%'
                                width='100%'
                            />

                        </aside>
                        <main className='main-content pr-2 pb-2'>
                            {/*<div className={visible3 ? "left-right-anim-border" : ""}/>*/}
                            {/*<div className={visible3 ? "top-bottom-anim-border" : ""}/>*/}
                            {/*<ProductsCounter/>*/}


                            <MagicCard
                                classname={visibleCard ? "magic-card-container pb-2 pl-2" : "invisible"}
                                imgLink={food}
                                height='100%'
                                width='100%'
                            />

                        </main>
                    </container>
                    <container className="row-wrapper">
                        <aside ref={ref} className={visible ? 'left-menu active' : 'left-menu'}>
                            {/*<div className={visible ? "left-anim-border" : ""}/>*/}
                            {/*<div className={visible ? "top-bottom-anim-border" : ''}/>*/}
                            <div className={"block1__container"}>
                                <div className={"block1__small__container__left"}>
                                    <h3 className={"block__1__header"}>Виробництво ТМ “Епікур”</h3>
                                    <div className={"block__1__text"}> Виробництво ТМ “Епікур” — це просторі пташники й
                                        доглянуті курочки, що зростають на натуральних рослинних кормах і чистій воді.
                                        Це свіже волинське повітря й перевірені європейські технології, що допомагають
                                        виробляти ніжне та якісне куряче м’ясо без використання стимуляторів росту та
                                        антибіотиків для профілактики. Все це для того, щоб наші покупці справді
                                        відчували себе здоровими.
                                        У виробництві курятини Епікур, антибіотики – відсутні на всіх етапах. Це
                                        підтверджують регулярні аналізи в державних профільних лабораторіях на 10-й,
                                        20-й, 30-й та 42-й день вирощування курки , та додаткові лабораторні дослідження
                                        курятини перед пакуванням.
                                    </div>
                                </div>
                            </div>
                        </aside>
                        <main className='main-content'>
                            {/*<div className={visible ? "left-right-anim-border" : ''}/>*/}
                            {/*<div className={visible ? "top-bottom-anim-border" : ''}/>*/}
                            <div className={"block1__container"}>
                                <div className={"block1__small__container__right"}>
                                    <h3 className={"block__1__header"}>Переваги курятини ТМ Епікур”</h3>
                                    <div className={"block__1__text"}> Продукція ТМ” Епікур” - це більше ніж смачна й
                                        корисна курочка без антибіотиків та інших стимуляторів росту. Вона покликана
                                        допомагати кожній людині вести здорове та щасливе життя й будувати його для
                                        близьких. Ми мріємо про щасливе суспільство, що вміє радіти дрібницям й цінувати
                                        кожну мить. І наша курочка в досягнення цієї мети стає важливим інгредієнтом
                                        збалансованої дієти — це маленький, але важливий крок до життя, сповненого
                                        енергії, перемог та вдосконалень.
                                    </div>
                                </div>
                            </div>
                        </main>
                    </container>

                </div>
                {/*<MyCarousel/>*/}
                <div ref={ref4} className="position-relative h-100 footer-block">
                    <div className={visible4 ? "map-parent-block-visible map-parent-block h-100" : "map-parent-block"}>
                        <EpikurGoogleMaps/>
                    </div>
                    <div className={visible4 ? "contacts-parent-block-visible h-100 contacts-parent-block" : "contacts-parent-block"}>
                        <Contacts/>
                    </div>
                </div>

                {/*<div className="d-flex justify-content-center mt-1 mb-1 align-items-center">*/}
                {/*    <ReactPlayer controls width = "100%" url = 'https://www.youtube.com/watch?v=EVD5ViTWZGo'/>*/}
                {/*</div>*/}


                {/*<Countdown firstText = 'Продано больше'  num={100} secondText = 'тонн курятины' startCounting = {visible} />*/}

                {/*<footer className='foot benefits'>*/}
                {/*    <div>Гаряча лiнiя</div>*/}
                {/*    <div>0 800 21 58 00</div>*/}
                {/*    <div>Дзвiнки зi стацiонарних телефонiв в Украiнi безкоштовнi</div>*/}
                {/*    <div>info@epikur.ua</div>*/}
                {/*</footer>*/}

            </div>
        </div>
    </>

}

