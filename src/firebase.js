
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDstWGn7NOz_nH3yccMFsbgXNj4dEplSkU",
  authDomain: "final-70629.firebaseapp.com",
  projectId: "final-70629",
  storageBucket: "final-70629.appspot.com",
  messagingSenderId: "399540071097",
  appId: "1:399540071097:web:879b222b1434d94b7b0968"
};

class Firebase {
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.auth = getAuth(app);
    this.firestore = getFirestore();

  }

  userSignInWithEmailAndPassword = async (email, password) => {


    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      console.log(user);
      return true;
    } catch (error) {
      console.error("Error signing in:", error);
      return false;
      // throw error;
    }


  };
}



export default Firebase;
