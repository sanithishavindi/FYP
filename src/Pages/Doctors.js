import React from 'react'

import doc from '../Components/Assests/doc.png';


function Doctor() {
  return (
    
    <div>
         
        <div className='Doctor'>
        <h1 className='font-normal hover:font-bold text-xl'>Doctor Details</h1>
        </div>
       <div className='grid grid-cols-4 gap-x-64'>

       <div className='mx-80 size-24'>
          <img src={doc} alt=""/>
          
        </div>
        
        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64  ">
          <p className="mb-4 text-gray-700">Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people.</p>
          </div>

          <div className=' size-24'>
          <img src={doc} alt=""/>
          
        </div>
         
       </div>
        
    </div>
  )
}

export default Doctor;