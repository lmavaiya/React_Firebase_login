// import app from 'firebase';
import app from 'firebase/app';
import auth from 'firebase/auth';

var config = {
    apiKey: "AIzaSyA2AUSpY-OwfIiW2U6iVwJ-YxhYiwibRhU",
    authDomain: "letsreverseit.firebaseapp.com",
    databaseURL: "https://letsreverseit.firebaseio.com",
    projectId: "letsreverseit",
    storageBucket: "letsreverseit.appspot.com",
    messagingSenderId: "295061171612",
    appId: "1:295061171612:web:40ba3514e0be455f"
  };

  var config = {
    apiKey: "AIzaSyA2AUSpY-OwfIiW2U6iVwJ-YxhYiwibRhU",
    authDomain: "letsreverseit.firebaseapp.com",
    databaseURL: "https://letsreverseit.firebaseio.com",
    projectId: "letsreverseit",
    storageBucket: "letsreverseit.appspot.com",
    messagingSenderId: "295061171612",
    appId: "1:295061171612:web:40ba3514e0be455f"
  };
// Initialize Firebase
const fire = app.initializeApp(config);

export default fire;



