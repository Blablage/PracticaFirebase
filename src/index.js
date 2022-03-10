///profe
// Initialize Cloud Firestore through Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js"
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { doc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";
import { getDoc } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js";

//students2
/*const firebaseApp = initializeApp({
    apiKey: "AIzaSyANxThXkZr5Kl0qVZ4OuWntWQKq8eDdbRE",
    authDomain: "students2-d3265.firebaseapp.com",
    projectId: "students2-d3265",
  });*/

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAbB5YTMV3gkN-VvegI39ogGyeJBo0Ng5I",
  authDomain: "school-5aab5.firebaseapp.com",
  projectId: "school-5aab5",
});

const db = getFirestore(firebaseApp);

const querySnapshot = await getDocs(collection(db, "users.snapshot"));

// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

console.log(querySnapshot)

//readASingleDocument()
const students = doc(db,'school/students');
const mySnapshot = await getDoc(students);
if (mySnapshot.exists()){
  const docData = mySnapshot.data();
  console.log(`My data is ${JSON.stringify(docData)}`);
}
else{
  console.log(":C");
}