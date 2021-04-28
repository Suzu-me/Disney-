import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBktn5gl8zUlU4F66Hfw-uciV-_0GPeOzs",
    authDomain: "disney-clone-b7a20.firebaseapp.com",
    projectId: "disney-clone-b7a20",
    storageBucket: "disney-clone-b7a20.appspot.com",
    messagingSenderId: "767262768376",
    appId: "1:767262768376:web:95f77e30148b6c13810f0d",
    measurementId: "G-K1E9XH9R22"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
