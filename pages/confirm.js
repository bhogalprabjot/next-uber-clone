import { useEffect, useState } from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
import Map from '../components/Map'
import RideSelector from '../components/RideSelector'
import { useRouter } from 'next/router'

const Confirm = () => {

    const router = useRouter();
    const { pickUpLocation, dropOffLocation } = router.query;

    const [pickUpCoordinates, setPickUpCoordinates] = useState([0,0]);
    const [dropOffCoordinates, setDropOffCoordinates] = useState([0,0]);


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
    const getDropOffCoordinates = (dropOffLocation) => {
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
            <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" onClick={() => router.back()} />
            <Map
                pickUpCoordinates={pickUpCoordinates}
                dropOffCoordinates={dropOffCoordinates}
            />
            <RideContainer>
                <RideSelector
                    pickUpCoordinates={pickUpCoordinates}
                    dropOffCoordinates={dropOffCoordinates}
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>Confirm UberX</ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex flex-col h-screen max-w-sm 
    relative
`

const RideContainer = tw.div`
    flex flex-col flex-1 h-1/2
`

const ConfirmButton = tw.div`
    bg-black text-white text-center m-3 p-3 text-xl cursor-pointer 
`
const ConfirmButtonContainer = tw.div`
`

const BackButton = tw.img` 
    h-10 w-10 bg-white rounded-full cursor-pointer z-10 absolute m-2
`