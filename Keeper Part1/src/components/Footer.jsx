import React from "react";

function Footer() {
  const date = new Date();
  let currentYear = date.getFullYear();

  return (
    <div>
      <footer>
        <p>Copywrite ©️ {currentYear}</p>
      </footer>
    </div>
  );
}

export default Footer;
