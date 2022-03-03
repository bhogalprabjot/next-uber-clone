import React from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
const Search = () => {
    return (
        <Wrapper>
            <ButtonContainer>
                <Link href="/">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>
            </ButtonContainer>
            <InputContainer>
                <FormToIcons>
                    <Circle src='https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png'/>
                    <Line src='https://img.icons8.com/ios/50/9CA3AF/vertical-line.png'/>
                    <Square src='https://img.icons8.com/windows/50/000000/square-full.png'/>
                </FormToIcons>
                <InputBoxes>
                    <Input placeholder='Enter pickup location'></Input>
                    <Input placeholder='Where to?'></Input>
                </InputBoxes>
                <PlusIcon src=" https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                Saved Places
            </SavedPlaces>
            <ConfirmLocation> Confirm Location</ConfirmLocation>
        </Wrapper>
    )
}

export default Search


const Wrapper = tw.div`
    bg-gray-200 h-screen
`

const ButtonContainer = tw.div`
    bg-white px-4
`

const BackButton = tw.img`
    h-12 cursor-pointer
`

const InputContainer = tw.div`
    bg-white flex items-center justify-center px-2 pb-2
`
const FormToIcons = tw.div`
    w-10 flex flex-col items-center justify-center
`
const Circle = tw.img`
    h-3
`
const Line = tw.img`
    h-10
`
const Square = tw.img`
    h-3
`
const InputBoxes = tw.div`
    flex flex-col flex-1
`

const Input = tw.input`
    h-10 bg-gray-200 my-2 p-2 rounded-lg outline-none border-none
`
const PlusIcon = tw.img`
    w-10 h-10 bg-gray-200 rounded-full ml-3
`

const SavedPlaces = tw.div`
    mt-2 flex items-center bg-white px-4 py-2
`

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`

const ConfirmLocation = tw.div`
    bg-black text-white m-4 text-center p-2 text-xl cursor-pointer
`