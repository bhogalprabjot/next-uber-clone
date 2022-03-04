// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAlRBfQunpXrOdQteXMdtm7asXF62cZCB8",
    authDomain: "clone-uber-nextjs-prabjot.firebaseapp.com",
    projectId: "clone-uber-nextjs-prabjot",
    storageBucket: "clone-uber-nextjs-prabjot.appspot.com",
    messagingSenderId: "139601868322",
    appId: "1:139601868322:web:6e4a58867967efc840fc7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth };