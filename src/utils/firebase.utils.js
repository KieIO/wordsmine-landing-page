// firebase.utils.js
import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBWf_PVJIfDwzFRXqmbCjgJxbfgGk0p7SU",
    authDomain: "ahaword-32057.firebaseapp.com",
    databaseURL: "https://ahaword-32057.firebaseio.com",
    projectId: "ahaword-32057",
    storageBucket: "ahaword-32057.appspot.com",
    messagingSenderId: "241375531558",
    appId: "1:241375531558:web:ff2963513fcbd591a8cce7",
    measurementId: "G-6GJV88CJE2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'display': 'popup'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;