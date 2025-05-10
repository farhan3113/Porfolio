
import React from 'react';
import htmlicon from "../../assets/html-5.png";
import cssicon from "../../assets/css-3.png";
import reacticon from "../../assets/atom.png";
import jsicon from "../../assets/js.png";
import figmaicon from "../../assets/figma.png";
import nodeJsicon from "../../assets/programing.png";
import mysqlicon from "../../assets/mysql.png";
import sofyrusicon from "../../assets/sofyrus-icon.jpeg";


const Experience = () => {
  return (
     <div id='Experience' className="p-10 md:p-24   ">

         <h2 className="text-2xl md:text-3xl text-center text-white font-bold">Experience</h2>
         <div className="md:flex flex-wrap  justify-around items-center">
          <div className='flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10'>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <img src={htmlicon} className='w-[35px] h-[35px]' alt="" />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <img src={cssicon} className='w-[35px] h-[35px]' alt="" />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <img src={reacticon} className='w-[35px] h-[35px]' alt="" />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <img src={jsicon} className='w-[35px] h-[35px]' alt="" />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <img src={figmaicon} className='w-[35px] h-[35px]' alt="" />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <img src={nodeJsicon} className='w-[35px] h-[35px]' alt="" />
        </span>
        <span className='p-3 bg-zinc-950 flex items-center rounded-2xl'>
        <img src={mysqlicon} className='w-[35px] h-[35px]' alt="" />
        </span>
          </div>
          <div className=' flex gap-10 bg-black/45 mt-4 rounded-lg p-4 items-center '>
          <img src={sofyrusicon}  className='w-[50px] rounded-2xl h-[50px]' alt="" />
          <span className='text-white'>
            <h2 className='leading-tight'>software engineer,Sofyrus Tecnologies</h2>
            <p className=' text-sm leading-tight font-thin'>March 2024 - present</p>
            <ul className=' text-sm p-2'>
              <li>- Work as software developer</li>
              <li>- junior Web developer</li>
            </ul>
          </span>
          </div>
         </div>
       </div>
  )
}

export default Experience
