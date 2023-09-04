import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "abcd",
  authDomain: "crud-fa54c.firebaseapp.com",
  projectId: "crud-fa54c",
  storageBucket: "crud-fa54c.appspot.com",
  messagingSenderId: "abcd",
  appId: "abcd",
  measurementId: "abcd",
  databaseURL: "abcd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// const db = getDatabase(app); // Get the database instance
export { app, analytics }; // Export Firebase app and analytics if needed
export default firebaseConfig; // Export the Firebase configuration object


