import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDgEokB6Wd2v9Ph0e9aILq_Oms_JjjjjJM",
    authDomain: "slack-clone-dd-71ab5.firebaseapp.com",
    projectId: "slack-clone-dd-71ab5",
    storageBucket: "slack-clone-dd-71ab5.appspot.com",
    messagingSenderId: "632560500032",
    appId: "1:632560500032:web:e2dd1bd223751abac78ea5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };