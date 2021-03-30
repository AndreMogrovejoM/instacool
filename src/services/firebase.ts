import firebase from "firebase/app";
import "firebase/firestore";
require('firebase/auth')
require('firebase/storage')

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAS0EfRnqmmH5xCF4QsKABgBYulXUVkaTg",
    authDomain: "instacool-4429f.firebaseapp.com",
    projectId: "instacool-4429f",
    storageBucket: "instacool-4429f.appspot.com",
    messagingSenderId: "643349236261",
    appId: "1:643349236261:web:d6f9bbc9a4549a23134dcc",
    measurementId: "G-LVXFNWQ91B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
