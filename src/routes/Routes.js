import { createBrowserRouter } from "react-router-dom";
import SignUp from "../component/signup/SignUp";
import Login from "../component/Login/Login";
import HomePage from "../component/homepage/HomePage";
import BloodDonationForm from "../component/DetailsForm/BloodDonationForm";
import AllHome from "../component/homepage/AllHome";
import DashboardDetails from "../component/homepage/DashboardDetails";







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
    },
    {
        path: '/blooddonationform',
        element: <BloodDonationForm></BloodDonationForm>
    },
    {
        path: '/allhome',
        element: <AllHome></AllHome>
    },
    {
        path: '/dashboard',
        element: <DashboardDetails></DashboardDetails>
    },
])