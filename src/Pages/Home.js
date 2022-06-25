import { async } from "@firebase/util";
import React from "react";
import { Button } from "react-bootstrap";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userAuth } from "../Redux/Actions";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("SignOut Successful");
        dispatch(userAuth(false));
        navigate("/signIn", { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      <Button onClick={handleSignOut}>Signout</Button>
    </div>
  );
};

export default Home;
