import React, {useEffect, useState} from 'react';
import {getCollection} from "../../../Firebase/helper";
import ClientProductCard from "../ClientProductCard/ClientProductCard";


const defaultCollection = 'ProductsEpikur'

const MyCarousel = () => {
    /*
    const [arrNewsCards, setArrNewsCards] = useState([])
    const [cards, setCards] = useState()
    const [index, setIndex] = useState()

    // const [arrActualNewsCards, setArrActualNewsCards] = useState([])

    const getNewsCardsColl = async () => {
        getCollection(defaultCollection).then(collection => {
            // console.log(collection);
            // const sortedCollection = collection.sort((a, b) => b.date - a.date)
            setArrNewsCards(collection)
            console.log(arrNewsCards);
        })
    };

    useEffect(() => {
        getNewsCardsColl()
        const timerId = () => setTimeout(() => indexInc(), 1000)
return clearTimeout(timerId)
        // eslint-disable-next-line
    }, [])

    const indexInc = () => {
        // console.log('indexInc: '+ index + ' / ' + arrNewsCards.length );
        pusher(0)
        pusher(1)
        pusher(2)
        setIndex(()=>{
            if
            return index+1
        })
        // setArrActualNewsCards(tempArr)
        // console.log(tempArr);
        if (index === arrNewsCards.length){
            index=0
        }
    }

    const pusher = (step) => {
        // console.log(arrNewsCards);
        if (index+step <= arrNewsCards.length) {
            tempArr.push(arrNewsCards[(index+step)])
        }
        else if (index+step > arrNewsCards.length)
        // console.log('pusher: ' + (index+step));
        tempArr.push(arrNewsCards[index+step-arrNewsCards.length -1])

    }

    console.log(tempArr);
    const clientProductsList = () => arrNewsCards.map(({image, price, quantity, title}) => (
        // <div className="newsCard mt-5">
        <ClientProductCard title={title} image={image} price={price} quantity={quantity}/>
        // </div>
    ))
    // console.log(arrNewsCards);
    return (
        <div className="client-products-component-page">
            {// <main className="client-products-page-content">}
            {clientProductsList()}
            {// </main>}
        </div>
    )*/
};

export default MyCarousel;