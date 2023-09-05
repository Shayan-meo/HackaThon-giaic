import Image from "next/image";
import React from "react";
import Img from "../../assets/images/process.svg";
import play from "../../assets/images/play.svg";

const Process = () => {
  const contentData = [
    {
      title: "Restaurant Active Process",
      description: "We Document Every Food Bean Process until it is saved.",
      para:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna.",
      buttonText: "Read More",
      playVideoText: "Play Video",
    },
  ];
  return (
    <div className="container-fluid my-5">
      <div className="row">
        {contentData.map((item, index) => (
          <div className="col-sm-12" key={index}>
            <div className="container-fluid position-relative">
              <Image src={Img} alt="img" className="img-fluid" />
              <div className="position-absolute my-3 py-2 mx-3 top-0 start-50">
                <div className="container text-end">
                  <div>
                    <p className="primary-color fs-4 Great-Vibes">
                      {item.title}
                    </p>
                  </div>
                  <div>
                    <p className="fs-2 fw-bold text-white">
                      <span className="primary-color fs-2 fw-bold">We </span>
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <p className="fs-6">{item.para}</p>
                  </div>
                  <div className="container">
                    <button
                      type="button"
                      className="btn search-bar rounded-pill text-white mx-3 px-5 py-2"
                    >
                      {item.buttonText}
                    </button>
                    <Image src={play} alt="play" className="img-fluid" />{" "}
                    {item.playVideoText}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Process;
