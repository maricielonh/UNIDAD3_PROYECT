import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

export const createIntegrante = async (uid, data) => {
  await addDoc(collection(db, "equipo"), {
    ...data,
    uid,
    createdAt: new Date(),
  });
};

export const updateIntegrante = async (id, data) => {
  await updateDoc(doc(db, "equipo", id), {
    ...data,
    updatedAt: new Date(),
  });
};

export const deleteIntegrante = async (id) => {
  await deleteDoc(doc(db, "equipo", id));
};

export const getEquipoByUser = (uid, callback) => {
  const q = query(collection(db, "equipo"), where("uid", "==", uid));

  return onSnapshot(q, (snapshot) => {
    const equipo = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    callback(equipo);
  });
};