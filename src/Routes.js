import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import TestElement from './pages/TestElement'
import Layout from './pages/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import CourseLayout from './pages/CoursesPage/CourseLayout'
import Login from './pages/Login'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../src/Store/Store'
import PdfViewer from './pages/CoursesPage/PdfViewer'
import PageLayout from './pages/PageLayout'

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <RootLayout />,
    children: [
      {
        path: '',
        element: <Layout />,
      },
      {
        path: 'courses/:id',
        element: <CourseLayout />,
      },
    ],
  },
  {
    path: '/viewpdf/:url',
    element: <PdfViewer />,
  },
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'pagelayout',
    element: <PageLayout />,
  },
])

const AppRouter = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  )
}

export default AppRouter
