import React from "react";
import WhiteSpace from "../../assets/images/Testimonial White.svg";
import User from "../../assets/images/User Img.svg";
import Quotes from "../../assets/images/Quotes.svg";
import Star from "../../assets/images/star.svg";
import GrayStar from "../../assets/images/grey star.svg";
import BGFlower from "../../assets/images/bg-flower.svg";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <p className="primary-color fs-4 Great-Vibes">Testimonials</p>
            <span className="fs-2 fw-bold text-white">
              What our clients are saying
            </span>
          </div>
          <div className="container">
            <div className="position-relative text-center mt-5">
              <Image src={WhiteSpace} alt="white" className="img-fluid" />
              <div className="position-absolute top-50 start-50 translate-middle">
                <Image src={User} alt="user" className="img-fluid" />

                <div className="container text-center">
                  <Image src={Quotes} alt="quotes" className="img-fluid" />
                  <p className="text-muted fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Quisque diam pellentesque bibendum non dui volutpat
                    fringilla bibendum. Urna, elit augue urna, vitae feugiat
                    pretium donec id elementum. Ultrices mattis sed vitae mus
                    risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                  </p>
                  <div className="d-flex justify-content-center">
                    <Image src={Star} alt="star" className="img-fluid mx-1" />
                    <Image src={Star} alt="star" className="img-fluid mx-1" />
                    <Image src={Star} alt="star" className="img-fluid mx-1" />
                    <Image src={Star} alt="star" className="img-fluid mx-1" />
                    <Image
                      src={GrayStar}
                      alt="star"
                      className="img-fluid mx-1"
                    />
                  </div>
                  <div className="my-3">
                    <p className="text-black fs-6">Alamin Hasan</p>
                    <p className="text-muted fs-6">Food Specialist</p>
                  </div>
                </div>
              </div>
            </div>

            <Image
              src={BGFlower}
              alt="bg-flower"
              className="img-fluid position-absolute top-0 start-50 mt-5 d-none d-md-block"
            />
          </div>
        </div>
      </div>
    </div>
    // <div className="container my-5">
    //   <p className="primary-color fs-4 Great-Vibes">Testimonials</p>
    //   <span className="fs-2 fw-bold text-white">
    //     What our client are saying
    //   </span>
    //   <div className="container position-relative">
    //     <div className="text-center position-relative">
    //       <Image src={WhiteSpace} alt="white" className="img-fluid" />

    //       <div className="position-absolute top-0 start-50 translate-middle mt-5">
    //         <div className="container mt-5">
    //           <Image src={User} alt="user" className="img-fluid user" />
    //         </div>
    //         <div className="container">
    //           <div className="container text-center mt-5">
    //             <Image src={Quotes} alt="quotes" className="img-fluid" />
    //             <p className="text-muted">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               Quisque diam pellentesque bibendum non dui volutpat fringilla
    //               bibendum. Urna, elit augue urna, vitae feugiat pretium donec
    //               id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi,
    //               et ac dapibus sit eu velit in consequat.
    //             </p>
    //             <div className="d-flex justify-content-center">
    //               <Image src={Star} alt="star" className="img-fluid mx-1" />
    //               <Image src={Star} alt="star" className="img-fluid mx-1" />
    //               <Image src={Star} alt="star" className="img-fluid mx-1" />
    //               <Image src={Star} alt="star" className="img-fluid mx-1" />
    //               <Image src={GrayStar} alt="star" className="img-fluid mx-1" />
    //             </div>
    //             <div className="my-3">
    //               <p className="text-black">Alamin Hasan</p>
    //               <p className="text-muted">Food Specialist</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="container position-absolute top-0 start-50 mt-5">
    //       <Image src={BGFlower} alt="bg-flower" className="img-fluid" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Testimonial;
