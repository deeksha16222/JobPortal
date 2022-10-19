import banner from "../../../assets/images/home/banner.png";
import solaytic from "../../../assets/images/companies-logo/solaytic.png";
import kanba from "../../../assets/images/companies-logo/kanba.png";
import lightAi from "../../../assets/images/companies-logo/lighting.png";
import ztos from "../../../assets/images/companies-logo/ztos.png";
import goldline from "../../../assets/images/companies-logo/goldline.png";
import ideaa from "../../../assets/images/companies-logo/ideaa.png";

import liva from "../../../assets/images/companies-logo/liva.png";

import velocity9 from "../../../assets/images/companies-logo/velocity-9.png";






export const Home = () => {
  return (
    <>
      <div className="bg-dark background__wrap home__bg">
        <div className="container">
          <div className="home__wrap">
            <div className="d-flex align-items-center justify-content-between">
              <div className="text-home">
                <p className="text-light m-0 p-0">
                  Welcome to
                </p>
                <p className="text-light m-0">
                My<span className="text-blue">Jobs</span>
                </p>
                <button type="button" className="get-started-btn">
                  Get Started
                </button>
              </div>
            
            </div>
            <div className="image__banner">
                <img src={banner} alt="banner" />
              </div>
          </div>
        </div>
      </div>
      <div className="bg-blue">
      <div className="why-blk">
        <div className="container">
          <p className="title">Why Us</p>
          <div className="d-flex justify-content-between flex-wrap">
            <div className="bg-light why-sm-blk">
              <p className="why-sm-title">Get More</p>
              <p className="why-sm-title">Visibility</p>
              <p className="why-sm-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="bg-light why-sm-blk">
              <p className="why-sm-title">Organize Your</p>
              <p className="why-sm-title">Candidates</p>
              <p className="why-sm-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div className="bg-light why-sm-blk">
              <p className="why-sm-title">Verify Their</p>
              <p className="why-sm-title">Abilities</p>
              <p className="why-sm-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
          </div>
          </div>
        </div>
        <div className="why-blk">
            <div className="container">
                <p className="title">Companies Who Trust Us</p>
            </div>
            <div className="companies__gallery d-flex align-items-center justify-content-center">
                <img src={solaytic} alt="solaytic" />
                <img src={kanba} alt="kanba" />

                <img src={lightAi} alt="lightAi" />
                <img src={ztos} alt="ztos" />
                <img src={kanba} alt="kanba" />
                <img src={goldline} alt="goldline" />
                <img src={ideaa} alt="ideaa" />
                <img src={liva} alt="liva" />
                <img src={velocity9} alt="velocity9" />


            </div>
        </div>
      </div>
    </>
  );
};
