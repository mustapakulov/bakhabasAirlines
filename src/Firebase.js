import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDjyvUlsvx2zDF-5gvE6m4LiiFCh7dLHQc",
  authDomain: "bahabbas-1737f.firebaseapp.com",
  projectId: "bahabbas-1737f",
  storageBucket: "bahabbas-1737f.appspot.com",
  messagingSenderId: "763438166192",
  appId: "1:763438166192:web:d03c93e682af07fb568b75"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)