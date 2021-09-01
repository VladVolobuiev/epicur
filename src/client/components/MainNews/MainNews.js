import React, {useEffect, useState} from 'react';

import NewsCard from "../NewsCard/NewsCard";
import {getCollection} from "../../../Firebase/helper";
import Cards from "../../../shared/components/Cards/Cards";
// import child from "../../../img/child1.jpg";

const defaultCollection = 'NewsEpikur'
const initialMainNews = {title:'', text:'', date:'', image:'', actual:''}

const MainNews = () => {
    const [arrNewsCards, setArrNewsCards] = useState(initialMainNews)

    const getNewsCardsColl = async () => {
        getCollection(defaultCollection).then(collection => {
            const sortedCollection = collection.sort((a, b) => b.date - a.date)
            setArrNewsCards(sortedCollection)
        })
    };

    useEffect(() => {
        getNewsCardsColl()
        // eslint-disable-next-line
    }, [])
    // console.log(arrNewsCards[3]);
    const {title, text, date, image, actual} = arrNewsCards[3]? arrNewsCards[3]:''

    return (
<div className='last-news-parent-block'>
        <Cards
            frontContent={<img className='photo-last-news' src={image} alt=""/>}
            // backPhotoLink={child}
            height='100%'
            width='100%'
            classname='on-focus-card'
        >
            <div className='d-flex justify-content-center'>
                <div className="newsCard mt-5">
                    <NewsCard image = {image} date ={date} actual = {actual}/>
                </div>
            </div>
        </Cards>


</div>
    )
}

export default MainNews;




