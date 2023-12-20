import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthRegister from "./AuthRegister";

const router = createBrowserRouter([
  /* home page */
  { path: "/", element: <HomePage /> },

  /* auth pages*/
  { path: "/auth-register", element: <AuthRegister /> },
]);

export default router;
