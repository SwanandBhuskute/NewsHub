import React, { Suspense } from 'react';
import { RouterProvider } from "react-router-dom";
import router from './routes/index';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar /> 
      <div style={{ marginTop: '60px' }}>
        <Suspense fallback={<>Loading...</>}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </>
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
