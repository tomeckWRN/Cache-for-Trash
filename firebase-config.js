import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, getDocs } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlFTMMGIids38EmbDBq1kwztI-clyctwU",
  authDomain: "cache-for-trash.firebaseapp.com",
  projectId: "cache-for-trash",
  storageBucket: "cache-for-trash.firebasestorage.app",
  messagingSenderId: "384986823150",
  appId: "1:384986823150:web:f98ea149e42dc4f58936ff"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp, getDocs };
