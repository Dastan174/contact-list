import type React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "./layout.css";

type ChildrenProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
