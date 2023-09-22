import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";

const AppRoutes = [
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/",
        element: <ResetPassword />
    }
];

export default AppRoutes;