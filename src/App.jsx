import { useState } from 'react'
import React from 'react'
import ReactDom from 'react-dom/client'
import Head from './Component/Head.jsx'
import './App.css'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import Body from './Component/Body.jsx'
import Lc from './Component/Login_page.jsx'
import {createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Profile from './Component/Profile.jsx'
import Footer from './Component/Footer.jsx'





function App() {
  return (
    <>
    <Head/>
    <Outlet/>
    {/* <Footer/> */}
    
    </>
  )
}

const appRouter=createBrowserRouter([
  {
    path:"/", 
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/> 
      },
      {
        path:"/home",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>

      },
      {
        path:"/contact",
        element:<Contact/>
      },

      {
        path:"/:name/:username",
        element:<Profile/>
      },
      {
        path:"/:name",
        element:<Lc/>
      }
  ],
    // errorElement:<Error/>
  },  
  
]);
const root=ReactDom.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
// export default App 
