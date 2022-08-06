/* eslint-disable prettier/prettier */
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuCNdAKt6jamKfYYVrCY2JR97yVzvH-RA",
  authDomain: "imoney-789.firebaseapp.com",
  projectId: "imoney-789",
  storageBucket: "imoney-789.appspot.com",
  messagingSenderId: "413031865726",
  appId: "1:413031865726:web:ded7305e784afab155a72f",
  measurementId: "G-GPGDYPFYSM",
};
const app = initializeApp(firebaseConfig);

const projectAuth = getAuth();
const projectFirestore = getFirestore(app);
const timestamp = serverTimestamp();
const projectStorage = getStorage();
export {
  projectAuth,
  projectFirestore,
  projectStorage,
  timestamp,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  collection,
  addDoc,
  getDownloadURL,
  ref,
  uploadBytes,
};
