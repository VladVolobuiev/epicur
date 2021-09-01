import React, {memo, useEffect, useState} from 'react'
import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';
import {
    deleteDocumentFromCollectionWithID,
    getCollection,
    setDocumentToCollection,
    updateDocumentInCollection
} from "../../../Firebase/helper";
import {_createGetProducts, createSaveChangesProduct} from "../../../store/actionCreators";

const containerStyle = {
    width: '100%',
    height: '100%'
};

const googleMapCurrentProps = {
    center: {
        lat: 49.986432,
        lng: 36.230900
    },
    zoom: 17
};
const defaultCollection = 'MarkersEpikur' //Markers collection

function EpikurGoogleMaps() {
    const [arrMarkers, setArrMarkers] = useState([])

    const getMarkersColl = async () => {
        getCollection(defaultCollection).then(collection => {
            setArrMarkers(collection)
        })
    };

    useEffect(()=> {
        getMarkersColl()
    }, [])


    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyABwpKfqjcCgsGGcFY2dhpb02HUPt_U4vk"
    })

    // const onLoad = marker => {
    //     console.log('marker: ', marker)}
    // console.log(arrMarkers);

    const markers = arrMarkers.map(marker=><Marker position={{lat:+marker.lat, lng: +marker.lng}}/>)

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={googleMapCurrentProps.center}
            zoom={googleMapCurrentProps.zoom}
        >
            {markers}
                       { /* Child components, such as markers, info windows, etc. */}
        </GoogleMap>
    ) : <></>
}

export default memo(EpikurGoogleMaps)