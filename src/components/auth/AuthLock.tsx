import { Link } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { IconButton } from "@mui/material";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Password from "../Password";

const AuthLock = () => {
  return (
    <>
      <div className="loading authentication-bg authentication-bg-pattern">
        <div className="account-pages mt-5 mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-4">
                <div className="text-center">
                  <Link to="/">
                    <img
                      src="/src/assets/images/logo-dark.png"
                      alt=""
                      height="22"
                      className="mx-auto"
                    />
                  </Link>
                  <p className="text-muted mt-2 mb-4">
                    Responsive Admin Dashboard
                  </p>
                </div>
                <div className="card">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <h4 className="text-uppercase mt-0 mb-4">Welcome Back</h4>
                      <img
                        src="/src/assets/images/users/user-1.jpg"
                        width="88"
                        alt="user-image"
                        className="rounded-circle img-thumbnail"
                      />
                      <p className="text-muted my-4">
                        Enter your password to access the admin.
                      </p>
                    </div>
                    <FormControl
                      sx={{ m: 1, width: "35ch" }}
                      variant="outlined"
                    >
                      <Password />
                      <div className="mb-0 text-center d-grid">
                        <IconButton aria-label="fingerprint" color="success">
                          <Fingerprint />
                        </IconButton>
                      </div>
                    </FormControl>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <p className="text-muted">
                      Not you? return
                      <Link to="/auth-login" className="text-dark ms-1">
                        <b>Sign In</b>
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLock;
