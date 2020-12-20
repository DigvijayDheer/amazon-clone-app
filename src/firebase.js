import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCWuJsWYjH4Gv7vKWk0jFGK4Qgj-2YuRVU",
    authDomain: "e-clone-c5bb2.firebaseapp.com",
    databaseURL: "https://e-clone-c5bb2.firebaseio.com",
    projectId: "e-clone-c5bb2",
    storageBucket: "e-clone-c5bb2.appspot.com",
    messagingSenderId: "762113173733",
    appId: "1:762113173733:web:7d1a0ace164e5375b50c0c",
    measurementId: "G-57YHVJMQRX"
})

const auth = firebase.auth();

export { auth };