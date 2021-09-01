import React, {useEffect, useState} from 'react'
import moment from 'moment'

import Button from "../../../shared/components/Button/Button";
import {
    deleteDocumentFromCollectionWithID,
    getCollection,
    setDocumentToCollection,
    updateDocumentInCollection
} from "../../../Firebase/helper";

import './NewsAdminPage.css'
import Calc from "../../../shared/components/Calc/Сalc";
import News from "../News/News";


const defaultCollection = 'NewsEpikur'
const defaultImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDXPcJ7R10lcp3yUFbHmpDxJzwQiQKI4Q7LQ&usqp=CAU'
// const defaultImage = ""
const initialNewsCard = {title: '', text: '', image: '', actual: true}
const NewsAdminPage = () => {
    const [newNewsCard, setNewNewsCard] = useState(initialNewsCard)
    const [arrNewsCards, setArrNewsCards] = useState([])


    const getNewsCardsColl = async () => {
        getCollection(defaultCollection).then(collection => {
            collection.map(news => news.update = false)
            const sortedCollection = collection.sort((a, b) => b.date - a.date)
            setArrNewsCards(sortedCollection)
        })
    };

    const updateNewsCardById = async (index, idDocumnent, collection = defaultCollection) => {
        const updatedNewsCard = arrNewsCards[index]
        updateDocumentInCollection(collection, updatedNewsCard, idDocumnent).then(r => {
            getNewsCardsColl()
        }).catch(e => {
        })
    }

    const deleteNewsCardById = async (id, collection = defaultCollection) => {
        deleteDocumentFromCollectionWithID(collection, id).then(r => {
            getNewsCardsColl()
        }).catch(e => {
        })
    };

    useEffect(() => {
        getNewsCardsColl()
        // eslint-disable-next-line
    }, [])


    const addNewsCard = async () => {
        const {title, text, image, actual} = newNewsCard
        setDocumentToCollection(defaultCollection, {
                title,
                text,
                date: +new Date(),
                image: image || defaultImage,
                actual
            }
        ).then(r => {
            getNewsCardsColl()
        }).catch(e => {
        })
        setNewNewsCard(() => initialNewsCard)
    }

    const addNewsFieldsValues = (e, field) => {
        setNewNewsCard(() => ({
            ...newNewsCard,
            [field]: e.target.value
        }))
    }

    const changeNewsFieldsValues = (e, id, field) => {

        const currentNewsCardIndex = arrNewsCards.findIndex(({idPost}) => id === idPost)
        const newArr = [...arrNewsCards]
        newArr[currentNewsCardIndex][field] = e.target.value
        setArrNewsCards(() => newArr)
    }

    const changeNewsCardById = (id) => {
        const index = arrNewsCards.findIndex(news => news.idPost === id)
        if (index + 1 && !arrNewsCards[index].update) {
            const  newArr = [...arrNewsCards]
            newArr[index].update = true
            setArrNewsCards(() => newArr)
            return
        } //change DO

        if (index + 1 && arrNewsCards[index].update) {
            updateNewsCardById(index, id)
        }
    }

    const updateCheckedNewsCardById = async (updatedCard, idDocumnent, collection = defaultCollection) => {
        updateDocumentInCollection(collection, updatedCard, idDocumnent).then(r => {
            getNewsCardsColl()
        }).catch(e => {
        })
    }

    const changeNewsActual = (id, {target: {checked}}) => {
        const index = arrNewsCards.findIndex(news => news.idPost === id)
        const newArr = [...arrNewsCards]
        newArr[index].actual = checked
        updateCheckedNewsCardById(newArr[index], id)
    }


    const newsList = arrNewsCards.map(({title, text, date, image = defaultImage, update, actual, idPost}) => {
            const textChangeBtn = !update ? 'Change news' : 'Save news'
            const textClassNameBtn = !update ? 'btn btn-outline-secondary' : 'btn btn-outline-warning'
            const newsDate = moment(date).format("HH : mm : ss  /  DD.MM.YYYY ")
            return <>
                <tr key={idPost} className='product-card'>
                    <td><input className='input-TD' type='checkbox' checked={actual}
                               onClick={(e) => changeNewsActual(idPost, e)}/></td>
                    <td><input className='input-TD3' disabled='disabled' value={newsDate}/></td>
                    <td><input className='input-TD3' disabled={!update} value={title} data-toggle="tooltip" title={title}
                               onChange={(e) => changeNewsFieldsValues(e, idPost, "title")}/></td>
                    <td><input className='input-TD3' data-toggle="tooltip" title={text} disabled={!update} value={text}
                               onChange={(e) => changeNewsFieldsValues(e, idPost, "text")}/></td>
                    <td className='d-flex justify-content-center'><img src={image} alt='' className="image"/></td>
                    <td>
                        <Button handleClick={() => changeNewsCardById(idPost)}
                                text={textChangeBtn}
                                className={textClassNameBtn}
                                tooltipText="ВАЖНО! для сохранения данных обязательно нажимать 'Save news' "/>
                    </td>
                    <td>
                        <Button handleClick={() => deleteNewsCardById(idPost)} text='delete product'
                                className='btn btn-outline-danger'/>
                    </td>
                </tr>
            </>
        }
    )

    return (
            <>
            <table className="table table-striped position-relative admin-table">
                <thead>
                <tr>
                    <th>Актуальніть</th>
                    <th>Дата</th>
                    <th>Назва</th>
                    <th>Опис</th>
                    <th>Фото</th>
                    <th>buttons</th>
                    <th>buttons</th>
                </tr>
                </thead>
                <tbody className='tbody' id="book-list">

                <tr className='product-card'>
                    <td>
                        <input disabled type="text" value='Актуально'/>
                    </td>
                    <td>
                        <input disabled value='Поточна дата та час'/>
                    </td>
                    <td>
                        <input type="text" placeholder='Назва' onChange={(e) => addNewsFieldsValues(e, 'title')}
                               value={newNewsCard.title}/>
                    </td>
                    <td>
                        <input type="text" placeholder='Опис' onChange={(e) => addNewsFieldsValues(e, 'text')}
                               value={newNewsCard.text}/>
                    </td>
                    <td>
                        <input type="link" placeholder='img (http....)'
                               onChange={(e) => addNewsFieldsValues(e, 'image')} value={newNewsCard.image}/>
                    </td>
                    <td>
                        <Button className='btn btn-primary'
                                handleClick={addNewsCard}
                                text='add new product'/>
                    </td>

                    <td>
                        <Button className='btn btn-outline-primary'

                                text='some button'/>
                    </td>
                </tr>

                {newsList}

                </tbody>
            </table>
            {/*<Button className='btn-warning*/}
            {/*position-absolute*/}
            {/*justify-content-center*/}
            {/*left40 align-self-center'*/}
            {/*    // handleClick={getCardsColl}*/}
            {/*        text='Test button "getColl"'/>*/}
            {/*<News/>*/}
        </>

    )
};

export default NewsAdminPage;