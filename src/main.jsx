import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/home/Home.jsx'
import Event from './components/event/Event.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout/>,
  children: [
   {
    path: "",
    element: <Home />
   },
   {
    path: "event",
    element: <Event />
   }


  ]
}


])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
