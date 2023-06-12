import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Clientes from './pages/Clientes'
import Especialistas from './pages/Especialistas'
import Servicios from './pages/Servicios'
import Consultas from './pages/Consultas'
import Dashboard from './pages/Dashboard'
import ErrorPage from './pages/ErrorPage'
import Login from './pages/Login'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Register from './pages/Register.jsx';
import { AuthProvider } from './context/authContext'

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
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
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
