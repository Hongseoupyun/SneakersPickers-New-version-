import React, { useEffect} from "react";

function Logout() {

  function logout() {
    localStorage.setItem('isLoggedIn', false);
    window.open('/', "_self")

  }

  useEffect(() => {
    logout()
  });

  return (
    <div className="container">
      Signing out!
    </div>
  )
}

export default Logout;