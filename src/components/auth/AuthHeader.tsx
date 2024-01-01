import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <>
      <div className="text-center">
        <Link to="index.html">
          <img
            src="/src/assets/images/logo-dark.png"
            alt=""
            height="22"
            className="mx-auto"
          />
        </Link>
        <p className="text-muted mt-2 mb-4">Responsive Admin Dashboard</p>
      </div>
    </>
  );
};

export default AuthHeader;
