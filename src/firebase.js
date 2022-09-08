// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBmmd6wo3E58DTz7ds4STY6O6qXAn9yAB8',
  authDomain: 'prathmeshsadake-medium-clone.firebaseapp.com',
  projectId: 'prathmeshsadake-medium-clone',
  storageBucket: 'prathmeshsadake-medium-clone.appspot.com',
  messagingSenderId: '360378634709',
  appId: '1:360378634709:web:413b690fde607d64cfad5c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
