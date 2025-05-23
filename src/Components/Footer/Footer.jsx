import React from 'react';
import gmailicon from "../../assets/gmail.png"
import githubicon from "../../assets/github.png"
import linkedinicon from "../../assets/linkedin.png"
const Footer = () => {
  return (
    <footer id='Contact' className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Farhan Ahmad</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com/farhan8375" target="_blank" rel="noopener noreferrer" className="flex gap-1 hover:text-gray-300">
                       <img className="w-[18px] h-[18px] mt-1 " src={githubicon} alt="" />

            GitHub
          </a>
          <a href="https://linkedin.com/in/farhanahmad85052a263" target="_blank" rel="noopener noreferrer" className="flex gap-1 hover:text-gray-300">
                       <img className="w-[18px] h-[18px] mt-1 " src={linkedinicon} alt="" />

            LinkedIn
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="flex gap-1 hover:text-gray-300">
            <img className="w-[18px] h-[18px] mt-1 " src={gmailicon} alt="" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
