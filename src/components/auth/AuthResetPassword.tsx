import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";

const AuthResetPassword = () => {
  return (
    <>
      <div className="loading authentication-bg authentication-bg-pattern">
        <div className="account-pages mt-5 mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-4">
                <AuthHeader />
                <div className="card">
                  <div className="card-body p-4">
                    <div className="text-center mb-4">
                      <h4 className="text-uppercase mt-0 mb-3">
                        Reset Password
                      </h4>
                      <p className="text-muted mb-0 font-13">
                        Enter your email address and we'll send you an email
                        with instructions to reset your password.
                      </p>
                    </div>

                    <form>
                      <div className="mb-3">
                        <label htmlFor="emailaddress" className="form-label">
                          Email address
                        </label>
                        <input
                          className="form-control"
                          type="email"
                          id="emailaddress"
                          placeholder="Enter your email"
                        />
                      </div>

                      <div className="mb-3 text-center d-grid">
                        <button className="btn btn-primary" type="submit">
                          Reset Password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <p className="text-muted">
                      Back to
                      <Link to="/auth-login" className="text-dark ms-1">
                        <b>Log in</b>
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

export default AuthResetPassword;
