import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
// import { createRoot } from 'react-dom/client'

import RootLayout from './layouts/Rootlayout'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import Skills from './Pages/Skills'

import './App.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='Projects' element={<Projects />} />
      <Route path='Skills' element={<Skills />} />
    </Route>
  )

)
function App() {



  return (
    <>
      <RouterProvider router={router} />

    </>
  )
}

export default App
