import ITutorialData from "../types/tutorial.type";
import { getDatabase, ref, push, update, remove } from "firebase/database";
import { initializeApp } from "firebase/app";

// const db = firebase.database().ref("/tutsorials"); // Use database() to get a reference
// const TutorialDataService = {
//   getAll: () => {
//     return db;
//   },

//   create: (tutorial: ITutorialData) => {
//     return db.push(tutorial);
//   },

//   update: (key: string, value: any) => {
//     return db.child(key).update(value);
//   },

//   delete: (key: string) => {
//     return db.child(key).remove();
//   },

//   deleteAll: () => {
//     return db.remove();
//   },
// };

// export default TutorialDataService;

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
const db = getDatabase(app); // Get the database instance

const TutorialDataService = {
  getAll: () => {
    return ref(db, "/tutorials"); // Use ref to get a reference
  },

  create: (tutorial: ITutorialData) => {
    return push(ref(db, "/tutorials"), tutorial); // Use push to add data
  },

  update: (key: string, value: any) => {
    return update(ref(db, `/tutorials/${key}`), value); // Use update to modify data
  },

  delete: (key: string) => {
    return remove(ref(db, `/tutorials/${key}`)); // Use remove to delete data
  },

  deleteAll: () => {
    return remove(ref(db, "/tutorials")); // Use remove to delete all data
  },
};

export default TutorialDataService;
