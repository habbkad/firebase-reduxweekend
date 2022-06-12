import React, { useState, useEffect } from "react";
import app from "./Firebase/Config";

import { collection, getDocs, getFirestore } from "firebase/firestore";

const UsersList = () => {
  const db = getFirestore(app);

  useEffect(() => {
    let user = [];
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "Users"));
      querySnapshot.forEach((doc) => {
        user.push(doc.data());
        console.log(user);
        console.log(doc.id, " => ", doc.data());
      });
    };

    getData();
  }, []);

  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.gen}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
