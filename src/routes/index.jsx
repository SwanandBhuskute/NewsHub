import React, { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from "react-router-dom";
import Articles from '../Articles/Articles';
import Topheadlines from '../TopHeadlines/Topheadlines';
import Notfound from '../Notfound.jsx';


const router = createBrowserRouter([
    { path: "/", element: <Articles/> },
    { path: "/home", element: <Articles /> },
    { path: '/topheadlines', element: <Topheadlines /> },
    { path: "*", element: <Notfound /> },
  ]);
  
  export default router;