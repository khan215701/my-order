const NotificationBell = () => {
  return (
    <>
      <li className="dropdown notification-list topbar-dropdown">
        <a
          className="nav-link dropdown-toggle waves-effect waves-light"
          data-bs-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <i className="fe-bell noti-icon"></i>
          <span className="badge bg-danger rounded-circle noti-icon-badge">
            9
          </span>
        </a>
      </li>
    </>
  );
};

export default NotificationBell;
