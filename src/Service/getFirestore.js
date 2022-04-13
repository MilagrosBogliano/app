// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlP_koeqyD_F6fU61QibntgPgYYXzOTCk",
  authDomain: "proyecto-finalreact.firebaseapp.com",
  projectId: "proyecto-finalreact",
  storageBucket: "proyecto-finalreact.appspot.com",
  messagingSenderId: "941055562731",
  appId: "1:941055562731:web:953a36d558e2cdaf767fae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export function getFirestore(){    
    return firebase.firestore(app)
}


