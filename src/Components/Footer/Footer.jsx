import React from 'react';
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
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target="_blank" rel="noopener noreferrer" className="flex gap-1 hover:text-gray-300">
                       <img className="w-[18px] h-[18px] mt-1 " src={linkedinicon} alt="" />

            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
