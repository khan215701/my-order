import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <script>document.write(new Date().getFullYear());</script>
              &copy; My Order theme by{" "}
              <a target="_blank" href="https://github.com/khan215701/my-order">
                Safiq Khan
              </a>
            </div>
            <div className="col-md-6">
              <div className="text-md-end footer-links d-none d-sm-block">
                <a href="">About Us</a>
                <a href="">Help</a>
                <a href="">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
