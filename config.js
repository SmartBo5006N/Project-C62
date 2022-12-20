import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAO27VgYnuCU8p2hAtZ8PoyHm9yBz316-0',
  authDomain: 'school-attendence-f0a6f.firebaseapp.com',
  databaseURL: 'https://school-attendence-f0a6f-default-rtdb.firebaseio.com',
  projectId: 'school-attendence-f0a6f',
  storageBucket: 'school-attendence-f0a6f.appspot.com',
  messagingSenderId: '937100943243',
  appId: '1:937100943243:web:bacf12ff8fc149dc86d98e',
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();
