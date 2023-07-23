import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAMfglzUf_GSWqgkJlsaIzOiHPAZVYVldk',
  authDomain: 'dynamic-form-6277d.firebaseapp.com',
  projectId: 'dynamic-form-6277d',
  storageBucket: 'dynamic-form-6277d.appspot.com',
  messagingSenderId: '463141650456',
  appId: '1:463141650456:web:528c289c549d58e733436d',
  measurementId: 'G-RZR09DR85S',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
