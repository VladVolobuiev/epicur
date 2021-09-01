import React from 'react';
import SocialFollow from "./SocialFollow"
import './../../../styles/social.scss'

const Contacts = () => {
    return (
        <div className='benefits foot d-flex flex-column align-items-center'>
            <div>Наші контакти:</div>
            <div>Гаряча лiнiя</div>
                <div>0 800 21 58 00</div>
                <div className='text-center'>Дзвiнки зi стацiонарних телефонiв в Українi безкоштовнi</div>
                <div>info@epikur.ua</div>
            <SocialFollow/>

        </div>
    );
};

export default Contacts;
