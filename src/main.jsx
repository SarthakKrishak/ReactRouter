import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'

//This is one way of creating routes in React
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [{
//       path: "",
//       element: <Home/>
//     },
//       {
//         path: "contact",
//         element: <Contact/>
//       }, {
//         path: "about",
//         element: <About/>
//       }
//     ]

//   }
// ])

//This is second way of creating route
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path='' element={<Home/> } />
      <Route path='about' element={<About/> } />
      <Route path='github' element={<Github/> } />
      <Route path='contact' element={<Contact/> } />
      <Route path='user/:userid' element={<User/> } />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
