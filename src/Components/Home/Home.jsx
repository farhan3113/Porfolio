import React from "react";
import img from "../../assets/img-2.jpeg";
import TextChanger from "../TextChanger";

const Home = () => {
  return (
    <div className="text-white md:flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-2xl md:text-5xl font-bold leading-normal tracking-tighter">
          {" "}
          {/* hello' I am Farhan Ahmad */}
          <TextChanger/>
        </h1>
        <p className="text-sm md:text-lg leading-relaxed tracking-tight">
          I'm a dedicated Web Developer with a BCA degree and strong proficiency
          in JavaScript. I specialize in building responsive and dynamic
          websites with clean, efficient code. Currently focused on full-stack
          development and hands-on project experience to enhance my skillset.
        </p>
        <button
          className="mt-5 md:md-10 px-4 text-white py-2 text-sm md:text-lg  md:py-2 
        md:px-4  hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
      </div>
      <div className="">
        <img src={img} className=" w-[449px]  mt-5" alt="" />
      </div>
    </div>
  );
};

export default Home;
