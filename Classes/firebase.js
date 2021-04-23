import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBiFfkp-vsVC-08hNLZ8C20PFcAXfyJ0NA",
    authDomain: "match-the-memory.firebaseapp.com",
    projectId: "match-the-memory",
    storageBucket: "match-the-memory.appspot.com",
    messagingSenderId: "287360358219",
    appId: "1:287360358219:web:33a1ca3e7e5b50041cbace"
  };
  var Firebase;

if (!firebase.apps.length) {
    Firebase = firebase.initializeApp(firebaseConfig);
 }else {
    Firebase = firebase.app(); // if already initialized, use that one
 }

export default Firebase;