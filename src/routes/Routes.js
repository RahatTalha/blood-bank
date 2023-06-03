import { createBrowserRouter } from "react-router-dom";
import SignUp from "../component/signup/SignUp";
import Login from "../component/Login/Login";
import HomePage from "../component/homepage/HomePage";







export const routes = createBrowserRouter([
    {
        path: '/',
        element:<SignUp></SignUp>
    },
    {
        path:'/login',
        element: <Login></Login>
    },
    {
        path: '/home',
        element: <HomePage></HomePage>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    }
])