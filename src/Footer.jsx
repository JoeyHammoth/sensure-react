import React from "react"; // default export

const Footer = function () {
  return (
    <div className="footer">
      <div className="left-footer">
        <img src="../images/logo.png" alt="Sensure Logo" width="200px" />
        <div className="socials"></div>
      </div>
      <div className="right-footer">
        <ul className="right-footer-clinic">
          <li>
            <b>For Clinicians</b>
          </li>
          <li>Science</li>
          <li>How it Works</li>
          <li>Miscellaneous</li>
        </ul>
        <ul className="right-footer-hospital">
          <li>
            <b>For Hospitals</b>
          </li>
          <li>Agreements</li>
          <li>Corporate Sales</li>
          <li>Terms and Conditions</li>
        </ul>
        <ul className="right-footer-user">
          <li>
            <b>For Users</b>
          </li>
          <li>Instructions</li>
          <li>Additional Resources</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
