import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
    apiKey: "AIzaSyC95rx6ox9mq-oR_cItlXRISLRp08KGhm0",
    authDomain: "markdown-demo.firebaseapp.com",
    databaseURL: "https://markdown-demo.firebaseio.com",
    projectId: "markdown-demo",
    storageBucket: "markdown-demo.appspot.com",
    messagingSenderId: "383282791028",
    appId: "1:383282791028:web:526c13f02cb5ca93690721",
    measurementId: "G-ZL8YCML8DK"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase.database();