import React, { useEffect, useState } from "react";


import {BeatLoader, ClockLoader} from "react-spinners";
import BarLoader from "react-spinners/BarLoader";
import AuthService from "../../../services/auth/auth_service";
import App from "../../../App";

function PreDashboard() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    AuthService.loadByUsersById(sessionStorage.getItem('id')).then(r => {
      console.log(r.data.results[0].role.name);
      const role = r.data.results[0].role;
      const user_id = r.data.results[0].id;
      sessionStorage.setItem('role', role.name);
      sessionStorage.setItem('user_id', user_id);
      sessionStorage.setItem('user', r.data.results[0].user);
      sessionStorage.setItem('first_name', r.data.results[0].firstName);
      sessionStorage.setItem('last_name', r.data.results[0].lastName);
      sessionStorage.setItem('email', r.data.results[0].email);
      sessionStorage.setItem('username', r.data.results[0].username);

      setTimeout(() => {
        setShowLoader(false); // Hide the loader after 5 minutes
      }, 2 * 1000);
    });
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      {!showLoader ? (
        sessionStorage.getItem('role') === "Venue Manager" ? <App /> :
             sessionStorage.getItem('role') === "User" ? <App /> :
          sessionStorage.getItem('role') === "Admin" ? <App /> : "Loading..."
      ) : (
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, right: 0, background: '#fff', zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          {/* Use BeatLoader as the loader */}
          <ClockLoader color="#5E72E4" loading={true} size={30} width={'16%'} />
        </div>
      )}
    </div>
  );
}

export default PreDashboard;
