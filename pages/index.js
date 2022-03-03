import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Map from '../components/Map'

export default function Home() {

  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Prabjot Singh Bhogal</Name>
            <UserImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href='/search'>
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </ActionButton>
          </Link>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            2-wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>
          Where to?
        </InputButton>
      </ActionItems>
    </Wrapper>

  )
}

const Wrapper = tw.div`
  flex flex-col h-screen
`


const ActionItems = tw.div`
  p-4 flex-1
`


const Header = tw.div`
  flex justify-between
`
const UberLogo = tw.img`
  h-28
`


const Profile = tw.div`
  flex items-center 
`
const Name = tw.div`
  w-24 mr-4 text-sm
`
const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px
`


const ActionButtons = tw.div`
  flex 
`
const ActionButton = tw.div`
  flex flex-col bg-gray-200 flex-1 m-1 h-32 items-center justify-center rounded-lg transform hover:scale-105 transition text-xl
`
const ActionButtonImage = tw.img`
  h-3/5 
`


const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 rounded-lg
`
