import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import IndexPage from './pages'
import TrendingPage from './pages/trending'
import RandomPage from './pages/random'
import SearchPage from './pages/search'
import Layout from './pages/layout'
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: 'trending',
        element: <TrendingPage />
      },
      {
        path: "random",
        element: <RandomPage />
      },
      {
        path:'search',
        element: <SearchPage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
