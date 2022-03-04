import React from 'react'
import tw from "tailwind-styled-components"

const Login = () => {
    return (
        <Wrapper>
            <LoginTitle>
                <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png' />
                <Title>Log in to access your account</Title>
                <LoginImage src='https://i.ibb.co/CsV9RYZ/login-image.png'/>
            </LoginTitle>
            <SignInButton>Sign in with Google</SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4
`
const LoginTitle = tw.div`
    
`
const UberLogo = tw.img`
 h-10 w-auto object-contain self-start
`
const Title = tw.div`
    text-5xl mt-10 text-gray-500
`
const LoginImage = tw.img`
    object-contain w-full 
`
const SignInButton = tw.div`
    bg-black text-white p-3 mt-10 text-center cursor-pointer
`