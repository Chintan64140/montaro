import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
