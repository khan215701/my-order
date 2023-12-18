import React from "react";

const NavBarUser = () => {
  return (
    <>
      <li className="dropdown notification-list topbar-dropdown">
        <a
          className="nav-link  nav-user me-0 waves-effect waves-light"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <img
            src="/src/assets/images/users/user-1.jpg"
            alt="user-image"
            className="rounded-circle"
          />
          <span className="pro-user-name ms-1">
            Nowak <i className="mdi mdi-chevron-down"></i>
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-end profile-dropdown">
          <div className="dropdown-header noti-title">
            <h6 className="text-overflow m-0">Welcome !</h6>
          </div>

          <a href="contacts-profile.html" className="dropdown-item notify-item">
            <i className="fe-user"></i>
            <span>My Account</span>
          </a>

          <a href="auth-lock-screen.html" className="dropdown-item notify-item">
            <i className="fe-lock"></i>
            <span>Lock Screen</span>
          </a>

          <div className="dropdown-divider"></div>

          <a href="auth-logout.html" className="dropdown-item notify-item">
            <i className="fe-log-out"></i>
            <span>Logout</span>
          </a>
        </div>
      </li>
    </>
  );
};

export default NavBarUser;
