import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAduOd9zQbgFoiQhB_iW2kK-xQ6aP3C8y0",
    authDomain: "my-project-2-fec05.firebaseapp.com",
    projectId: "my-project-2-fec05",
    storageBucket: "my-project-2-fec05.appspot.com",
    messagingSenderId: "325829373201",
    appId: "1:325829373201:web:554318f8031a8b2aa2b0b0"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
