import React from "react";
import "./footer.css"

function Footer() {
  return (
    <div id="contact-links" className="content">
      <a href="https://github.com/JessGiannini" target="_blank" rel="noreferrer"><i className="fa fa-github-square fa-5x"></i>Git Hub</a>
      <a href="https://www.linkedin.com/in/jessica-giannini-155b1310/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin-square fa-5x"></i>LinkedIn</a>
      <a href="https://stackoverflow.com/users/15607558/jess-giannini" target="_blank" rel="noreferrer"><i className="fa fa-stack-overflow fa-5x"></i>Stack Overflow</a>
    </div>
  );
}

export default Footer;