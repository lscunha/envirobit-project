
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSDOiKKwVKILJSXf_QZmqMvb7KdUiyBLg",
  authDomain: "projeto-filmes-efc51.firebaseapp.com",
  projectId: "projeto-filmes-efc51",
  storageBucket: "projeto-filmes-efc51.appspot.com",
  messagingSenderId: "175984118309",
  appId: "1:175984118309:web:7e79900231ac120bc40dcc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);