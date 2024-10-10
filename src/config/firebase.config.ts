// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBoifddGzwqESLMfb_WFqHVYG6jaL4QC_Q',
  authDomain: 'club-ecommerce-2-c4bc4.firebaseapp.com',
  projectId: 'club-ecommerce-2-c4bc4',
  storageBucket: 'club-ecommerce-2-c4bc4.appspot.com',
  messagingSenderId: '634142409822',
  appId: '1:634142409822:web:99437c1b7b1ccfbc02e0cf'
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
