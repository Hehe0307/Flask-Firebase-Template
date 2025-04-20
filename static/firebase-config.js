import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth, 
         GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD0-xlN8vBGgwtQP856q7shZk2geQtuYc",
  authDomain: "drone-management-platform.firebaseapp.com",
  projectId: "drone-management-platform",
  storageBucket: "drone-management-platform.firebasestorage.app",
  messagingSenderId: "278291832943",
  appId: "1:278291832943:web:cbf995a1443bbc8b8ded9a",
  measurementId: "G-CT6PT2X5D3"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();s

const db = getFirestore(app);

export { auth, provider, db };