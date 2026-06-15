import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './Components/Homepage/HomePage.jsx'
import Banner from './Components/Banner.jsx'
import Friends from './Friends.jsx'
import ErrorPage from './Components/Homepage/ErrorPage.jsx'
import Home from './Components/Home.jsx'
import TimeLine from './Components/TimeLine.jsx'
import Stats from './Components/Stats.jsx'
import FriendDetails from './Components/Homepage/FriendDetails.jsx'
import allFriends from "./RandomData.json"
import AllContext from './Components/Homepage/Context.jsx'
import { ToastContainer } from 'react-toastify'


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    
    children:[
      {
        index:true,
        Component: Banner
      },
      // {
      //   path:"/friends",
      //   Component: Friends
      // },
      {
        path: "/friends/:id",
        element:<FriendDetails></FriendDetails>
    
      },{
        path:"*",
        Component:ErrorPage
      },{
        path:"/time",
        Component:TimeLine
      },{
        path:"/stats",
        Component:Stats
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllContext>
      <RouterProvider router={router}></RouterProvider>
    </AllContext>
    <ToastContainer />
  </StrictMode>,
)
