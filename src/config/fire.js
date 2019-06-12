// import app from 'firebase';
import app from 'firebase/app';
import auth from 'firebase/auth';

  var config = {
    apiKey: "xxxxxxxxxxxxx-xxxxxxxxx-xxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxxxxx"
  };
// Initialize Firebase
const fire = app.initializeApp(config);

export default fire;



