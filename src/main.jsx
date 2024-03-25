import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import FontDetail from './FontDetail.jsx'
import './index.css'
import FourOhFour from './404.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
