import { initializeApp } from "firebase/app";

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


