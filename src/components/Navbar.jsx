import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate()

  function handleSpanClick(){
    navigate('/')
  }
  return (
    <nav className="bg-gray-100 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-blue-600 text-white rounded-full p-2 mr-2">
          <i className="fi fi-rr-network"></i>
        </div>
        <span onClick={handleSpanClick} className="font-bold text-lg hover:cursor-pointer">
          DEEP <span className="text-blue-600">THOUGHT</span>
        
        </span>
      </div>
      <div className='flex gap-4 text-xl '>
      <i className="bg-blue-600 text-white rounded-full flex justify-center items-center w-[34px] h-[34px] fi fi-bs-house-chimney"></i>
      <i class=" bg-blue-600 text-white rounded-full flex justify-center items-center w-[34px] h-[34px] fi fi-tr-binoculars"></i>
      <i class="bg-blue-600 text-white rounded-full flex justify-center items-center w-[34px] h-[34px] fi fi-rr-bulb"></i>
      <i class="bg-blue-600 text-white rounded-full flex justify-center items-center w-[34px] h-[34px] fi fi-rr-settings"></i>
      <i class="bg-blue-600 text-white rounded-full flex justify-center items-center w-[34px] h-[34px] fi fi-rs-bell"></i>
      <i class="bg-blue-600 text-white rounded-full flex justify-center items-center w-[34px] h-[34px] fi fi-rr-menu-dots-vertical"></i>
      </div>

    </nav>
  );
}

export default Navbar;