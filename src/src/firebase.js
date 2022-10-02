
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEze4BTjqLZ0j3kMbqbV8L1YgNArS-4DA",
    authDomain: "linkedin-clone-ab56c.firebaseapp.com",
    projectId: "linkedin-clone-ab56c",
    storageBucket: "linkedin-clone-ab56c.appspot.com",
    messagingSenderId: "673515311070",
    appId: "1:673515311070:web:3cecd48e8bd945bf92d74f",
    measurementId: "G-3DVPQBQ3S1"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  export{db,auth};

