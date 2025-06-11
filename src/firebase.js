import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAuXoNDALVyQj1bkrajUf800w2oy8BlmD4",
  authDomain: "namunsirsc.firebaseapp.com",
  projectId: "namunsirsc",
  storageBucket: "namunsirsc.firebasestorage.app",
  messagingSenderId: "798532462381",
  appId: "1:798532462381:web:0a4ddbf4bfee2e35b295a4",
  measurementId: "G-40W8RC9RYN"
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const analytics = getAnalytics(app);

export { db, analytics };
