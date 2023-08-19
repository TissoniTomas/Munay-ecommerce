// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCOWBjUrHKEyoPABg6tfyKYsBsNIgQulec',
  authDomain: 'coderhouse-ecommerce-4f879.firebaseapp.com',
  projectId: 'coderhouse-ecommerce-4f879',
  storageBucket: 'coderhouse-ecommerce-4f879.appspot.com',
  messagingSenderId: '972455456896',
  appId: '1:972455456896:web:97743ec1cabdc8ae8d7665',
  measurementId: 'G-FLQRWWHZY4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(app);

export default db;
