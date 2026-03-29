import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAR8ftfccI87bXvmUtMZzCSygsn33OBLG0",
  authDomain: "quiz-96b67.firebaseapp.com",
  projectId: "quiz-96b67",
  storageBucket: "quiz-96b67.firebasestorage.app",
  messagingSenderId: "871165427713",
  appId: "1:871165427713:web:a7a7f1d59842c6faa88000",
  measurementId: "G-8CCDCEQ0JG"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
