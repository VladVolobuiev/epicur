import React from 'react';
import "../../../styles/footer.scss";
import twitter from "../../../assets/svg/twitter.svg";
import facebook from "../../../assets/svg/facebook.svg";
import insta from "../../../assets/svg/instagram.svg";
import {isMobile} from "react-device-detect";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__text__container">
                {!isMobile ?
                    <>
                <div className="footer__about__us">

                    <h6>ПРО НАС</h6>
                    <p className="">Епікур (грецькою: Επίκουρος)
                        (341 до н. е., Самос — 270 до н. е., Афіни) — давньогрецький філософ-матеріаліст.
                        До нас дійшли лише фрагменти праць філософа. Філософський напрямок епікуреїзм досить
                        широко впливав на
                        свідомість мислителів наступних етапів еллінської епохи, зокрема Риму.

                        Як і інші атомісти, Епікур навчав про безмежну кількість світів.</p>
                </div>

                <div className="footer__quickly__links">
                    <h6 className={"title__quickly__links"} style={{textAlign:"right"}}>ШВИДКІ ПОСИЛАННЯ</h6>
                    <ul className="footer-links">
                        <li><a href="#">НОВИНИ</a></li>
                        <li><a href="#">ЕПІКАЛЬКУЛЯТОР</a></li>
                        <li><a href="#"> З НАМИ ДО НОВИХ ВИСОТ</a></li>
                        <li><a href="#"> ЧИМ ВІДРІЗНЯЄТЬСЯ М'ЯСО "ВИРОЩЕНЕ БЕЗ АНТИБІОТИКІВ" ТА "БЕЗ АНТИБІОТИКІВ"?</a></li>
                        <li><a href="#"> ВИРОБНИЦТВО</a></li>
                        <li><a href="#"> КОМАНДА</a></li>
                        <li><a href="#"> ПАРТНЕРИ</a></li>
                        <li><a href="#"> ПОЧНІТЬ ЗІ ЗДОРОВ’Я</a></li>
                        <li><a href="#"> ВАКАНСІЇ</a></li>
                    </ul>
                </div>
                    </>
                    :
                    <>
                    <div>
                       <p>Гаряча лiнiя</p>
                    </div>
                        <div>
                       <p>Дзвiнки зi стацiонарних телефонiв в Украiнi безкоштовнi</p>
                    </div>
                        <div>
                            <a href="tel:+0 800 21 58 00" type={"tel"}>0 800 21 58 00</a>
                        </div>
                        <div>
                            <a href="mailto:info@epikur.ua">info@epikur.ua</a>
                        </div>
                    </>
                }
            </div>
            <div style={{marginTop:"15px"}} className="footer__link__icons__container">
                <div className="">
                    <p className="">Вирощено без антибiотикiв i стимуляторiв росту
                        <a href="https://epikur.ua/">ТМ Епiкур 2021</a>.
                    </p>
                </div>

                <div className="">
                    <ul className="social-icons social__list__wrapper">
                        <li>
                            <a className="facebook" href="https://www.google.com/">
                            <img className="footer__img__ico" src={facebook} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a className="twitter" href="https://www.google.com/">
                            <img className="footer__img__ico" src={twitter} alt=""/>
                            </a>
                        </li>
                        <li>
                            <a className="insta" href="https://www.google.com/">
                                <img className="footer__img__ico" src={insta} alt=""/>
                        </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;