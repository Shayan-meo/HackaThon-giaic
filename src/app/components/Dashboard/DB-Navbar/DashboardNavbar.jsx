import Link from "next/link";
import React from "react";
import Search from "../../../assets/images/Search.svg";
import User from "../../../assets/images/User.svg";
import Cart from "../../../assets/images/Cart.svg";
import BgImg from "../../../assets/images/bg Img.svg";
import Image from "next/image";
import DBNavIcon from "./DBNavIcon";
import DBNavLink from "./DBNavLink";

const DashBoardNavbar = () => {
  const NavList = {
    home: "Home",
    menu: "Menu",
    blog: "Blog",
    pages: "Pages",
    about: "About",
    shop: "Shop",
    contact: "Contact",
  };
  return (
    <div className="container-fluid">
      <div className="position-relative">
        <div className="position-absolute top-0 start-50">
          <Image src={BgImg} className="img-fluid" />
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand fw-bold" href="/">
              F<span className="primary-green">oo</span>dtuck
            </Link>
            <ul className="navbar-nav mx-auto ms-4 mb-2 mb-lg-0">
              <DBNavLink href="/" text="Home" />
              <DBNavLink href="/pages/menu" text={NavList.menu} />
              <DBNavLink href="/pages/blog" text={NavList.blog} />
              <DBNavLink href="/pages/pages" text={NavList.pages} />
              <DBNavLink href="/pages/about" text={NavList.about} />
              <DBNavLink href="/pages/shop" text={NavList.shop} />
              <DBNavLink href="/pages/contact" text={NavList.contact} />
            </ul>
            <div className="d-flex">
              <DBNavIcon
                href="/pages/menu"
                icon={Search}
                altText="Search Icon"
              />
              <DBNavIcon
                href="/pages/userinput/signin"
                icon={User}
                altText="User Icon"
              />
              <DBNavIcon href="/pages/shop" icon={Cart} altText="Cart Icon" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashBoardNavbar;
