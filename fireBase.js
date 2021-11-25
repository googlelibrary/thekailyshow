var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyDzzrU2YHKIauShu6Le0fnp6nsKhXckHbw",
    authDomain: "publiclicense-kaily.firebaseapp.com",
    databaseURL: "https://publiclicense-kaily-default-rtdb.firebaseio.com",
    projectId: "publiclicense-kaily",
    storageBucket: "publiclicense-kaily.appspot.com",
    messagingSenderId: "23023972795",
    appId: "1:23023972795:web:250497c5e850599598d49e",
    measurementId: "G-2CBJ8R3XQC"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}

