import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDoc57P_ggKwJCiJgGHWeZi-oIXshpcDs4",
  authDomain: "moto-86243.firebaseapp.com",
  databaseURL: "https://moto-86243.firebaseio.com",
  projectId: "moto-86243",
  storageBucket: "moto-86243.appspot.com",
  messagingSenderId: "938578949385",
};

firebase.initializeApp(config);
const auth = firebase.auth();
const firebaseAuth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
// googleAuthProvider.addScope("user_birthday");

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

const database = firebase.database();

// console.log("Cool=>", database);

export {
  database,
  auth,
  firebaseAuth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider,
};
