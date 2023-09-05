import React from "react";
import Image from "next/image";
import Dish from "../../../assets/images/Fish Dish.svg";
import Dark from "../../../assets/images/420.svg";
import Cap from "../../../assets/images/Chef Cap.svg";
import Food from "../../../assets/images/Food.svg";
import Experience from "../../../assets/images/Experience.svg";
import Pizza from "../../../assets/images/Pizza.svg";

const ExperienceSection = () => {
  const info = [
    {
      imageSrc: Cap,
      title: "Cap",
      number: "420",
      description: "Professional Chefs",
    },
    {
      imageSrc: Food,
      title: "Food",
      number: "320",
      description: "Items Of Food",
    },
    {
      imageSrc: Experience,
      title: "Experience",
      number: "30+",
      description: "Years Of Experienced",
    },
    {
      imageSrc: Pizza,
      title: "Slice",
      number: "220",
      description: "Happy Customers",
    },
  ];
  return (
    <div className="container">
      <div className="container position-relative my-5">
        <Image src={Dish} className="img-fluid" />
        <div className="position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center ">
          <Image src={Dark} className="img-fluid" />
          <div className="position-absolute container text-white d-flex justify-content-center align-items-center">
            <div className="container">
              <div className="row">
                {info.map((item, index) => (
                  <div
                    className="col-lg-3 col-md-4 col-sm-12 col-12 text-center" // Added col-12 for small screens
                    key={index}
                  >
                    <div className="mx-5">
                      <Image src={item.imageSrc} alt={item.title} />
                      <p className="fs-6 mt-3 fw-bold">{item.description}</p>
                      <h5 className="fs-5 fw-bold lh-lg">{item.number}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
