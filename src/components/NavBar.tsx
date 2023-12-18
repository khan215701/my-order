import SearchInput from "./navbar/SearchInput";
import NotificationBell from "./navbar/NotificationBell";
import NavBarUser from "./navbar/NavBarUser";

const NavBar = () => {
  return (
    <>
      <div className="navbar-custom">
        <ul className="list-unstyled topnav-menu float-end mb-0">
          <SearchInput />

          <NotificationBell />

          <NavBarUser />
        </ul>
        <ul className="list-unstyled topnav-menu topnav-menu-left mb-0">
          <li>
            <button className="button-menu-mobile disable-btn waves-effect">
              <i className="fe-menu"></i>
            </button>
          </li>

          <li>
            <h4 className="page-title-main">Dashboard</h4>
          </li>
        </ul>

        <div className="clearfix"></div>
      </div>
    </>
  );
};

export default NavBar;
