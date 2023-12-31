import { Link } from "react-router-dom";

const AuthLogout = () => {
  return (
    <>
      <div className="loading authentication-bg authentication-bg-pattern">
        <div className="account-pages mt-5 mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-4">
                <div className="card bg-pattern">
                  <div className="card-body p-4">
                    <div className="text-center w-75 m-auto">
                      <div className="auth-logo">
                        <Link to="/" className="logo logo-dark text-center">
                          <span className="logo-lg">
                            <img
                              src="/src/assets/images/logo-dark.png"
                              alt=""
                              height="22"
                            />
                          </span>
                        </Link>

                        <Link to="/" className="logo logo-light text-center">
                          <span className="logo-lg">
                            <img
                              src="/src/assets/images/logo-light.png"
                              alt=""
                              height="22"
                            />
                          </span>
                        </Link>
                      </div>
                      <div className="text-center">
                        <div className="mt-4">
                          <div className="logout-checkmark">
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 130.2 130.2"
                            >
                              <circle
                                className="path circle"
                                fill="none"
                                stroke="#4bd396"
                                stroke-width="6"
                                stroke-miterlimit="10"
                                cx="65.1"
                                cy="65.1"
                                r="62.1"
                              />
                              <polyline
                                className="path check"
                                fill="none"
                                stroke="#4bd396"
                                stroke-width="6"
                                stroke-linecap="round"
                                stroke-miterlimit="10"
                                points="100.2,40.2 51.5,88.8 29.8,67.5 "
                              />
                            </svg>
                          </div>
                        </div>
                        <h3>See you again !</h3>

                        <p className="text-muted">
                          You are now successfully sign out.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <p className="text-muted">
                      Back to
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

export default AuthLogout;
