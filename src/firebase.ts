import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBVXHZbjyHExp9QcWdoLE_Ma6Hd7MQ6WmY",
  authDomain: "crud-fa54c.firebaseapp.com",
  projectId: "crud-fa54c",
  storageBucket: "crud-fa54c.appspot.com",
  messagingSenderId: "202760801584",
  appId: "1:202760801584:web:3228f4b34827343759ccf5",
  measurementId: "G-ZK8TXLK6E9",
  databaseURL: "https://crud-fa54c-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getDatabase(app); // Get the database instance
export { app, analytics }; // Export Firebase app and analytics if needed
export default firebaseConfig; // Export the Firebase configuration object


