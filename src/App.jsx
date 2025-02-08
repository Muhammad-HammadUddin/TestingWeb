import React from "react";


export const metadata = {
  title: "TechNova - Innovative Technology Solutions",
  description: "Empowering businesses with cutting-edge tech solutions",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
