import firebase from "firebase/app"
import "firebase/storage"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwru-5sU-s2D3LCZ-0bwhRAsYSPb3mvxw",
    authDomain: "nlp-audio-store.firebaseapp.com",
    projectId: "nlp-audio-store",
    storageBucket: "nlp-audio-store.appspot.com",
    messagingSenderId: "548953808771",
    appId: "1:548953808771:web:3bd4c0fc475ec82955e0b6",
    measurementId: "G-QJDMEDCL18"
  };


firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export { storage, firebase as default }