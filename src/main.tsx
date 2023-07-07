import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from '../pages/Root.tsx'
import Home from '../pages/Home.tsx'
import Posts from '../pages/Posts.tsx'
import Contact from '../pages/Contact.tsx'
import About from '../pages/About.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path: "/home", element: <Home/>
      },
      {
        path: "/tasklist", element: <App/>
      },
      {
        path: "/posts", element: <Posts/>
      },
      {
        path:"/contact", element: <Contact/>
      },
      {
        path:"/about", element: <About/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
