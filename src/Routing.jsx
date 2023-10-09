import React from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SignUp from "./components/SignUp/index";
import SignIn from "./components/SignIn/index";

// const PrivateRoutes = () => {
//   const user = localStorage.getItem("email");

//   return user ? (
//     <div style={{ width: "90%", margin: "0 auto" }}>
//       <Outlet />
//     </div>
//   ) : (
//     <Navigate to="/sign-in" />
//   );
// };

const Routing = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/sign-in" element={<SignIn />} />
    </Routes>
  );
};

export default Routing;