import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import TestElement from './pages/TestElement'
import Layout from './pages/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import CourseLayout from './pages/CoursesPage/CourseLayout'
import Login from './pages/Login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Layout />,
      },
      {
        path: '/courses/:id',
        element: <CourseLayout />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const AppRouter = () => {
  return <RouterProvider router={router} />
}

export default AppRouter
