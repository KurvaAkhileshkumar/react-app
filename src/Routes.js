import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import TestElement from './pages/TestElement'
import Layout from './pages/DashBoard/Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout/RootLayout.jsx'
import CourseLayout from './pages/CoursesPage/CourseLayout'
import Login from './components/common/Login.jsx'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from '../src/Store/Store'
import PdfViewer from './features/Courses/PdfViewer.jsx'

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
    path: '/pdf',
    element: <RootLayout />,
    children: [
      {
        path: 'viewpdf/:url',
        element: <PdfViewer />,
      },
    ],
  },
  {
    path: '/',
    element: <Login />,
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
