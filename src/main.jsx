import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Clientes from './pages/Clientes.jsx'
import Especialistas from './pages/Especialistas.jsx'
import Servicios from './pages/Servicios.jsx'
import Consultas from './pages/Consultas.jsx'
import Dashboard from './pages/Dashboard.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {index: true, element: <Home/>},
      {
        path: "home",
        element: <Home/>,
      },
      {
        path: "clientes",
        element: <Clientes/>,
      },
      {
        path: "especialistas",
        element: <Especialistas/>,
      },
      {
        path: "servicios",
        element: <Servicios/>,
      },
      {
        path: "consultas",
        element: <Consultas/>,
      },
      {
        path: "dashboard",
        element: <Dashboard/>,
      },
      {
        path: "profile",
        element: <Profile/>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
