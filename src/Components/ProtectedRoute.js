import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (auth === false) {
    // navigate("/signIn", { replace: true });
    return <Navigate to="/signIn" replace={true} />;
  }

  return (
    <div>
      <Navigate to={"/home"} replace={true} />
    </div>
  );
};

export default ProtectedRoute;
