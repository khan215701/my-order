import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import AuthRegister from "./auth/AuthRegister";
import AuthLogin from "./auth/AuthLogin";
import AuthLogout from "./auth/AuthLogout";
import AuthLock from "./auth/AuthLock";
import AuthResetPassword from "./auth/AuthResetPassword";

const router = createBrowserRouter([
  /* home page */
  { path: "/", element: <HomePage /> },

  /* auth pages*/
  { path: "/auth-register", element: <AuthRegister /> },
  { path: "/auth-login", element: <AuthLogin /> },
  { path: "/auth-logout", element: <AuthLogout /> },
  { path: "/auth-lock", element: <AuthLock /> },
  { path: "/auth-reset", element: <AuthResetPassword /> },
]);

export default router;
