import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from "tailwind-styled-components"
// import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Map from '../components/Map'
import { auth } from '../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  useEffect(()=>{
    return onAuthStateChanged(auth, user=>{
      // console.log("user", user.photoURL)
      if(user){
        setUser({
          name:user.displayName,
          photoUrl: user.photoURL
        })
      }else{
        setUser(null)
        router.push('/login');
      }
    })
  },[])


  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{user?.name}</Name>
            <UserImage onClick={()=>signOut(auth)} src={user?.photoURL?user?.photoURL:'user.png'} />
            {/* <UserImage src={user?.photoURL} /> */}

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
