import React from "react";
import aboutImg from "../../assets/image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black/30 shadow-xl mx-0 md:mx-20 rounded-lg p-12"
    >
      <div>
        <h2 className="text-xl md:text-3xl font-bold">About</h2>
        <div className="md:flex flex-wrap gap-5 flex-col md:flex-row items-center">
          <img src={aboutImg} className="md:h-65 " alt="About" />
          <ul className="list-none">
            <li className="flex gap-3 py-4">
              {/* <IoArrowForward size={30} /> */}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "white", fontSize: "20px", marginTop: "10px" }}
              />

              <div className="w-96">
                <h3 className="text-xl md:text-2xl font-semibold mb-2 leading-normal">
                  Frontend Developer
                </h3>
                <p className="text-sm md:text-md leading-tight">
                  I'm a front-end developer with a focus on building responsive,
                  user-centric web interfaces. I write clean HTML, CSS, and
                  JavaScript, and work with modern libraries like React for
                  dynamic UIs. My goal is to deliver fast, accessible, and
                  visually polished front-end experiences.
                </p>
              </div>
            </li>
            <li className="flex gap-3 py-4">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "white", fontSize: "20px", marginTop: "10px" }}
              />

              <div className="w-96">
                <h3 className="text-xl md:text-2xl mb-2 font-semibold leading-normal">
                  Backend Developer
                </h3>
                <p className="text-sm md:text-md leading-tight">
                  I'm currently exploring back-end development with Node.js and
                  Express. I'm focused on learning how to build secure and
                  scalable server-side applications.
                </p>
              </div>
            </li>
            <li className="flex gap-3 py-4">
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ color: "white", fontSize: "20px", marginTop: "10px" }}
              />

              <div className="w-96">
                <h3 className="text-xl mb-2 md:text-2xl font-semibold leading-normal">
                  Database Developer
                </h3>
                <p className="text-sm md:text-md leading-tight">
                  I’m learning to design and manage databases using MySQL and
                  MongoDB. My goal is to understand how to structure data
                  efficiently and handle real-world queries.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
