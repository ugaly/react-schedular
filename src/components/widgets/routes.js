import DashBoard from "../pages/dashboard";
import React from "react";
import Venue from "../pages/venue";
import Booking from "../pages/booking";
import Profile from "../pages/profile";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: 'bx bx-home',
        name: "dashboard",
        path: "/dashboard",
        element: <DashBoard />,
      },
        {
        icon: 'bx bx-bell',
        name: "venue",
        path: "/venue",
        element:  <Venue />,
      },
        {
        icon: 'bx bx-book',
        name: "booking",
        path: "/booking",
        element: <Booking />,
      },

      {
        icon: 'bx bx-user"',
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },


    ],
  },

];

export default routes;
