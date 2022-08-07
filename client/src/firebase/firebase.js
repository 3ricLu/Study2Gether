
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getDatabase } from 'firebase/database';

//Firebase authentication for user credentials - logging in and signing up

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "hiveread.firebaseapp.com",
    projectId: "hiveread",
    storageBucket: "hiveread.appspot.com",
    messagingSenderId: "655278457684",
    appId: "1:655278457684:web:779c7f6f1ad7a59204bec1",
    measurementId: "G-F744S337F7"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);
export {app as default, auth, database};