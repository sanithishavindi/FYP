
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDstWGn7NOz_nH3yccMFsbgXNj4dEplSkU",
  authDomain: "final-70629.firebaseapp.com",
  projectId: "final-70629",
  storageBucket: "final-70629.appspot.com",
  messagingSenderId: "399540071097",
  appId: "1:399540071097:web:879b222b1434d94b7b0968"
};


const app = initializeApp(firebaseConfig);
export const firestore=getFirestore(app);

const auth = getAuth(app);
