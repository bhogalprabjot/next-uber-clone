import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
import Map from '../components/Map'
import { useRouter } from 'next/router'

const Confirm = () => {

    const router = useRouter();
    const {pickUpLocation, dropOffLocation} = router.query;

    const [pickUpCoordinates, setPickUpCoordinates] = useState();
    const [dropOffCoordinates, setDropOffCoordinates] = useState();
    

    const getPickupCoordinates = (pickUpLocation) => {
        // const pickup = "Mumbai";
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickUpLocation}.json?` +  
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYmhvZ2FscHJhYmpvdCIsImEiOiJjbDA4eHY5NmEwN21vM2JsZzQ5aXdoNjJpIn0.repj9wImdjkKvDsh7aYO9w",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                console.log(`Pickup: ${data.features[0].center}`);
                setPickUpCoordinates(data.features[0].center);
            })
    }
    const getDropOffCoordinates = (dropOffLocation) =>{
        // const dropOff = "malad";
        fetch(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropOffLocation}.json?` +  
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYmhvZ2FscHJhYmpvdCIsImEiOiJjbDA4eHY5NmEwN21vM2JsZzQ5aXdoNjJpIn0.repj9wImdjkKvDsh7aYO9w",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                console.log(`DropOff: ${data.features[0].center}`);
                setDropOffCoordinates(data.features[0].center);
            })
    }

    useEffect(() => {
        getPickupCoordinates(pickUpLocation);
        getDropOffCoordinates(dropOffLocation);
    }, [pickUpLocation, dropOffLocation])


    return (
        <Wrapper>
            <Map 
                pickUpCoordinates={pickUpCoordinates}
                dropOffCoordinates={dropOffCoordinates}
            />
            <RideContainer>
                Ride selector
                confirm button
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex flex-col h-screen
`

const RideContainer = tw.div`
    flex-1
`