import React from 'react';
import '../../App.css';

export default function Services() {

    return (
     <div>
          <div><h1>About</h1></div>
      <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
  
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                About
              </p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
              <div className='sm:text-right text-4xl font-bold'>
                <p>Hi. We are Instinct.</p>
              </div>
              <div>
                <p>Parkwise is a parking assist system</p>  
              </div>
            </div>
        </div>
      </div>
    </div>
    );

}
