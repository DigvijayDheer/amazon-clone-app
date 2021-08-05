import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyClCgHIniAn11dMSa0YFhbvU7qsSSZBuXM",
    authDomain: "clone-app-9cc98.firebaseapp.com",
    projectId: "clone-app-9cc98",
    storageBucket: "clone-app-9cc98.appspot.com",
    messagingSenderId: "1099363074206",
    appId: "1:1099363074206:web:21f2771eff9e9a62803b8f",
    measurementId: "G-LMTTWDG0HT"
})

const auth = firebase.auth();

export { auth };