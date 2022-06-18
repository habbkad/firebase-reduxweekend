import React from "react";
import app from "./Firebase/Config";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

const EditUsers = (props) => {
  const db = getFirestore(app);

  const handleDelete = async () => {
    await deleteDoc(doc(db, "Users", props.users.id));
  };

  return (
    <div>
      <h1>{props.users.name}</h1>
      <h3>{props.users.gen}</h3>
      <button onClick={handleDelete}>Delete</button>
      <hr />
    </div>
  );
};

export default EditUsers;
