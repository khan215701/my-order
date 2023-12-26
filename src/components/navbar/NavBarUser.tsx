import * as React from "react";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

const settings = [
  { label: "My Account", icon: "fe-user", link: "/my-account" },
  { label: "Lock Screen", icon: "fe-lock", link: "/auth-lock" },
  { label: "Logout", icon: "fe-log-out", link: "/auth-logout" },
];

function ResponsiveAppBar() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <li className="dropdown notification-list topbar-dropdown">
      <button
        className="nav-link  nav-user me-0 waves-effect waves-light"
        data-bs-toggle="dropdown"
        role="button"
        onClick={handleOpenUserMenu}
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
      </button>

      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {settings.map((setting) => (
          <Link to={setting.link} className="dropdown-item notify-item">
            <MenuItem key={setting.label} onClick={handleCloseUserMenu}>
              <i className={setting.icon}></i>
              <span>
                <Typography sx={{ fontSize: "15px" }} textAlign="center">
                  {setting.label}
                </Typography>
              </span>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </li>
  );
}
export default ResponsiveAppBar;
