import React, { Suspense } from 'react';
import { RouterProvider } from "react-router-dom";
import router from './routes/index';

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
        <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;



// import { useState } from 'react'
// import './App.css'
// import Articles from './Articles/Articles'
// import Navbar from './Navbar'

// function App() {

//   return (
//     <>
//       <Navbar/>
//       <Articles />
//     </>
//   )
// }

// export default App
