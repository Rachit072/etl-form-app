import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import BasicDetails from './components/BasicDetails';
import Document from './components/Document';
import StatementOfPurpose from './components/StatementOfPurpose';
import InterviewAvailability from './components/InterviewAvailability';
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom';
import SideBar from './components/SideBar';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App=()=>{
  return <div>
    <div><Navbar/></div>
    <div className='flex'>
      <SideBar/>
      <Outlet/>
    </div> 
    <div><Footer/></div> 
  </div>
}

const appRouter = createBrowserRouter([
  {
      path:'/',
      element:<App/>,
      errorElement:<Error/>,
      children:[
          {
              path:"/",
              element:<BasicDetails />,
          },
          {
              path:"/document",
              element:<Document/>,
          },
          {
              path:"/sop",
              element:<StatementOfPurpose/>,
          },
          {
              path:"/interview",
              element:<InterviewAvailability/>,
          },
       
      ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter}/>);