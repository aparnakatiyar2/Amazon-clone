// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAsGwW3cQWuG0o9dq3HeWLdf6sco1hlM08",
    authDomain: "clone-5e05d.firebaseapp.com",
    projectId: "clone-5e05d",
    storageBucket: "clone-5e05d.appspot.com",
    messagingSenderId: "1044804906925",
    appId: "1:1044804906925:web:74da6764b2a066d07ebb24",
    measurementId: "G-2G8C4EMZM4"
};

const firebase = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };