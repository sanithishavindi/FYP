import React from 'react'

import doc from '../Components/Assests/doc.png';


function Doctor() {
  return (
    
    <div>
         
        <div className='Doctor mt-32'>
        <h1 className='font-normal hover:font-bold text-3xl my-5'>Doctor Details</h1>
        </div>
       <div className='mx-80 my-10 grid grid-cols-4 gap-x-64'>

       <div className=' size-24'>
          <img src={doc} alt=""/>
          
        </div>
        
        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64  ">
          <p className="mb-4 text-gray-700 whitespace-break-spaces">
            Name:Dr.Prasanna.<br></br>
            Description:
            </p>
          </div>

          <div className=' size-24'>
          <img src={doc} alt=""/>
          
        </div>
        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64  ">
          <p className="mb-4 text-gray-700">Name:Dr.Prasanna.<br></br>
          Description:</p>
          </div>
        
        <div className=' size-24'>
          <img src={doc} alt=""/>
          
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64  ">
          <p className="mb-4 text-gray-700">
          Name:Dr.Bandara.<br></br>
          Description:
          </p>
          </div>

          <div className=' size-24'>
          <img src={doc} alt=""/>
          
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64 mr-80 ">
          <p className="mb-4 text-gray-700">Dr.Bandara.<br></br>
          Description:
          </p>
          </div>

          

          <div className=' size-24'>
          <img src={doc} alt=""/>
          
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64 mr-80 ">
          <p className="mb-4 text-gray-700">Name:Dr.Bandara.<br></br>
          Description:</p>
          </div>

          <div className=' size-24'>
          <img src={doc} alt=""/>
          
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64 mr-80 ">
          <p className="mb-4 text-gray-700">Name:Dr.Bandara.<br></br>
          Description:</p>
          </div>
         
       </div>
        
    </div>
  )
}

export default Doctor;