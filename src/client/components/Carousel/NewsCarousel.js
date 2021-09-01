import React, {useEffect, useState} from 'react';
import {getCollection} from "../../../Firebase/helper";
import Carousel from 'react-bootstrap/Carousel'

const defaultCollection = 'NewsEpikur'

const NewsCarousel = () => {
    // const [arrNewsCards, setArrNewsCards] = useState([])
    //
    // const getProductsCardsColl = async () => {
    //     getCollection(defaultCollection).then(collection => {
    //         // collection.map(news => news.update = false) // for news sort
    //         // const sortedCollection = collection.sort((a, b) => b[sortBy] - a[sortBy]) //sort
    //         setArrNewsCards(collection)
    //     })
    // };
    //
    // useEffect(() => {
    //     getProductsCardsColl()
    //     // eslint-disable-next-line
    // }, [])
    //
    // const carouselItemList = arrNewsCards.map(item=>{
    //     console.log(item);
    //     return <Carousel.Item>
    //         <img
    //             className="d-block w-100 h-25 mb-2 rad123 carousel-img-news"
    //             src={item.image}
    //             alt=''
    //         />
    //         <Carousel.Caption>
    //             {/*<h3>{item.title}</h3>*/}
    //             {/*<p>{item.text}</p>*/}
    //         </Carousel.Caption>
    //     </Carousel.Item>
    // })
    //
    // console.log(carouselItemList);
    return (
        <>

            {/*<Carousel fade>*/}
            {/*    {carouselItemList}*/}
            {/*</Carousel>*/}
       </>
    );
};

export default NewsCarousel;