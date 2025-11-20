import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Register from '../pages/Register';
import Login from '../pages/Login'
import Error from '../pages/Error';
import GameDetails from '../pages/GameDetails';
import GameUpdates from '../pages/GameUpdates';
import PrivateRoute from '../privateRoute/PrivateRoute';
import ForgetPass from '../pages/ForgetPass';
import Profile from '../pages/Profile';


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
                path: "forget-password",
                element: <ForgetPass></ForgetPass>
            },
            {
                path: "/profile",
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
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
            },
            {
                path: "game-details",
                element: <PrivateRoute>
                    <GameDetails></GameDetails>
                </PrivateRoute>
            },
            {
                path: "game-updates",
                element: <GameUpdates></GameUpdates>
            }
        ]
    }
]
) 

export default router;