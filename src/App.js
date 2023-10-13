/*
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";

export default function App() {
  return (
    <Scheduler
      view="week"
      events={EVENTS}
      selectedDate={new Date(2021, 4, 5)}
    />
  );
}
*/
import { Scheduler } from "@aldabil/react-scheduler";
import { EVENTS } from "./events";


/*

import React, {useState} from "react";
import Logo from './jologo.png'
import DashBoard from "./components/pages/dashboard";
import Booking from "./components/pages/booking";
import Venue from "./components/pages/venue";
import Profile from "./components/pages/profile";

export default function App() {

    const [page, setPage] = useState(<DashBoard/>)



  return (
      <div>

          <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                  aria-controls="default-sidebar" type="button"
                  className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
          </button>

          {/!*<aside id="default-sidebar"
                 className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                 aria-label="Sidebar">
              <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
                  <ul className="space-y-2 font-medium">
  <li className="header-list-item">
  <div className="flex flex-col items-center">
    <img src={Logo} alt="Logo" className="pl-2 h-20 w-9" />
    <span className="text-xl font-medium mt-2 whitespace-nowrap dark:text-white">
      Venue Booking System
    </span>
  </div>
</li>



                      <li onClick={()=>setPage(<DashBoard/>)}>
                          <a href="#"
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                              <svg
                                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 22 21">
                                  <path
                                      d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                                  <path
                                      d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
                              </svg>
                              <span className="ml-3">Dashboard</span>
                          </a>
                      </li>
                      <li onClick={()=>setPage(<Booking/>)}>
                          <a href="#"
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                              <svg
                                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 18 18">
                                  <path
                                      d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                              </svg>
                              <span className="flex-1 ml-3 whitespace-nowrap">Booking</span>
                              <span
                                  className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                          </a>
                      </li>
                      <li onClick={()=>setPage(<Venue/>)}>
                          <a href="#"
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                              <svg
                                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 20 20">
                                  <path
                                      d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
                              </svg>
                              <span className="flex-1 ml-3 whitespace-nowrap">Venue</span>
                              <span
                                  className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                          </a>
                      </li>
                      <li onClick={()=>setPage(<Profile/>)}>
                          <a href="#"
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                              <svg
                                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                  viewBox="0 0 20 18">
                                  <path
                                      d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
                              </svg>
                              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
                          </a>
                      </li>

                      <li>
                          <a href="#"
                             className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 group">
                              <svg
                                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"/>
                              </svg>
                              <span className="flex-1 ml-3 whitespace-nowrap">Logout</span>
                          </a>
                      </li>

                  </ul>
              </div>
          </aside>
*!/}

 <aside
    id="default-sidebar"
    className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >

              <div className="min-h-screen flex flex-row bg-gray-100">
                  <div className="flex flex-col w-60 bg-white rounded-r-3xl overflow-hidden">
                      <div className="flex items-center justify-center h-20 shadow-md">
                          <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
                      </div>
                      <ul className="flex flex-col py-4">
                          <li onClick={()=>setPage(<DashBoard/>)}>
                              <a href="#"
                                 className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                  <span
                                      className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                      className="bx bx-home"></i></span>
                                  <span className="text-sm font-medium">Dashboard</span>
                              </a>
                          </li>

                           <li onClick={()=>setPage(<Venue/>)}>
                              <a href="#"
                                 className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                  <span
                                      className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                      className="bx bx-bell"></i></span>
                                  <span className="text-sm font-medium">Venue</span>
                                  <span
                                      className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
                              </a>
                          </li>

                          <li onClick={()=>setPage(<Booking/>)}>
                              <a href="#"
                                 className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                  <span
                                      className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                      className="bx bx-book"></i></span>
                                  <span className="text-sm font-medium">Booking</span>
                              </a>
                          </li>



                          <li onClick={()=>setPage(<Profile/>)}>
                              <a href="#"
                                 className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                  <span
                                      className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                      className="bx bx-user"></i></span>
                                  <span className="text-sm font-medium">Profile</span>
                              </a>
                          </li>

                          <li onClick={()=>{sessionStorage.clear(); window.location.reload()}}>
                              <a href="#"
                                 className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                                  <span
                                      className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i
                                      className="bx bx-log-out"></i></span>
                                  <span className="text-sm font-medium">Logout</span>
                              </a>
                          </li>
                      </ul>
                  </div>
              </div>
          </aside>
          <div className="p-4 sm:ml-64 w-100 h-100">
              {page}
          </div>


      </div>

  );
}
*/


import React, {useEffect, useState} from "react";
import DashBoard from "./components/pages/dashboard";
import Booking from "./components/pages/booking";
import Venue from "./components/pages/venue";
import Profile from "./components/pages/profile";

import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import MyVenue from "./components/pages/my-venue";
import UserManagement from "./components/pages/User-management";
import AuthService from "./services/auth/auth_service";




export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [page, setPage] = useState(<DashBoard />);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

   const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default context menu behavior
  };

  const handleDragStart = (event) => {
    event.preventDefault(); // Prevent drag-and-drop behavior on anchor elements
  };

  const handleKeyDown = (event) => {
    if (event.shiftKey) {
      event.preventDefault(); // Prevent opening links in a new tab when shift is pressed
    }
  };

  const [venueCount, setVenueCount] = useState(0)

  useEffect(()=>{
      AuthService.venueCount().then(r=>{
        console.log('bbbb',r.data)
      setVenueCount(r.data.venue_count)
  }, [])
  })


    const [venueManagerCount, setVenueManagerCount] = useState(0)
     useEffect(()=>{
      AuthService.venueManagerCount().then(r=>{
       setVenueManagerCount(r.data.count)
  }, [])
  })



  return (
      <BrowserRouter>
    <div className="flex h-screen ">
      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform sm:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Sidebar"
      >
        {/* Sidebar Content */}
        <div className="min-h-screen flex flex-col  w-60  bg-gray-100 rounded-r-3xl overflow-hidden">
          <div className="flex items-center   justify-center h-20 shadow-md">
            <h1 className="text-3xl uppercase text-indigo-500">Logo</h1>
          </div>
          {/*<ul className="flex flex-col py-4">
            <li onClick={() => setPage(<DashBoard />)}>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-sm font-medium">Dashboard</span>
              </a>
            </li>

            <li onClick={() => {setPage(<Venue />); setIsSidebarOpen(false)}}>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-bell"></i>
                </span>
                <span className="text-sm font-medium">Venue</span>
                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                  5
                </span>
              </a>
            </li>

            <li onClick={() => {setPage(<Booking />); setIsSidebarOpen(false)}}>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-book"></i>
                </span>
                <span className="text-sm font-medium">Booking</span>
              </a>
            </li>

            <li onClick={() => setPage(<Profile />)}>
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-user"></i>
                </span>
                <span className="text-sm font-medium">Profile</span>
              </a>
            </li>

            <li
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
            >
              <a
                href="#"
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-log-out"></i>
                </span>
                <span className="text-sm font-medium">Logout</span>
              </a>
            </li>
          </ul>*/}
           <ul className="flex flex-col py-4">
                {sessionStorage.getItem('role') === 'Venue Manager' &&  (
            <li onClick={closeSidebar}>
              <Link to="/"   onDragStart={handleDragStart} className="group ...">
                <span
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 rounded-lg group-hover:bg-blue-100 mr-5"

              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-sm font-medium">Dashboard</span>
              </span>
              </Link>
            </li>
                    )}


                    {sessionStorage.getItem('role') === 'Admin' &&  (
            <li onClick={closeSidebar}>
              <Link to="/"   onDragStart={handleDragStart} className="group ...">
                <span
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 rounded-lg group-hover:bg-blue-100 mr-5"

              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text-sm font-medium">Dashboard</span>
              </span>
              </Link>
            </li>
                    )}

                    {sessionStorage.getItem('role') === 'Admin' && (
            <li onClick={closeSidebar}>
              <Link to="/user-management"   onDragStart={handleDragStart} className="group ...">
                <span
               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 rounded-lg group-hover:bg-blue-100 mr-5"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-bell"></i>
                </span>
                <span className="text-sm font-medium">User Mng</span>
                <span className="ml-auto mr-2 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                    {venueManagerCount}
                </span>
              </span>
              </Link>
            </li>
                      )}

                      {sessionStorage.getItem('role') === 'Admin' && (
            <li onClick={closeSidebar}>
              <Link to="/venue"   onDragStart={handleDragStart} className="group ...">
                <span
               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 rounded-lg group-hover:bg-blue-100 mr-5"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-bell"></i>
                </span>
                <span className="text-sm font-medium">Venue</span>
                <span className="ml-auto mr-2 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                  5
                </span>
              </span>
              </Link>
            </li>
                      )}


                      {sessionStorage.getItem('role') === 'Venue Manager' && (
            <li onClick={closeSidebar}>
              <Link to="/my-venue"   onDragStart={handleDragStart} className="group ...">
                <span
               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 rounded-lg group-hover:bg-blue-100 mr-5"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-bell"></i>
                </span>
                <span className="text-sm font-medium">My Venue</span>
                <span className="ml-auto mr-2 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                    {venueCount}
                </span>
              </span>
              </Link>
            </li>
                      )}


           {sessionStorage.getItem('role') === 'User'  ? (
  <li onClick={closeSidebar}>
    <Link to="/booking" onDragStart={handleDragStart} className="group ...">
      <span
        className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 rounded-lg group-hover:bg-blue-100 mr-5"
      >
        <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
          <i className="bx bx-book"></i>
        </span>
        <span className="text-sm font-medium">Booking</span>
      </span>
    </Link>
  </li>
) : null}

            <li onClick={closeSidebar}>
              <Link to="/profile"   onDragStart={handleDragStart} className="group ...">
                 <span
                className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 rounded-lg group-hover:bg-blue-100 mr-5"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-user"></i>
                </span>
                <span className="text-sm font-medium">Profile</span>
              </span>
              </Link>
            </li>
            <li
              onClick={() => {
                sessionStorage.clear();
                window.location.reload();
              }}
            >
                <div className={'group'}>
              <span
               className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800 rounded-lg group-hover:bg-blue-100 mr-5"
              >
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <i className="bx bx-log-out"></i>
                </span>
                <span className="text-sm font-medium">Logout</span>
              </span>
                    </div>
            </li>
          </ul>
            <div className="mt-auto p-4 border-t border-gray-300">
  <div className="text-gray-500 text-center">
   {/* <p className="text-sm font-semibold text-indigo-500">User Information</p>*/}
  </div>
  <div className="text-gray-500 mt-2">
    <p className="text-sm">
      <span className="text-gray-600">User Name:</span>{" "}
      <span className={sessionStorage.getItem('role') === 'User' ? 'text-blue-500' : 'text-indigo-500'}>
        {sessionStorage.getItem('username')}
      </span>
    </p>
    <p className="text-sm">
      <span className="text-gray-600">Role:</span>{" "}
      <span className={sessionStorage.getItem('role') === 'User' ? 'text-blue-500' : 'text-indigo-500'}>
        {sessionStorage.getItem('role')}
      </span>
    </p>
  </div>
</div>

        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <nav className="relative flex justify-between items-center p-4 bg-gray-300 bg-opacity-75 backdrop-blur-md text-white">
          {/*<button
            onClick={toggleSidebar}
            type="button"
            className="inline-flex items-center p-2 mt-2 ml-3 text-sm  bg-gray-900 rounded-lg sm:hidden  hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
               Your menu icon
            </svg>
          </button>*/}
           <button onClick={toggleSidebar} data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar"
                  aria-controls="default-sidebar" type="button"
                  className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                   xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd" fill-rule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
              </svg>
          </button>
          <div>
            <img
              src="https://i.imgur.com/CeVfZyY.jpg"
              alt="User Profile"
              className="h-10 w-10 rounded-full"
            />
          </div>
          {/*<div className="absolute right-4 flex items-center">
            <button onClick={closeSidebar}>Logout</button>
          </div>*/}
        </nav>

        {/* Main Content */}
        {/*<div onClick={closeSidebar} className="p-4 sm:ml-64 w-100 overflow-auto h-100">
            <Routes>
              <Route path="/" element={<DashBoard />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>*/}

        <div onClick={closeSidebar} className="p-4 sm:ml-64 w-100 overflow-auto h-100">
  <Routes>
    {sessionStorage.getItem('role') === 'User' ? (
      <Route path="/" element={<Booking />} />
    ) : sessionStorage.getItem('role') === 'Venue Manager' ? (
      <Route path="/" element={<DashBoard />} />
      ) : sessionStorage.getItem('role') === 'Admin' ? (
      <Route path="/" element={<DashBoard />} />
    ) : (
      <Route path="/dashboard" element={<DashBoard />} />
    )}
    <Route path="/booking" element={<Booking />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/venue" element={<Venue />} />
     <Route path="/my-venue" element={<MyVenue />} />
      <Route path="/user-management" element={<UserManagement />} />
  </Routes>
</div>

      </div>
    </div>
      </BrowserRouter>
  );
}
