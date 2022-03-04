import { useEffect, useState } from "react"
import tw from "tailwind-styled-components"
import { carList } from "../public/carList"


const RideSelector = ({ pickUpCoordinates, dropOffCoordinates }) => {

    const [rideDistance, setRideDistance] = useState(0);

    useEffect(() => {
        fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]}, ${pickUpCoordinates[1]};${dropOffCoordinates[0]}, ${dropOffCoordinates[1]}?access_token=pk.eyJ1IjoiYmhvZ2FscHJhYmpvdCIsImEiOiJjbDA4eHY5NmEwN21vM2JsZzQ5aXdoNjJpIn0.repj9wImdjkKvDsh7aYO9w`)
        .then(res => res.json())
        .then((data)=>{
            // in india uber rate per km =  14.7rs
            //  in general uberXL consts 40% more than uberX, hence per km = 20.58rs
            // console.log("route" , data.routes[0].distance/1000)
            console.log(data)
            setRideDistance(data?.routes[0]?.distance/1000)
        })
    }, [pickUpCoordinates, dropOffCoordinates])

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                {carList.map((car, index) => (
                    <Car key={index}>
                        <CarImg src={car.imgUrl} />
                        <CarDetails>
                            <Service>
                                {car.service}
                            </Service>
                            <Time>
                                5 mins away
                            </Time>
                        </CarDetails>
                        <CarPrice>{'₹' + (rideDistance*car.perKM).toFixed(2)}</CarPrice>
                    </Car>
                ))}
            </CarList>
        </Wrapper>
    )
}

export default RideSelector


const Wrapper = tw.div`
    flex flex-col flex-1 overflow-y-scroll 
`
const Title = tw.div`
    text-center text-gray-700 text-xs py-1 border-b 
`

const CarList = tw.div`
    overflow-y-scroll 
`

const Car = tw.div`
   flex border-b p-4 items-center
`
const CarImg = tw.img`
    h-14
`
const CarDetails = tw.div`
    flex flex-1 flex-col justify-center ml-7
`
const CarPrice = tw.div`
    font-medium mr-2 text-sm
`
const Service = tw.div`
    font-medium
`
const Time = tw.div`
    text-xm text-blue-500
`