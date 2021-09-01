import React, {useEffect, useState} from 'react'
import moment from 'moment'
import {motion, AnimateSharedLayout, AnimatePresence} from "framer-motion";

import Button from "../../../shared/components/Button/Button";
import {getCollection} from "../../../Firebase/helper";

import './ClientProducts.scss'
import ClientProductCard from "../ClientProductCard/ClientProductCard";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import NewsCard from "../NewsCard/NewsCard";

const defaultCollection = 'ProductsEpikur'

const ClientProducts = () => {
    const [arrProductsCards, setArrProductsCards] = useState([])

    const getProductsCardsColl = async () => {
        getCollection(defaultCollection).then(collection => {
            // collection.map(news => news.update = false) // for news sort
            // const sortedCollection = collection.sort((a, b) => b.date - a.date) //sort
            setArrProductsCards(collection)
        })
    };

    useEffect(() => {
        getProductsCardsColl()
        // eslint-disable-next-line
    }, [])

    const clientProductsList = () => arrProductsCards.map(({image, price, quantity, title}) => (
        // <div className="newsCard mt-5">
            <ClientProductCard title={title} image={image} price={price} quantity={quantity}/>
        // </div>
    ))

    return (
        <>
            <Header/>
            <div style={{marginTop:"18vh",marginBottom:"10vh"}} className="client-products-component-page">
                {/*// <main className="client-products-page-content">*/}
                {clientProductsList()}
                {/*// </main>*/}
            </div>
            <Footer/>
        </>

    )
};

export default ClientProducts;