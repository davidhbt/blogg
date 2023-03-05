import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBg_9kD3ynou00UsP0hd0q-UTbIYUGxmB8",
  authDomain: "social-media-2-aef48.firebaseapp.com",
  databaseURL: "https://social-media-2-aef48-default-rtdb.firebaseio.com",
  projectId: "social-media-2-aef48",
  storageBucket: "social-media-2-aef48.appspot.com",
  messagingSenderId: "987159299041",
  appId: "1:987159299041:web:85348e535a7c0b551208a0",
  measurementId: "G-N7HQHYDNNZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
