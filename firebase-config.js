import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, push, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAlFTMMGIids38EmbDBq1kwztI-clyctwU",
  authDomain: "cache-for-trash.firebaseapp.com",
  databaseURL: "https://cache-for-trash-default-rtdb.firebaseio.com",
  projectId: "cache-for-trash",
  storageBucket: "cache-for-trash.firebasestorage.app",
  messagingSenderId: "384986823150",
  appId: "1:384986823150:web:f98ea149e42dc4f58936ff"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, push, serverTimestamp };
