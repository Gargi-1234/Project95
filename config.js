import firebase from "firebase";
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyCoS2S5JFqetvCc5iYFeCc4bYSvo0d25rw",
  authDomain: "your-universe-e3ada.firebaseapp.com",
  databaseURL: "https://your-universe-e3ada-default-rtdb.firebaseio.com",
  projectId: "your-universe-e3ada",
  storageBucket: "your-universe-e3ada.appspot.com",
  messagingSenderId: "767386532960",
  appId: "1:767386532960:web:bdf1db435cb07f2cab5705"
  };
  
  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
export default firebase.database()
