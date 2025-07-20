import React from "react";

function Footer() {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>CopyRight ©️ {currentYear} </p>
      </footer>
    </div>
  );
}

export default Footer;
