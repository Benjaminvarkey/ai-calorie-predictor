import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlOSu1dM-QJt9f-N6oL6ZvtBL2a1U98LI",
  authDomain: "ai-calorie-tracker-8fa1e.firebaseapp.com",
  projectId: "ai-calorie-tracker-8fa1e",
  storageBucket: "ai-calorie-tracker-8fa1e.firebasestorage.app",
  messagingSenderId: "1041533487061",
  appId: "1:1041533487061:web:eb8a56d275a5dcfcd95f5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);