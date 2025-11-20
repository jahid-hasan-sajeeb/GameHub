import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Register from '../pages/Register';
import Login from '../pages/Login'
import Error from '../pages/Error';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "*",
                element: <Error></Error>
            }
        ]
    }
]
) 

export default router;