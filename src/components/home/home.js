import React, { useEffect, useState } from "react";
import "./home.css";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { LiaUserCircle } from "react-icons/lia";
import { BsHouseCheckFill } from "react-icons/bs";
import { VscSettings } from "react-icons/vsc";
import img1 from "../../aseets/img-1.png";
import eclp3 from "../../aseets/Ellipse 3.svg";
import eclp4 from "../../aseets/Ellipse 4.svg";
import eclp5 from "../../aseets/Ellipse 5.svg";
import eclp6 from "../../aseets/Ellipse 5.svg";
import eclp7 from "../../aseets/Ellipse 7.svg";
import eclp8 from "../../aseets/Ellipse 8.svg";
import img_1 from "../../aseets/image 1.png";
import img_2 from "../../aseets/image 2.png";
import img_3 from "../../aseets/image 3.png";
import img_4 from "../../aseets/image 4.png";
import img_5 from "../../aseets/image 5.png";
import img_6 from "../../aseets/image 6.png";
import reg18 from "../../aseets/Rectangle 18.png";
import reg19 from "../../aseets/Rectangle 19.png";
import reg20 from "../../aseets/Rectangle 20.png";
import reg29 from "../../aseets/Rectangle 29.png";
import reg30 from "../../aseets/Rectangle 30.png";
import reg31 from "../../aseets/Rectangle 31.png";
import reg32 from "../../aseets/Rectangle 32.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import unsplash from "../../aseets/unsplash_7uoMmzPd2JA.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import Btn from "../utilty/btn";
const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [forRentData, setForRentData] = useState(null);
  const [dataFlag, setDataFlag] = useState(false);
  const handleActive = (index) => {
    setActiveIndex(index);
  };

  // // get data
  // const url = "https://zillow-base1.p.rapidapi.com/WebAPIs/zillow/homedetails";

  // useEffect(() => {
  //   axios
  //     .get(url, {
  //       headers: {
  //         "X-RapidAPI-Key":
  //           "5ba8de4b17mshf759ea7d1738accp146d36jsn280c0026741c",
  //         "X-RapidAPI-Host": "zillow-base1.p.rapidapi.com",
  //       },
  //       params: {
  //         zpid: "61975204",
  //       },
  //     })
  //     .then((response) => {
  //       setForRentData(response.data);
  //       console.log("forRentData:", response.data.data);
  //     })
  //     .catch((error) => console.error(error));
  // }, [setForRentData, url]);
  // useEffect(() => {
  //   if (forRentData) {
  //     setDataFlag(true);
  //   }
  //   console.log("new is", forRentData);
  // }, [forRentData]);
  return (
    <div>
      <div className=" top-content">
        <div className="location">
          <CiLocationOn />
          <span>Rezilla, 18 Grattan St, Brooklyn</span>
        </div>
        <div className="phone">
          <AiOutlinePhone />
          <span>+02 127-064-473-3</span>
        </div>
        <div className="mail">
          <AiOutlineMail />
          <span>fadyfathymaher3@gmail.com</span>
        </div>
      </div>
      {/* start nav */}
      <div className="nav-layout container mx-auto">
        <nav>
          <div className="nav-content">
            <ul>
              {["Home", "About", "Listings", "Services", "Blogs"].map(
                (text, index) => (
                  <li
                    key={text}
                    className={activeIndex === index ? "active" : ""}
                    onClick={() => handleActive(index)}
                  >
                    {text}
                  </li>
                )
              )}
            </ul>
          </div>
          <div className="logo">
            <BsHouseCheckFill
              style={{
                marginLeft: "-105px",
                position: "absolute",
                color: "white",
              }}
            />
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle id="Ellipse 1" cx="25" cy="25" r="25" fill="#3A0CA3" />
            </svg>

            <span>Real-Estate</span>
          </div>
          <div className="auth">
            <LiaUserCircle />
            <span>Login/Register</span>
          </div>
          <div className="add-list">
            <BsHouseCheckFill
              style={{
                color: "white",
                marginLeft: "-110px",
                position: "absolute",
                fontSize: "16px",
              }}
            />
            <Btn />
          </div>
        </nav>
        <main>
          <section className="first-section">
            <div className="left-part">
              <span>REAL ESTATE</span>
              <h6>Find a perfect home you love..!</h6>
              <p>
                Etiam eget elementum elit. Aenean dignissim dapibus vestibulum.
                Integer a dolor eu sapien sodales vulputate ac in purus.
              </p>
              <img src={img1} alt="Luxury" />
            </div>

            <div className="right-part">
              <div className="select-part">
                <span>For Sale</span>
                <span>For Rent</span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="154"
                height="3"
                viewBox="0 0 154 3"
                fill="none"
                style={{ marginLeft: "40px" }}
              >
                <path
                  d="M2 1.5H152"
                  stroke="#3A0CA3"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg>
              <form action="">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="New York, San Francisco, etc"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Select Property Type"
                />
                <input type="text" name="" id="" placeholder="Select Rooms" />
              </form>
              <div className="advanced">
                <VscSettings style={{ color: "#3A0CA3" }} />
                <span>Advance Search</span>
              </div>
              <button className="right-sec-btn">Search</button>
            </div>
          </section>
          <div className="customers">
            <div className="left-customer">
              <div className="img-part">
                <img src={eclp3} alt="" />
                <img src={eclp4} alt="" />
                <img src={eclp5} alt="" />
                <img src={eclp6} alt="" />
                <img src={eclp7} alt="" />
              </div>
              <div className="img-content-part">
                <span>72k+ Happy Customers</span>
              </div>
            </div>
            <div className="right-customer">
              <img src={eclp8} alt="" />
              <span>
                200+ New <br /> Listings Everyday!
              </span>
            </div>
          </div>

          <div className="partners">
            <div className="trusted">
              <span>Trusted by 100+ Companies across the globe! </span>
            </div>
            <div className="partners-imgs">
              <img src={img_1} alt="" />
              <img src={img_2} alt="" />
              <img src={img_3} alt="" />
              <img src={img_4} alt="" />
              <img src={img_5} alt="" />
              <img src={img_6} alt="" />
            </div>
          </div>
          <div className="lasted">
            <div className="checkout">
              <span>CHECKOUT OUR NEW</span>
              <h2>Latest Listed Properties</h2>
              <p>
                Donec porttitor euismod dignissim. Nullam a lacinia ipsum,
                <br /> nec dignissim purus.
              </p>
            </div>
            <div className="btn-group">
              <button className="btn-emp">All</button>
              <button className="btn-fill">Sell</button>
              <button className="btn-emp">Rent</button>
            </div>
          </div>
          {/* start data section */}
          <div className="data">
            <div className="item">
              <Carousel width={300} showThumbs={false}>
                <div>
                  <img src={reg18} />
                </div>
                <div>
                  <img src={img1} />
                </div>
                <div>
                  <img src={img1} />
                </div>
              </Carousel>
              <div className="item-content">
                <h3>$ 5,970</h3>
                <h4>Tranquil Haven in the Woods</h4>
                <p>103 Wright CourtBurien, WA 98168</p>
                <div className="item-icons">
                  <div className="bed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                    >
                      <path
                        d="M25 4.5H12V12.0387H10.6154V9.47619C10.6138 8.02433 10.0363 6.63239 9.00971 5.60575C7.9831 4.57912 6.59117 4.00164 5.13931 4H2V0H0V21.5H2V18.5161L28 18.7241V21.5H30V9.5C29.9985 8.17438 29.4712 6.90348 28.5339 5.96613C27.5965 5.02877 26.3256 4.5015 25 4.5ZM2 6H5.13931C6.0609 6.00104 6.94445 6.3676 7.59611 7.01927C8.24777 7.67093 8.61433 8.55447 8.61537 9.47606V12.0386H2V6ZM28 16.724L2 16.516V14.0387H28V16.724ZM28 12.0387H14V6.5H25C25.7954 6.50091 26.5579 6.81727 27.1203 7.37968C27.6827 7.9421 27.9991 8.70463 28 9.5V12.0387Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                    <span>4 Beds</span>
                  </div>
                  <div className="path">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22.4 13.2596H3.2V4.25964C3.19907 3.9207 3.26538 3.58495 3.39509 3.27182C3.5248 2.95868 3.71533 2.67439 3.95565 2.43538L3.97565 2.41539C4.35228 2.03931 4.83584 1.78868 5.36026 1.69774C5.88468 1.6068 6.42438 1.67998 6.90565 1.90728C6.45114 2.66298 6.26222 3.5489 6.36892 4.42427C6.47562 5.29965 6.87181 6.11425 7.49455 6.73864L8.0421 7.28619L7.03425 8.29409L8.16555 9.42539L9.1734 8.41754L14.7579 2.83318L15.7657 1.82533L14.6344 0.693985L13.6264 1.70184L13.0789 1.15429C12.4233 0.50055 11.5592 0.0975642 10.637 0.0155515C9.71481 -0.0664612 8.79309 0.177699 8.03245 0.705485C7.23036 0.198942 6.27983 -0.0197366 5.33702 0.0853734C4.39422 0.190483 3.51519 0.613131 2.84435 1.28389L2.82435 1.30388C2.43497 1.69113 2.12627 2.15177 1.91611 2.65912C1.70595 3.16648 1.59851 3.71048 1.6 4.25964V13.2596H0V14.8596H1.6V16.3946C1.59997 16.5236 1.62077 16.6517 1.6616 16.7741L3.15 21.2391C3.22943 21.4781 3.38216 21.6861 3.5865 21.8334C3.79084 21.9807 4.0364 22.0598 4.2883 22.0596H4.9333L4.35 24.0596H6.01665L6.6 22.0596H17.005L17.605 24.0596H19.275L18.675 22.0596H19.7115C19.9634 22.0599 20.209 21.9807 20.4134 21.8334C20.6178 21.6861 20.7706 21.4782 20.85 21.2391L22.3383 16.7741C22.3791 16.6517 22.4 16.5236 22.4 16.3946V14.8596H24V13.2596H22.4ZM8.626 2.28563C9.0668 1.8458 9.66407 1.59878 10.2868 1.59878C10.9095 1.59878 11.5068 1.8458 11.9476 2.28563L12.495 2.83318L9.17355 6.15463L8.626 5.60718C8.18619 5.16638 7.93918 4.56911 7.93918 3.94641C7.93918 3.32371 8.18619 2.72644 8.626 2.28563ZM20.8 16.3296L19.4234 20.4596H4.5766L3.2 16.3296V14.8596H20.8V16.3296Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                    <span>3 Bath</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <Carousel width={300} showThumbs={false}>
                <div>
                  <img src={reg19} />
                </div>
              </Carousel>
              <div className="item-content">
                <h3>$ 1,970</h3>
                <h4>Serene Retreat by the Lake</h4>
                <p>1964 Jehovah Drive, VA 22408</p>
                <div className="item-icons">
                  <div className="bed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                    >
                      <path
                        d="M25 4.5H12V12.0387H10.6154V9.47619C10.6138 8.02433 10.0363 6.63239 9.00971 5.60575C7.9831 4.57912 6.59117 4.00164 5.13931 4H2V0H0V21.5H2V18.5161L28 18.7241V21.5H30V9.5C29.9985 8.17438 29.4712 6.90348 28.5339 5.96613C27.5965 5.02877 26.3256 4.5015 25 4.5ZM2 6H5.13931C6.0609 6.00104 6.94445 6.3676 7.59611 7.01927C8.24777 7.67093 8.61433 8.55447 8.61537 9.47606V12.0386H2V6ZM28 16.724L2 16.516V14.0387H28V16.724ZM28 12.0387H14V6.5H25C25.7954 6.50091 26.5579 6.81727 27.1203 7.37968C27.6827 7.9421 27.9991 8.70463 28 9.5V12.0387Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                    <span>3 Beds</span>
                  </div>
                  <div className="path">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22.4 13.2596H3.2V4.25964C3.19907 3.9207 3.26538 3.58495 3.39509 3.27182C3.5248 2.95868 3.71533 2.67439 3.95565 2.43538L3.97565 2.41539C4.35228 2.03931 4.83584 1.78868 5.36026 1.69774C5.88468 1.6068 6.42438 1.67998 6.90565 1.90728C6.45114 2.66298 6.26222 3.5489 6.36892 4.42427C6.47562 5.29965 6.87181 6.11425 7.49455 6.73864L8.0421 7.28619L7.03425 8.29409L8.16555 9.42539L9.1734 8.41754L14.7579 2.83318L15.7657 1.82533L14.6344 0.693985L13.6264 1.70184L13.0789 1.15429C12.4233 0.50055 11.5592 0.0975642 10.637 0.0155515C9.71481 -0.0664612 8.79309 0.177699 8.03245 0.705485C7.23036 0.198942 6.27983 -0.0197366 5.33702 0.0853734C4.39422 0.190483 3.51519 0.613131 2.84435 1.28389L2.82435 1.30388C2.43497 1.69113 2.12627 2.15177 1.91611 2.65912C1.70595 3.16648 1.59851 3.71048 1.6 4.25964V13.2596H0V14.8596H1.6V16.3946C1.59997 16.5236 1.62077 16.6517 1.6616 16.7741L3.15 21.2391C3.22943 21.4781 3.38216 21.6861 3.5865 21.8334C3.79084 21.9807 4.0364 22.0598 4.2883 22.0596H4.9333L4.35 24.0596H6.01665L6.6 22.0596H17.005L17.605 24.0596H19.275L18.675 22.0596H19.7115C19.9634 22.0599 20.209 21.9807 20.4134 21.8334C20.6178 21.6861 20.7706 21.4782 20.85 21.2391L22.3383 16.7741C22.3791 16.6517 22.4 16.5236 22.4 16.3946V14.8596H24V13.2596H22.4ZM8.626 2.28563C9.0668 1.8458 9.66407 1.59878 10.2868 1.59878C10.9095 1.59878 11.5068 1.8458 11.9476 2.28563L12.495 2.83318L9.17355 6.15463L8.626 5.60718C8.18619 5.16638 7.93918 4.56911 7.93918 3.94641C7.93918 3.32371 8.18619 2.72644 8.626 2.28563ZM20.8 16.3296L19.4234 20.4596H4.5766L3.2 16.3296V14.8596H20.8V16.3296Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                    <span>2 Bath</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <Carousel width={300} showThumbs={false}>
                <div>
                  <img src={reg20} />
                </div>
                <div>
                  <img src={img1} />
                </div>
                <div>
                  <img src={img1} />
                </div>
              </Carousel>
              <div className="item-content">
                <h3>$ 3,450</h3>
                <h4>Charming Cottage in the Meadow</h4>
                <p>Charming Cottage in the Meadow</p>
                <div className="item-icons">
                  <div className="bed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                    >
                      <path
                        d="M25 4.5H12V12.0387H10.6154V9.47619C10.6138 8.02433 10.0363 6.63239 9.00971 5.60575C7.9831 4.57912 6.59117 4.00164 5.13931 4H2V0H0V21.5H2V18.5161L28 18.7241V21.5H30V9.5C29.9985 8.17438 29.4712 6.90348 28.5339 5.96613C27.5965 5.02877 26.3256 4.5015 25 4.5ZM2 6H5.13931C6.0609 6.00104 6.94445 6.3676 7.59611 7.01927C8.24777 7.67093 8.61433 8.55447 8.61537 9.47606V12.0386H2V6ZM28 16.724L2 16.516V14.0387H28V16.724ZM28 12.0387H14V6.5H25C25.7954 6.50091 26.5579 6.81727 27.1203 7.37968C27.6827 7.9421 27.9991 8.70463 28 9.5V12.0387Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                    <span>2 Beds</span>
                  </div>
                  <div className="path">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22.4 13.2596H3.2V4.25964C3.19907 3.9207 3.26538 3.58495 3.39509 3.27182C3.5248 2.95868 3.71533 2.67439 3.95565 2.43538L3.97565 2.41539C4.35228 2.03931 4.83584 1.78868 5.36026 1.69774C5.88468 1.6068 6.42438 1.67998 6.90565 1.90728C6.45114 2.66298 6.26222 3.5489 6.36892 4.42427C6.47562 5.29965 6.87181 6.11425 7.49455 6.73864L8.0421 7.28619L7.03425 8.29409L8.16555 9.42539L9.1734 8.41754L14.7579 2.83318L15.7657 1.82533L14.6344 0.693985L13.6264 1.70184L13.0789 1.15429C12.4233 0.50055 11.5592 0.0975642 10.637 0.0155515C9.71481 -0.0664612 8.79309 0.177699 8.03245 0.705485C7.23036 0.198942 6.27983 -0.0197366 5.33702 0.0853734C4.39422 0.190483 3.51519 0.613131 2.84435 1.28389L2.82435 1.30388C2.43497 1.69113 2.12627 2.15177 1.91611 2.65912C1.70595 3.16648 1.59851 3.71048 1.6 4.25964V13.2596H0V14.8596H1.6V16.3946C1.59997 16.5236 1.62077 16.6517 1.6616 16.7741L3.15 21.2391C3.22943 21.4781 3.38216 21.6861 3.5865 21.8334C3.79084 21.9807 4.0364 22.0598 4.2883 22.0596H4.9333L4.35 24.0596H6.01665L6.6 22.0596H17.005L17.605 24.0596H19.275L18.675 22.0596H19.7115C19.9634 22.0599 20.209 21.9807 20.4134 21.8334C20.6178 21.6861 20.7706 21.4782 20.85 21.2391L22.3383 16.7741C22.3791 16.6517 22.4 16.5236 22.4 16.3946V14.8596H24V13.2596H22.4ZM8.626 2.28563C9.0668 1.8458 9.66407 1.59878 10.2868 1.59878C10.9095 1.59878 11.5068 1.8458 11.9476 2.28563L12.495 2.83318L9.17355 6.15463L8.626 5.60718C8.18619 5.16638 7.93918 4.56911 7.93918 3.94641C7.93918 3.32371 8.18619 2.72644 8.626 2.28563ZM20.8 16.3296L19.4234 20.4596H4.5766L3.2 16.3296V14.8596H20.8V16.3296Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                    <span>1 Bath</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <Carousel width={300} showThumbs={false}>
                <div>
                  <img src={reg18} />
                </div>
                <div>
                  <img src={img1} />
                </div>
                <div>
                  <img src={img1} />
                </div>
              </Carousel>
              <div className="item-content">
                <h3>$ 2,389</h3>
                <h4>Grand Estate on the Hilltop</h4>
                <p>103 Wright CourtBurien, WA 98168</p>
                <div className="item-icons">
                  <div className="bed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="22"
                      viewBox="0 0 30 22"
                      fill="none"
                    >
                      <path
                        d="M25 4.5H12V12.0387H10.6154V9.47619C10.6138 8.02433 10.0363 6.63239 9.00971 5.60575C7.9831 4.57912 6.59117 4.00164 5.13931 4H2V0H0V21.5H2V18.5161L28 18.7241V21.5H30V9.5C29.9985 8.17438 29.4712 6.90348 28.5339 5.96613C27.5965 5.02877 26.3256 4.5015 25 4.5ZM2 6H5.13931C6.0609 6.00104 6.94445 6.3676 7.59611 7.01927C8.24777 7.67093 8.61433 8.55447 8.61537 9.47606V12.0386H2V6ZM28 16.724L2 16.516V14.0387H28V16.724ZM28 12.0387H14V6.5H25C25.7954 6.50091 26.5579 6.81727 27.1203 7.37968C27.6827 7.9421 27.9991 8.70463 28 9.5V12.0387Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                    <span>4 Beds</span>
                  </div>
                  <div className="path">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22.4 13.2596H3.2V4.25964C3.19907 3.9207 3.26538 3.58495 3.39509 3.27182C3.5248 2.95868 3.71533 2.67439 3.95565 2.43538L3.97565 2.41539C4.35228 2.03931 4.83584 1.78868 5.36026 1.69774C5.88468 1.6068 6.42438 1.67998 6.90565 1.90728C6.45114 2.66298 6.26222 3.5489 6.36892 4.42427C6.47562 5.29965 6.87181 6.11425 7.49455 6.73864L8.0421 7.28619L7.03425 8.29409L8.16555 9.42539L9.1734 8.41754L14.7579 2.83318L15.7657 1.82533L14.6344 0.693985L13.6264 1.70184L13.0789 1.15429C12.4233 0.50055 11.5592 0.0975642 10.637 0.0155515C9.71481 -0.0664612 8.79309 0.177699 8.03245 0.705485C7.23036 0.198942 6.27983 -0.0197366 5.33702 0.0853734C4.39422 0.190483 3.51519 0.613131 2.84435 1.28389L2.82435 1.30388C2.43497 1.69113 2.12627 2.15177 1.91611 2.65912C1.70595 3.16648 1.59851 3.71048 1.6 4.25964V13.2596H0V14.8596H1.6V16.3946C1.59997 16.5236 1.62077 16.6517 1.6616 16.7741L3.15 21.2391C3.22943 21.4781 3.38216 21.6861 3.5865 21.8334C3.79084 21.9807 4.0364 22.0598 4.2883 22.0596H4.9333L4.35 24.0596H6.01665L6.6 22.0596H17.005L17.605 24.0596H19.275L18.675 22.0596H19.7115C19.9634 22.0599 20.209 21.9807 20.4134 21.8334C20.6178 21.6861 20.7706 21.4782 20.85 21.2391L22.3383 16.7741C22.3791 16.6517 22.4 16.5236 22.4 16.3946V14.8596H24V13.2596H22.4ZM8.626 2.28563C9.0668 1.8458 9.66407 1.59878 10.2868 1.59878C10.9095 1.59878 11.5068 1.8458 11.9476 2.28563L12.495 2.83318L9.17355 6.15463L8.626 5.60718C8.18619 5.16638 7.93918 4.56911 7.93918 3.94641C7.93918 3.32371 8.18619 2.72644 8.626 2.28563ZM20.8 16.3296L19.4234 20.4596H4.5766L3.2 16.3296V14.8596H20.8V16.3296Z"
                        fill="#2B2B2B"
                      />
                    </svg>
                    <span>3 Bath</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* start About Us Section */}
          <section className="about">
            <div className="about-txt">
              <h4>Introduce yourself to </h4>
              <h2>Our Team of Experts</h2>
            </div>
            <div className="about-imgs">
              <div className="img-content">
                <img src={reg29} alt="" />
                <div className="img-text">
                  <h3>Brendon M</h3>
                  <h5>CEO & Founder</h5>
                </div>
              </div>
              <div className="img-content">
                <img src={reg30} alt="" />
                <div className="img-text">
                  <h3>Jodi J. Appleby</h3>
                  <h5>Real Estate Developer</h5>
                </div>
              </div>
              <div className="img-content">
                <img src={reg31} alt="" />
                <div className="img-text">
                  <h3>Justin S. Meza</h3>
                  <h5>Listing Agent</h5>
                </div>
              </div>
              <div className="img-content">
                <img src={reg32} alt="" />
                <div className="img-text">
                  <h3>Susan T. Smith</h3>
                  <h5>Buyer's Agent</h5>
                </div>
              </div>
            </div>
          </section>
          {/* start agent part */}
          <section className="agent">
            <div className="agent-content">
              <img src={unsplash} alt="" />
              <div className="agent-text">
                <h2>Become a Agent.</h2>
                <p>
                  Fusce venenatis tellus a felis scelerisque.
                  <br /> venenatis tellus a felis scelerisque.
                </p>
              </div>
              <button>Register Now</button>
            </div>
          </section>
        </main>
        <footer>
          <div className="footer-content">
            <div className="links">
              <h4>Quick Links</h4>
              <p>Home</p>
              <p>About</p>
              <p>Listings</p>
              <p>Services</p>
              <p>Blogs</p>
              <p>Become a Agent</p>
            </div>
            <div className="links">
              <h4>Discovery</h4>
              <p>United States</p>
              <p>Germany</p>
              <p>Africa</p>
              <p>India</p>
            </div>
            <div  className="links">
              <h4>
                Subscribe to our <br /> Newsletter!
              </h4>
              <p>Home</p>
              <input placeholder="Email Address" />
              <p>Follow Us on</p>
              <div className="links-icons">
                <FaLinkedin />
                <FaFacebookSquare />
                <FaInstagram />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
