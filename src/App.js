import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import app from "./Firebase/Config";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import UsersList from "./UsersList";

function App() {
  const [name, setName] = useState("");
  const [gen, setGen] = useState("");

  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPerson = {
      name: name,
      gen: gen,
      id: uuid(),
    };

    //works without custom id
    // try {
    //   const docRef = await addDoc(collection(db, "users"), newPerson);

    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }

    //works with custom id

    try {
      await setDoc(doc(db, "Users", newPerson.id), newPerson);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        />
        <input
          value={gen}
          onChange={(e) => {
            setGen(e.target.value);
          }}
          placeholder="gen"
        />
        <br />
        <button>submit</button>
      </form>

      <br />

      <UsersList />
    </div>
  );
}

export default App;
