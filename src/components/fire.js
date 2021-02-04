import firebase from 'firebase';



var firebaseConfig = {
    apiKey: "AIzaSyDhmUTSUivZ96WHD689PDp_0R5MiSLbASc",
    authDomain: "my-app-f6ca0.firebaseapp.com",
    databaseURL: "https://my-app-f6ca0.firebaseio.com",
    projectId: "my-app-f6ca0",
    storageBucket: "my-app-f6ca0.appspot.com",
    messagingSenderId: "589740083031",
    appId: "1:589740083031:web:976d54490b43c830e46012"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;

  