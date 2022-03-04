import { useEffect } from 'react'

import tw from "tailwind-styled-components"

import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYmhvZ2FscHJhYmpvdCIsImEiOiJjbDA4eHY5NmEwN21vM2JsZzQ5aXdoNjJpIn0.repj9wImdjkKvDsh7aYO9w';

const Map = ({ pickUpCoordinates, dropOffCoordinates }) => {

    // this will initialize the map
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            // style:'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [78.9629, 20.5937],
            zoom: 3
        });

        if (pickUpCoordinates)
            addToMap(map, pickUpCoordinates);
        if (dropOffCoordinates)
            addToMap(map, dropOffCoordinates);

        if (pickUpCoordinates && dropOffCoordinates) {
            map.fitBounds([
                pickUpCoordinates,
                dropOffCoordinates
            ], {
                padding:60
            }

            )
        }

    }, [pickUpCoordinates, dropOffCoordinates]);

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }

    // // this is to update the markers in the map
    // useEffect(() => {
    //     if(pickUpCoordinates){
    //         addToMap
    //     }
    // },[pickUpCoordinates, dropOffCoordinates])


    return (
        <Wrapper id='map'>Map</Wrapper>
    )
}

export default Map;

const Wrapper = tw.div`
    flex-1
`