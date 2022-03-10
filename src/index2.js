// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyANxThXkZr5Kl0qVZ4OuWntWQKq8eDdbRE",
    authDomain: "students2-d3265.firebaseapp.com",
    projectId: "students2-d3265",
  });

const db = getFirestore(firebaseApp);

const querySnapshot = await getDocs(collection(db, "users.snapshot"));

// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

console.log(querySnapshot)