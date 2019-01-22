import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyCRNiglb9UeZewyfQp2okmYeTN9-CpAQtU",
    authDomain: "fir-example-77316.firebaseapp.com",
    databaseURL: "https://fir-example-77316.firebaseio.com",
    projectId: "fir-example-77316",
    storageBucket: "fir-example-77316.appspot.com",
    messagingSenderId: "90449552392"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

const storage = firebase.storage();

//export default firebase ;
export {
    storage,    
    firebase as default
  }