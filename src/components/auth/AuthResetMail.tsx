import { Link } from "react-router-dom";
import AuthHeader from "./AuthHeader";

const AuthResetMail = () => {
  return (
    <>
      <div className="loading authentication-bg authentication-bg-pattern">
        <div className="account-pages mt-5 mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6 col-xl-4">
                <AuthHeader />
                <div className="card text-center">
                  <div className="card-body p-4">
                    <div className="mb-4">
                      <h4 className="text-uppercase mt-0">Confirm Email</h4>
                    </div>
                    <img
                      src="/src/assets/images/mail_confirm.png"
                      alt="img"
                      width="86"
                      className="mx-auto d-block"
                    />

                    <p className="text-muted font-14 mt-2">
                      A email has been send to <b>youremail@domain.com</b>.
                      Please check for an email from company and click on the
                      included link to reset your password.
                    </p>

                    <Link
                      to="/"
                      className="btn d-block btn-pink waves-effect waves-light mt-3"
                    >
                      Back to Home
                    </Link>
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

export default AuthResetMail;
