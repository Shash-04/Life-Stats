  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'

  import './index.css'
  import App from './App.jsx'
  import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
  import Layout from './components/Layout.jsx'
  import Header from './components/Header/Header.jsx'
  import Stats from './components/Stats/Stats.jsx'
  import Home from './components/Home/Home.jsx'

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "home",
          element: <Home />
        },
        {
          path: "stats",
          element: <Stats />
        },
        {
          path: "stats/:read",
          element: <Stats />
        }
      ]
    }
  ])

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  )
