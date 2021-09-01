import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";


import img from './../../../img/child1.jpg'

import Button from "../../../shared/components/Button/Button";
import {
    createChangeProduct,
    _createGetProducts,
    createSaveChangesProduct, createChangeOldField
} from "../../../store/actionCreators";
import {
    deleteDocumentFromCollectionWithID,
    getCollection,
    setDocumentToCollection,
    updateDocumentInCollection
} from "../../../Firebase/helper";

import '../../../styles/AdminProducts.scss'
import MagicCard from "../../../shared/components/MagicCard/MagicCard";
import ClientProducts from "../ClientProduct/ClientProducts";


const initialCard = {title: '', price: '', image: '', quantity: '', update: false}
const defaultCollection = 'ProductsEpikur'

export const AdminProducts = () => {
    const [newCard, setNewCard] = useState(initialCard)
    const products = useSelector(state => state)
    const dispatch = useDispatch()

    const getCardsColl = async () => {
        getCollection(defaultCollection).then(collection => {
            dispatch(_createGetProducts(collection))
        })
    };
    const updateCardById = async ({update, ...rest}, idDocumnent, collection = defaultCollection) => {
        updateDocumentInCollection(collection, rest, idDocumnent).then(r => {
            dispatch(createSaveChangesProduct(idDocumnent))
        }).catch(e => {

        })
    }

    const deleteProductById = async (id, collection = defaultCollection) => {
        deleteDocumentFromCollectionWithID(collection, id).then(r => {
            getCardsColl()
        }).catch(e => {
        })
    };

    useEffect(() => {
        getCardsColl()
        // eslint-disable-next-line
    }, [])


    const addCard = async () => {
        const {title, price, quantity, image, update} = newCard
        setDocumentToCollection(defaultCollection, {title, price, quantity, image, update}
        ).then(r => {

        }).catch(e => {
        })
        setNewCard(() => initialCard)
        await getCardsColl()
    }

    const changeOldField = (e, id, name) => {
        dispatch(createChangeOldField([e, id, name]))
    }


    const addTitle = (e) => {
        setNewCard(() => ({
            ...newCard,
            title: e.target.value
        }))
    }
    const addPrice = (e) => {
        setNewCard(() => ({
            ...newCard,
            price: e.target.value
        }))
    }
    const addQuantity = (e) => {
        setNewCard(() => ({
            ...newCard,
            quantity: e.target.value
        }))
    }
    const addImg = (e) => {
        setNewCard(() => ({
            ...newCard,
            image: e.target.value
        }))
    }

    const makeChanges = (id) => {
        const changedCard = products.find(({idPost}) => idPost === id)
        updateCardById(changedCard, id)
    }


    const changeProductById = (id) => {
        const index = products.findIndex(product => product.idPost === id)

        if (index + 1 && !products[index].update) {
            dispatch(createChangeProduct(id)) //change DO
            return
        }

        if (index + 1 && products[index].update) {
            makeChanges(id)
        }
    }

    const productsList = products.map(({title, price, image, quantity, idPost, update}) => {
            const textChangeBtn = !update ? 'Change product' : 'Save changes'
            const textClassNameBtn = !update ? 'btn btn-outline-secondary' : 'btn btn-outline-warning'
            return <>
                <tr key={idPost} className='product-card'>
                    <td><input className='input-TD3' disabled={!update} value={title}
                               onChange={(e) => changeOldField(e, idPost, "title")}/></td>
                    <td><input className='input-TD3' disabled={!update} value={price} type='number'
                               onChange={(e) => changeOldField(e, idPost, "price")}/></td>
                    <td><input  className='input-TD3' disabled={!update} value={quantity} type='number'
                               onChange={(e) => changeOldField(e, idPost, "quantity")}/></td>
                    <td><img src={image} alt='' className="image"/></td>
                    <td>
                        <Button handleClick={() => changeProductById(idPost)} text={textChangeBtn}
                                className={textClassNameBtn}
                                tooltipText="ВАЖНО! для сохранения данных обязательно нажимать 'Save changes' "/>
                    </td>
                    <td>
                        <Button handleClick={() => deleteProductById(idPost)} text='delete product'
                                className='btn btn-outline-danger'/>
                    </td>
                </tr>
            </>
        }
    )
    return (
        <div className='table-block'>
            <table className="table table-striped position-relative admin-table mb-5">
                <thead>
                <tr>
                    <th>title</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>image</th>
                    <th>buttons</th>
                    <th>buttons</th>
                </tr>
                </thead>
                <tbody className='tbody' id="book-list">

                <tr className='product-card'>
                    <td>
                        <input type="text" placeholder='Title' onChange={addTitle} value={newCard.title}/>
                    </td>
                    <td>
                        <input type="number" placeholder='Price' onChange={addPrice} value={newCard.price}/>
                    </td>
                    <td>
                        <input type="number" placeholder='quantity' onChange={addQuantity} value={newCard.quantity}/>
                    </td>
                    <td>
                        <input type="link" placeholder='img (http....)' onChange={addImg} value={newCard.image}/>
                    </td>
                    <td>
                        <Button className='btn btn-primary'
                                handleClick={addCard}
                                text='add new product'/>
                    </td>

                    <td>
                        <Button className='btn btn-outline-primary'

                                text='some button'/>
                    </td>
                </tr>

                {productsList}

                </tbody>
            </table>
            <Button className='btn-warning
            position-absolute
            justify-content-center
            left40 align-self-center' handleClick={getCardsColl}
                    text='Test button "getColl"'/>
            {/*<button className='getColl' onClick= {getCardsColl}>Test button "getColl"</button>*/}

            {/*<ClientProducts/>*/}
            </div>
    )
}