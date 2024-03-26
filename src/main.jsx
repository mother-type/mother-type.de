import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Footer from './layouts/Footer.jsx'
import Header from './layouts/Header.jsx'
import FontDetail from './pages/Detail.jsx'
import './css/index.css'
import FourOhFour from './pages/404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "fonts/:id",
    element: <FontDetail />,
  },
  { path: "*", 
    element: <FourOhFour />,  
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
