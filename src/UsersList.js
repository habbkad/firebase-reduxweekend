import React, { useState, useEffect } from "react";
import app from "./Firebase/Config";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "./Redux/Actions";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import EditUsers from "./EditUsers";

const UsersList = () => {
  const dispatch = useDispatch();
  const db = getFirestore(app);
  const students = useSelector((state) => state.students);
  console.log(students);

  useEffect(() => {
    const getData = async () => {
      //works but does no relaod on data update
      // const querySnapshot = await getDocs(collection(db, "Users"));
      // querySnapshot.forEach((doc) => {
      //   user.push(doc.data());
      //   console.log(user);
      //   dispatch(addStudent(user));
      //   console.log(doc.id, " => ", doc.data());
      // });

      const q = query(collection(db, "Users"));
      onSnapshot(q, (querySnapshot) => {
        let user = [];
        querySnapshot.forEach((doc) => {
          user.push(doc.data());
          dispatch(addStudent(user));
        });
      });
    };

    getData();
  }, []);

  return (
    <div>
      {students.map((student) => {
        return (
          <div key={student.id}>
            <EditUsers users={student} />
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
