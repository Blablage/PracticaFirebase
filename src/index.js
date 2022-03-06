// Initialize Cloud Firestore through Firebase
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseApp = initializeApp({
  apiKey: "AIzaSyANxThXkZr5Kl0qVZ4OuWntWQKq8eDdbRE",
  authDomain: "students2-d3265.firebaseapp.com",
  projectId: "students2-d3265",
});

const db = getFirestore();

import { getDatabase, ref, onValue} from "firebase/database";

//const db = getDatabase();
/*const starCountRef = ref(db, 'posts/' + postId + '/starCount');
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  updateStarCount(postElement, data);
});
*/

import { collection, getDocs } from "firebase/firestore";

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});