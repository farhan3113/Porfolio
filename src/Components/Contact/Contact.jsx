// import React from "react";

// const Contact = () => {
//   return (
    
//     <div className=" bg-gray-900 text-white p-8">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
//         {/* Left Side */}
//         <div className="md:w-1/2 mb-10 md:mb-0">
//           <h2 className="text-4xl font-bold mb-4">
//             <span className="text-purple-400">Let's </span>
//             <span className="text-orange-400">talk</span>
//           </h2>
//           <p className="mb-6 text-gray-300">
//             I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
//           </p>
//           <div className="space-y-4 text-sm">
//             <div className="flex items-center gap-2">
//               <span>📧</span> farhan02055v@gmail.com
//             </div>
//             <div className="flex items-center gap-2">
//               <span>📞</span> +7668–008–375
//             </div>
//             <div className="flex items-center gap-2">
//               <span>📍</span> UP, Uttar Pradesh
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="md:w-1/2 w-full space-y-4">
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="w-full p-3 bg-gray-800 rounded-md text-white focus:outline-none"
//           />
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full p-3 bg-gray-800 rounded-md text-white focus:outline-none"
//           />
//           <textarea
//             rows="5"
//             placeholder="Enter your message"
//             className="w-full p-3 bg-gray-800 rounded-md text-white focus:outline-none"
//           />
//          <button
//           className="mt-5 md:md-10 px-4 text-white py-2 text-sm md:text-lg  md:py-2 
//         md:px-4  hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
//         >

//           Submit Now
//         </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import gmailIcon from "../../assets/gmail.png"
import callIcon from "../../assets/phone-call.png"
import locationIcon from "../../assets/location.png"

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_uhpkh8m', 'template_33hqox3', form.current, 'gwXp01978YjAxv3Ni'   )
      .then(
        (result) => {
          console.log(result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please check your console.");
        }
      );
  };

  return (
    <div className="bg-gray-900 text-white p-8">
        <h1 className="text-center text-3xl  text-white font-bold">Get in touch</h1>
      <div className="max-w-6xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-start">
        {/* Left Side */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-purple-400">Let's </span>
            <span className="text-orange-400">talk</span>
          </h2>
          <p className="mb-6 text-gray-300">
            I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on.
          </p>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-2">
              <span><img className="w-5 " src={gmailIcon} alt="" /></span> farhan02055@gmail.com
            
            </div>
            <div className="flex items-center gap-2">
              <span><img className="w-5 " src={callIcon} alt="" /></span> +7668–008–375
             
            </div>
            <div className="flex items-center gap-2">
              <span><img className="w-5 " src={locationIcon} alt="" /></span> UP, Uttar Pradesh
            
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="md:w-1/2 w-full space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="w-full p-3 bg-gray-800 rounded-md text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="w-full p-3 bg-gray-800 rounded-md text-white focus:outline-none"
            required
          />
          {/* <input
            type="text"
            name="subject"
            placeholder="Enter your Subject"
            className="w-full p-3 bg-gray-800 rounded-md text-white focus:outline-none"
            required
          /> */}
          <textarea
            name="message"
            rows="5"
            placeholder="Enter your message"
            className="w-full p-3 bg-gray-800 rounded-md text-white focus:outline-none"
            required
          />
          <button
            type="submit"
            className="mt-5 px-4 text-white py-2 text-sm md:text-lg md:py-2 
            md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold 
            rounded-3xl bg-[#465697]"
          >
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
