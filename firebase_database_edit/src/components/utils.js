import db from "../firebase";
import { collection, onSnapshot, addDoc } from "@firebase/firestore";

export const handleclick = async () => {
  const name = prompt("Enter field change:");
  const change = prompt("Enter change name");
  const collectionRef = collection(db, "database_new");
  const payload = { name: name, value: change };
  await addDoc(collectionRef, payload);
};
