import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Footer from './Footer.jsx'
import Header from './Header.jsx'
import Post from './Post.jsx'
import './index.css'
import FourOhFour from './404.jsx';
import CheckoutForm from './CheckoutForm.jsx';
import Return from './Return.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "work/:id",
    element: <Post />,
  },
  { path: "*", 
    element: <FourOhFour />,  
  },
  { path: "/checkout", 
    element: <CheckoutForm />,  
  },
  { path: "/return", 
    element: <Return />,  
},
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
      <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
