import React from "react";
import "./footer.css"

function Footer() {
  return (
    <footer className="content footer-nav">
           <ul class="nav justify-content-center">
       <li class="nav-item">
      <a id="contact-links" href="https://github.com/JessGiannini" target="_blank" rel="noreferrer">Git Hub</a>
      </li>
       <li class="nav-item">
      <a id="contact-links" href="https://www.linkedin.com/in/jessica-giannini-155b1310/" target="_blank" rel="noreferrer">LinkedIn</a>
      </li>
       <li class="nav-item">
      <a id="contact-links" href="https://stackoverflow.com/users/15607558/jess-giannini" target="_blank" rel="noreferrer">Stack Overflow</a>
      </li>
      </ul>
    </footer>
  );
}

export default Footer;