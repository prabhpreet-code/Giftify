import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCFgHVH0qGKtse4OJELSrkxGiJ9rGXCUVA",
  authDomain: "giftify-db873.firebaseapp.com",
  projectId: "giftify-db873",
  storageBucket: "giftify-db873.appspot.com",
  messagingSenderId: "935463926867",
  appId: "1:935463926867:web:49e6722050eb9549af5aa6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();



export { db, auth };