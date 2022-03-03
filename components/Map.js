import { useEffect } from 'react'

import tw from "tailwind-styled-components"

import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoiYmhvZ2FscHJhYmpvdCIsImEiOiJjbDA4eHY5NmEwN21vM2JsZzQ5aXdoNjJpIn0.repj9wImdjkKvDsh7aYO9w';

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [78.9629, 20.5937],
            zoom: 3
        });
    });

    return (
        <Wrapper id='map'>Map</Wrapper>
    )
}

export default Map;

const Wrapper = tw.div`
    flex-1
`