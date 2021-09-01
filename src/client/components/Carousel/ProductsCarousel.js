import React, {useEffect, useState} from 'react';
import {getCollection} from "../../../Firebase/helper";
import Carousel from 'react-bootstrap/Carousel'

const defaultCollection = 'ProductsEpikur'

const ProductsCarousel = ({sortBy}) => {
    // const [arrProductsCards, setArrProductsCards] = useState([])
    //
    // const getProductsCardsColl = async () => {
    //     getCollection(defaultCollection).then(collection => {
    //         // collection.map(news => news.update = false) // for news sort
    //         const sortedCollection = collection.sort((a, b) => b[sortBy] - a[sortBy]) //sort
    //         setArrProductsCards(sortedCollection)
    //     })
    // };
    //
    // useEffect(() => {
    //     getProductsCardsColl()
    //     // eslint-disable-next-line
    // }, [])
    //
    // const carouselItemList = arrProductsCards.map(item=>{
    //     // console.log(item);
    //     return <Carousel.Item>
    //
    //      <img
    //         className="d-block w-100 rad123"
    //         src={item.image}
    //         alt=''
    //     />
    //     <Carousel.Caption>
    //         {/*<h3>{item.title}</h3>*/}
    //         {/*<p>{item.text}</p>*/}
    //     </Carousel.Caption>
    // </Carousel.Item>})


    return (
        <div className='pb-2'>

            {/*<Carousel fade>*/}
            {/*    {carouselItemList}*/}
            {/*</Carousel>*/}
       </div>
    );
};

export default ProductsCarousel;