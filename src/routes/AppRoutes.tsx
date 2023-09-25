import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ResetPassword from "../pages/ResetPassword";
import Home from "../pages/Home";
import VerifyPassword from "../pages/VerifyPassword";
import UpdatePassword from "../pages/UpdatePassword";

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
        path: "/passwordReset",
        element: <ResetPassword />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/verifyPassword",
        element: <VerifyPassword />
    },
    {
        path: "/updatePassword",
        element: <UpdatePassword />
    }
];

export default AppRoutes;