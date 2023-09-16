import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCatIcLy2Te1QREtXkEcCHJfHbS9Yjw6qc",
    authDomain: "olx-clone-1e1d5.firebaseapp.com",
    projectId: "olx-clone-1e1d5",
    storageBucket: "olx-clone-1e1d5.appspot.com",
    messagingSenderId: "526545396161",
    appId: "1:526545396161:web:2ecf63475992ccbe66cf40",
    measurementId: "G-DWJ9GNGNBT"
  };

export default firebase.initializeApp(firebaseConfig)