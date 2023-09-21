import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const AppRoutes = [
    {
        path: "/signup",
        element: <Signup />
    },
    {
        path: "/",
        element: <Login />
    }
];

export default AppRoutes;