"use client";
import React, { useEffect, useState } from "react";
import "./Hero.css";
import HeroImg from "../../assets/images/Hero- signup.svg";
import Image from "next/image";
import Link from "next/link";

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const HeroClient = () => {
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    // Get the current page title based on the path
    const pathSegments = window.location.pathname.split("/");
    const currentPath = pathSegments[pathSegments.length - 1];

    const capitalizedTitle = capitalizeFirstLetter(currentPath);

    // Set the page title based on the current path
    setPageTitle(`${capitalizedTitle}`);
  }, []);

  return (
    <div className="container-fluid position-relative hero">
      <Image src={HeroImg} className="img-fluid" />
      <div className="position-absolute top-50 start-50 translate-middle text-white">
        <div className="container">
          <h1>{pageTitle} Page</h1>
          <nav
            style={{ "--bs-breadcrumb-divider": ">" }}
            aria-label="breadcrumb" className="d-flex justify-content-center"
          >
            <ol className="breadcrumb">
              <li className="breadcrumb-item greater-sign">
                <Link href="/" className="text-decoration-none text-white">
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item active primary-color"
                aria-current="page"
              >
                {pageTitle}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeroClient;
