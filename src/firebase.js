// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp =firebase.initializeApp({



    apiKey: "AIzaSyC44cdy7MWHeC1TqBdjVQGj4EkkC1f1tdo",
    authDomain: "todo-app-rohan.firebaseapp.com",
    projectId: "todo-app-rohan",
    storageBucket: "todo-app-rohan.appspot.com",
    messagingSenderId: "51206303102",
    appId: "1:51206303102:web:2e1a5346be79b46e33572f",
    measurementId: "G-CXZQZYE041"
});


  const db = firebaseApp.firestore();
  export default db;