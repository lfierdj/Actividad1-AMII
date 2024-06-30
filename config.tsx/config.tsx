import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database'
import { getAuth, initializeAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC9tymarrkP_shXaRxlFKKKuHGriq2Grmc",
  authDomain: "app--movil1.firebaseapp.com",
  projectId: "app--movil1",
  storageBucket: "app--movil1.appspot.com",
  messagingSenderId: "1065737011259",
  appId: "1:1065737011259:web:c9e9463a38601e36e49c1e",
  measurementId: "G-NQX96FDFR2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db= getDatabase(app)
export const auth = initializeAuth(app);
  
