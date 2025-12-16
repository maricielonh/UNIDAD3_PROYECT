import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const useEquipo = (uid = null) => {
  const [equipo, setEquipo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let q;

    if (uid) {
      q = query(collection(db, "equipo"), where("uid", "==", uid));
    } else {
      q = collection(db, "equipo");
    }

    const unsub = onSnapshot(q, (snapshot) => {
      setEquipo(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      setLoading(false);
    });

    return () => unsub();
  }, [uid]);

  return { equipo, loading };
};