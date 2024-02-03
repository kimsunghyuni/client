import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCNnoVEiHUPE_Pxp69_jXDOzRLVIdijDAU",
  authDomain: "jebbna-a22a8.firebaseapp.com",
  projectId: "jebbna-a22a8",
  storageBucket: "jebbna-a22a8.appspot.com",
  messagingSenderId: "865035764411",
  appId: "1:865035764411:web:fa8edf2566209c94685f9e",
  measurementId: "G-FE5EK5WF50"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;

