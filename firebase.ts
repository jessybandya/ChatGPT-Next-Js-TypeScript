import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCo54mMxvRSBbYYYQXIprNctj87PceXV2o",
    authDomain: "jessy-chatgpt-nextjs.firebaseapp.com",
    projectId: "jessy-chatgpt-nextjs",
    storageBucket: "jessy-chatgpt-nextjs.appspot.com",
    messagingSenderId: "815160503099",
    appId: "1:815160503099:web:e7fc9ba04987e79d8d651e",
    measurementId: "G-P8YKB0C82S"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export { db };