import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Adicione outros imports do Firebase conforme necessário (ex: firestore, auth)

const firebaseConfig = {
  apiKey: "AIzaSyAbk6B098jTwYj0vVvDVh621JCXses1fqk",
  authDomain: "elegance-boutique-d17b9.firebaseapp.com",
  databaseURL: "https://elegance-boutique-d17b9-default-rtdb.firebaseio.com",
  projectId: "elegance-boutique-d17b9",
  storageBucket: "elegance-boutique-d17b9.firebasestorage.app",
  messagingSenderId: "875372979319",
  appId: "1:875372979319:web:f66d533d03192529ab5272",
  measurementId: "G-202QBR0E69"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, analytics, db, storage }; 