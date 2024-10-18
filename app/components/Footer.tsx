import React from "react";

const Footer = () => {
  return (
    <div className="p-10">
      <p className="text-center">
        © {new Date().getFullYear()} Hernando Abella. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
