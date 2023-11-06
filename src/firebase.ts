// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7jF6eUtQRLv4sTl1OQyhmJZL_pmLKUr4",
  authDomain: "twitter-clone-a737a.firebaseapp.com",
  projectId: "twitter-clone-a737a",
  storageBucket: "twitter-clone-a737a.appspot.com",
  messagingSenderId: "563558714632",
  appId: "1:563558714632:web:824db6749bdd42d75f70bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
