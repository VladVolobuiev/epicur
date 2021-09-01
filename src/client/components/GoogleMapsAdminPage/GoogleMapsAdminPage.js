import React, {useEffect, useState} from 'react';
import {GoogleMap, Marker} from "@react-google-maps/api";
import {
    deleteDocumentFromCollectionWithID,
    getCollection,
    setDocumentToCollection,
    updateDocumentInCollection
} from "../../../Firebase/helper";
import {createChangeProduct, createSaveChangesProduct} from "../../../store/actionCreators";
import {NavLink} from "react-router-dom";
import Button from "../../../shared/components/Button/Button";

const defaultCollection = "MarkersEpikur"
const initialMarker = {title: '', lat: '', lng: '', update: false}


const GoogleMapsAdminPage = () => {
    const [arrMarkers, setArrMarkers] = useState([])
    const [newMarker, setNewMarker] = useState(initialMarker)


    const getMarkersColl = async () => {
        getCollection(defaultCollection).then(collection => {
            setArrMarkers(collection)
        })
    };

    useEffect(() => {
        getMarkersColl()
    }, [])

    const addMarker = async () => {
        const {title, lat, lng, update} = newMarker
        setDocumentToCollection(defaultCollection, {title, lat, lng, update}
        ).then(r => {

        }).catch(e => {
        })
        setNewMarker(() => initialMarker)
        await getMarkersColl()
    }

    const deleteMarkerById = async (id, collection = defaultCollection) => {
        deleteDocumentFromCollectionWithID(collection, id).then(r => {
            getMarkersColl()
        }).catch(e => {
        })
    };

    const addMarkerValues = (e, field) => {
        setNewMarker(() => ({
            ...newMarker,
            [field]: e.target.value
        }))
    }

    const changeOldField = (id) => {
     /*   const index = products.findIndex(product => product.idPost === id)

        if (index + 1 && !products[index].update) {
            dispatch(createChangeProduct(id)) //change DO
            return
        }

        if (index + 1 && products[index].update) {
            makeChanges(id)
        }*/
    }

    const updateCardById = async ({update, ...rest}, idDocumnent, collection = defaultCollection) => {
        // updateDocumentInCollection(collection, rest, idDocumnent).then(r => {
        //     // dispatch(createSaveChangesProduct(idDocumnent))
        // }).catch(e => {
        //
        // })
    }

    const markersList = arrMarkers.map(({title, lat, lng, idPost, update}) => {
            const textChangeBtn = !update ? 'Change product' : 'Save changes'
            const textClassNameBtn = !update ? 'btn btn-outline-secondary' : 'btn btn-outline-warning'
            return <>
                <tr key={idPost} className='product-card'>
                    <td><input className='input-TD3' disabled={!update} value={title}
                               onChange={(e) => changeOldField(e, idPost, "title")}/></td>
                    <td><input className='input-TD3' disabled={!update} value={lat} type='number'
                               onChange={(e) => changeOldField(e, idPost, "lat")}/></td>
                    <td><input  className='input-TD3' disabled={!update} value={lng} type='number'
                                onChange={(e) => changeOldField(e, idPost, "lng")}/></td>
                    {/*<td>*/}
                    {/*    <Button handleClick={() => updateCardById(idPost, 3,4,)} text={textChangeBtn}*/}
                    {/*            className={textClassNameBtn}*/}
                    {/*            tooltipText="ВАЖНО! для сохранения данных обязательно нажимать 'Save changes' "/>*/}
                    {/*</td>*/}
                    <td>
                        <Button handleClick={() => deleteMarkerById(idPost)} text='delete product'
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
                    <th>title</th>
                    <th>lat</th>
                    <th>lng</th>
                    <th>buttons</th>
                </tr>
                </thead>
                <tbody className='tbody' id="book-list">

                <tr className='product-card'>
                    <td>
                        <input type="text" placeholder='Title' onChange={(e)=>addMarkerValues(e, 'title')} value={newMarker.title}/>
                    </td>
                    <td>
                        <input type="number" placeholder='Price' onChange={(e)=>addMarkerValues(e, 'lat')} value={newMarker.lat}/>
                    </td>
                    <td>
                        <input type="number" placeholder='quantity' onChange={(e)=>addMarkerValues(e, 'lng')} value={newMarker.lng}/>
                    </td>
                    {/*<td>*/}
                    {/*    /!*<input type="link" placeholder='img (http....)' onChange={addImg} value={newCard.image}/>*!/*/}
                    {/*</td>*/}
                    <td>
                        <Button className='btn btn-primary'
                            handleClick={addMarker}
                                text='add new product'/>
                    </td>

                    {/*<td>*/}
                    {/*    <Button className='btn btn-outline-primary'*/}

                    {/*            text='some button'/>*/}
                    {/*</td>*/}
                </tr>

                {markersList}

                </tbody>
            </table>
            {/*<Button className='btn-warning*/}
            {/*position-absolute*/}
            {/*justify-content-center*/}
            {/*left40 align-self-center'*/}
            {/*        // handleClick={getCardsColl}*/}
            {/*        text='Test button "getColl"'/>*/}
        </>
    )
};

export default GoogleMapsAdminPage;