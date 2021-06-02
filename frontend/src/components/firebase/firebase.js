import { firebase } from '@firebase/app';
import '@firebase/firestore'
import 'firebase/storage'
import 'firebase/analytics'

  var firebaseConfig = {
    apiKey: "AIzaSyDGVy91-5QgggNLKGdebT3ilwI8KkGp598",
    authDomain: "nirbhay-luthra-42f6e.firebaseapp.com",
    projectId: "nirbhay-luthra-42f6e",
    storageBucket: "nirbhay-luthra-42f6e.appspot.com",
    messagingSenderId: "148968228047",
    appId: "1:148968228047:web:1c29a7775959e31bc523ba",
    measurementId: "G-7M731P2EJB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db= firebase.firestore();

  export {db};
