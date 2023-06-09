import db from "../db.js";
import {
  collection,
  query,
  where,
  getDocs,
  serverTimestamp,
  addDoc,
  updateDoc,
} from "firebase/firestore";

const createTransaction = async (req, res) => {
  try {
    const { senderId, receiverId, amount } = req.body;
    let senderName = "";
    let receiverName = "";

    const q = query(
      collection(db, "bank_users"),
      where("account_id", "==", senderId)
    );
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      res
        .status(402)
        .json({ status: "failure", message: "Invalid sender account" });
    }
    querySnapshot.forEach((doc) => {
      senderName = doc.data().name;
    });

    const q2 = query(
      collection(db, "bank_users"),
      where("account_id", "==", receiverId)
    );
    const querySnapshot2 = await getDocs(q2);
    if (querySnapshot2.empty) {
      res
        .status(402)
        .json({ status: "failure", message: "Invalid receiver account" });
    }
    querySnapshot2.forEach((doc) => {
      receiverName = doc.data().name;
    });

    const data = {
      sender_id: senderId,
      receiver_id: receiverId,
      sender_name: senderName,
      receiver_name: receiverName,
      amount: amount,
      created_at: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "transactions"), data);

    await updateDoc(docRef, {
      transaction_id: docRef.id,
    });

    res
      .status(200)
      .json({
        status: "successful",
        message: "Transaction created successfully",
      });
  } catch (e) {
    console.log(e);
  }
};

export { createTransaction };
