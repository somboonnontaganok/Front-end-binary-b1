import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from '../src/components/Login'
import Signup from '../src/components/Signup'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Editactivity from './components/Editactivity'
import Createactivity from './components/Createactivity'
import DashBoard from './components/DashBoard'
import Createprofile from './components/Createprofile';


const router = createBrowserRouter([
  // insert your path here
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/createactivity',
    element: <Createactivity />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
