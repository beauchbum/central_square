import firebase from 'firebase'
const local = process.env.REACT_APP_IS_LOCAL==="true"

const firebaseConfig = local ? {
    apiKey: "AIzaSyD1w2_Gx7RHJpO7vKYOx44mpoKaoKVIWxU",
    authDomain: "guppy-dev.firebaseapp.com",
    databaseURL: "https://guppy-dev.firebaseio.com",
    projectId: "guppy-dev",
    storageBucket: "guppy-dev.appspot.com",
    messagingSenderId: "962599575474",
    appId: "1:962599575474:web:91ef2817d9fd36c57d0eab"
} : {
    apiKey: "AIzaSyBFrHnougpd1ZvJgMHqJE73Yp_Q-mmHdnA",
    authDomain: "iconic-hue-273619.firebaseapp.com",
    databaseURL: "https://iconic-hue-273619.firebaseio.com",
    projectId: "iconic-hue-273619",
    storageBucket: "iconic-hue-273619.appspot.com",
    messagingSenderId: "851778095224",
    appId: "1:851778095224:web:dd3903b820a89262ab458d",
    measurementId: "G-BQ7LXJ6JGY"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const functions = firebase.functions();
export {
    db,
    functions
};
