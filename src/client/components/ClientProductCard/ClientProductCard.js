import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import './ClientProductCard.scss'
import * as url from "url";
import ButtonAnimation from "../ButtonAnimation/ButtonAnimation";

const ClientProductCard = ({title, price,quantity, image, width = '100%', height = '100%'}) => {

    return (
        <>
            {/*<div className="client-products-card-wrap">*/}
            {/*<div className="client-products-card" style={{backgroundImage:`url(${image})`, height: "30%"}}>*/}
            {/*    <div className="client-products-content">*/}
            {/*        <h2 className="client-products-title">{title}</h2>*/}
            {/*        <p className="client-products-copy">рекомендована ціна:</p>*/}
            {/*        <p className="client-products-copy">{price} грн.</p>*/}
            {/*        <p className="client-products-copy">кількість білку: </p>*/}
            {/*        <p className="client-products-copy">{quantity} грамм/кг</p>*/}
            {/*        <button className="client-products-btn">де купити</button>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="client-products-card">
                <img className='client-products-image' src={image} alt=""/>

                <div className="client-products-content">
                    <div className="client-products-content-text-wrapper">
                    <h5 className="client-products-title">{title}</h5>
                    <p className="client-products-copy">рекомендована ціна: {price} грн.</p>
                                    <p className="client-products-copy">кількість білку: {quantity} грамм/кг</p>
                    {/*<button className="client-products-btn">де купити</button>*/}
                        <ButtonAnimation text={"Дізнатися більше"}/>
                </div></div>
            </div>
        {/*</div>*/}
        </>
    );
};

export default ClientProductCard;
