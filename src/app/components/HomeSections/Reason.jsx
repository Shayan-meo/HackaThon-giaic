import Image from "next/image";
import React from "react";
import Item1 from "../../assets/images/Choose 1.svg";
import Item2 from "../../assets/images/Choose 2.svg";
import Item3 from "../../assets/images/Choose 3.svg";
import Item4 from "../../assets/images/Choose 4.svg";
import Item5 from "../../assets/images/Choose 5.svg";
import Item6 from "../../assets/images/Choose 6.svg";
import Yellow from "../../assets/images/Yellow Box.svg";
import HamBurger from "../../assets/images/Hamburger.svg";
import Cookie from "../../assets/images/Cookie.svg";
import Wine from "../../assets/images/Wine.svg";
import Link from "next/link";
import White from "../../assets/images/White card.svg";
import YellowLine from "../../assets/images/yellow line.svg";

const Reason = () => {
  const foodItems = [Item6, Item5, Item4, Item3, Item2, Item1];

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <div className="my-4 d-flex justify-content-around align-items-end">
            <div>
              <Image src={foodItems[0]} alt="food Item" className="img-fluid" />
            </div>
            <div className="mx-3">
              <Image src={foodItems[1]} alt="food Item" className="img-fluid" />
            </div>
          </div>
          <div className="container-fluid d-flex justify-content-center">
            <div className="container">
              <Image src={foodItems[2]} alt="Food Item" className="img-fluid" />
            </div>
            <div className="container">
              <Image src={foodItems[3]} alt="Food Item" className="img-fluid" />
            </div>
            <div className="container">
              <Image
                src={foodItems[4]}
                alt="Food Item"
                className="img-fluid mb-2"
              />
              <Image src={foodItems[5]} alt="Food Item" className="img-fluid" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="container my-5 mx-1">
            <p className="primary-color fs-4 Great-Vibes">Why Choose us</p>
            <span className="fs-2 fw-bold text-white">
              <span className="primary-color fs-2 fw-bold">Ex</span>
              tra ordinary taste And Experienced
            </span>
            <p className="text-white mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
            <div className="d-flex justify-content-start mx-4">
              <Link
                href="./pages/menu"
                className="text-decoration-none text-white"
              >
                <div className="position-relative mx-3">
                  <Image src={Yellow} alt="box" className="img-fluid" />
                  <div className="position-absolute top-0 end-50">
                    <Image
                      src={HamBurger}
                      alt="HamBurger"
                      className="img-fluid mt-4 ms-4"
                    />
                  </div>
                  <p className="text-center">Fast Food</p>
                </div>
              </Link>
              <Link
                href="./pages/menu"
                className="text-decoration-none text-white"
              >
                <div className="position-relative mx-3">
                  <Image src={Yellow} alt="box" className="img-fluid" />
                  <div className="position-absolute top-0 end-50">
                    <Image
                      src={Cookie}
                      alt="Cookie"
                      className="img-fluid mt-4 ms-4"
                    />
                  </div>
                  <p className="text-center">Lunch</p>
                </div>
              </Link>
              <Link
                href="./pages/menu"
                className="text-decoration-none text-white"
              >
                <div className="position-relative mx-3">
                  <Image src={Yellow} alt="box" className="img-fluid" />
                  <div className="position-absolute top-0 end-50">
                    <Image
                      src={Wine}
                      alt="Wine"
                      className="img-fluid mt-4 ms-4"
                    />
                  </div>
                  <p className="text-center">Dinner</p>
                </div>
              </Link>
            </div>
            <div className="position-relative">
              <Image src={White} alt="card" className="img-fluid" />
              <div className="position-absolute top-0">
                <Image src={YellowLine} alt="line" className="img-fluid" />
                <div className="position-absolute d-flex top-0">
                  <div className="mx-4 my-4">
                    <h1 className="primary-color fw-bold">30+</h1>
                  </div>
                  <div className="text-black mx-5 my-3">
                    <p>Years of</p>
                    <p className="fw-bold">Experienced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
