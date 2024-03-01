import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutPage from './pages/LayoutPage'
import HomePage from './pages/HomePage'
import ShowCustomersPage from './pages/ShowCustomersPage'
import AddCustomerPage from './pages/AddCustomerPage'
import { loader as showCustomerLoader } from './pages/ShowCustomersPage'
import SingleCustomerPage from './pages/SingleCustomerPage'
import { loader as singleCustomerLoader } from './pages/SingleCustomerPage'
const router = createBrowserRouter([
    {
        path:'/',
        element:<LayoutPage />,
        children:[
            {
                index:true,
                element:<HomePage />
            },
            {
                path:'showCustomer',
                element:<ShowCustomersPage />,
                loader:showCustomerLoader
            },
            {
                path:'addCustomers',
                element:<AddCustomerPage />
            },
            {
                path:':id',
                element:<SingleCustomerPage />,
                loader:singleCustomerLoader
            }
        ]
    }
])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App