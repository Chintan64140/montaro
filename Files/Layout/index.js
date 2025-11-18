import React from "react";
import Header from "../Components/header";
import Footer from "../Components/footer";

const Layout = ({ children }) => {
  return (
    <div className="h-screen  w-full">
      <Header />
      <div className="min-h-[calc(100vh-104px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
