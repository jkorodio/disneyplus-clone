import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDVzmwZ-A2MeYYRXO5GcySTTixxU3DqLNk',
  authDomain: 'disney-plus-clone-77892.firebaseapp.com',
  projectId: 'disney-plus-clone-77892',
  storageBucket: 'disney-plus-clone-77892.appspot.com',
  messagingSenderId: '390326134713',
  appId: '1:390326134713:web:9f856f2c2cf1cea4cd3868'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
