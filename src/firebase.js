import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC1lZ5UXdgg9hSpQtDmWVdvuQd66t-xsM0",
    authDomain: "documentary-searcher.firebaseapp.com",
    databaseURL: "https://documentary-searcher.firebaseio.com",
    projectId: "documentary-searcher",
    storageBucket: "documentary-searcher.appspot.com",
    messagingSenderId: "469081904367"
};
firebase.initializeApp(config);

export default firebase;