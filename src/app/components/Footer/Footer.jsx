import Link from "next/link";
import React from "react";
import MayoSauce from "../../assets/images/mayo sauce.svg";
import Image from "next/image";
import BottomFooter from "./BottomFooter";
import SupportTextSection from "./SupportTextSection";
import SubscriptionSection from "./SubscriptionSection";
import AboutUsSection from "./AboutUsSection";
import LinksSection from "./LinkSection";
import HelpSection from "./HelpSection";
import Mayo from "../../assets/images/mayo sauce.svg";
import RecentPost from "./RecentPost";

const Footer = () => {
  const recentPosts = [
    {
      title: "Is fast food good for your body?",
      date: "February 28, 2022",
      imageSrc: Mayo,
    },
  ];
  return (
    <div className="container-fluid bg-dark mb-0 text-white">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <SupportTextSection />
          <SubscriptionSection />
          <hr className="primary-color" />
        </div>
      </div>
      <div className="container my-5 text-white">
        <div className="row d-flex justify-content-center">
          <AboutUsSection />
          <LinksSection />
          <HelpSection />
          <div className="col-lg-4 mt-3">
            {recentPosts.map((post, index) => (
              <React.Fragment key={index}>
                <RecentPost
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                />
                <RecentPost
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                />
                <RecentPost
                  title={post.title}
                  date={post.date}
                  imageSrc={post.imageSrc}
                />
              </React.Fragment>
            ))}
          </div>
          {/* <div className="col-lg-4 mb-4">
            <span className="fs-5 fw-bold">Recent Post</span>
            <div className="container mt-3 d-flex justify-content-center">
              <Image src={MayoSauce} className="img-fluid" />
              <div className="card-body p-2">
                <span>Is fastfood good for your body?</span>
                <p className="text-white-50">February 28,2022</p>
              </div>
            </div>
            <div className="container d-flex justify-content-center">
              <Image src={MayoSauce} className="img-fluid" />
              <div className="card-body p-2">
                <span>Is fastfood good for your body?</span>
                <p className="text-white-50">February 28,2022</p>
              </div>
            </div>
            <div className="container d-flex justify-content-center">
              <Image src={MayoSauce} className="img-fluid" />
              <div className="card-body p-2">
                <span>Is fastfood good for your body?</span>
                <p className="text-white-50">February 28,2022</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default Footer;
