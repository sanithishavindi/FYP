import React from 'react'
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// import DengueFever from './DengueFever';
import { Link } from 'react-router-dom';

const Specialization = () => {
  // const specializations = [
  //   { title: 'Dengue Fever', description: 'Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people. It is more common in tropical and subtropical climates.' },
  //   { title: 'Cardiac Arrest', description: 'Cardiac arrest is a sudden loss of heart function, leading to a stop in blood flow to the rest of the body.' },
  //   // Add more specializations as needed
  // ];

  return (
    <div>
      <div className='Specialization'>
        <h1>Specialization</h1>
        </div>
        <div className="mx-80 grid grid-cols-4 gap-x-64">
          
            {/* <div>
            <h3 className="mb-2 text-lg font-semibold">Dengue Fever</h3>
      <p className="mb-4 text-gray-700">Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people. It is more common in tropical and subtropical climates.</p>
      <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
        View Resources
      </button>
            </div> */}
          <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64">
          <h3 className="mb-2 text-lg font-semibold">Dengue Fever</h3>
      <p className="mb-4 text-gray-700">Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people. It is more common in tropical and subtropical climates.</p>
      <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
        <Link to="/DengueFever">View Resources</Link>
      </button>
          </div>
          
      <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64">
        <h3 className="mb-2 text-lg font-semibold">Cardiac Arrest</h3>
        <p className="mb-4 text-gray-700">Cardiac arrest occurs when the heart suddenly and unexpectedly stops pumping.If this happens, blood stops flowing to the brain. </p>
        <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
        <Link to="/CardiacArrest">View Resources</Link>
        </button>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64">
          <h3 className="mb-2 text-lg font-semibold">Dengue Fever</h3>
      <p className="mb-4 text-gray-700">Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people. It is more common in tropical and subtropical climates.</p>
      <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
        View Resources
      </button>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64">
          <h3 className="mb-2 text-lg font-semibold">Dengue Fever</h3>
          <p className="mb-4 text-gray-700">Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people. It is more common in tropical and subtropical climates.</p>
          <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
        View Resources
         </button>
         </div>

         <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64">
          <h3 className="mb-2 text-lg font-semibold">Dengue Fever</h3>
      <p className="mb-4 text-gray-700">Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people. It is more common in tropical and subtropical climates.</p>
      <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
        View Resources
      </button>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64">
          <h3 className="mb-2 text-lg font-semibold">Dengue Fever</h3>
      <p className="mb-4 text-gray-700">Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people. It is more common in tropical and subtropical climates.</p>
      <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
        View Resources
      </button>
          </div>
      
          <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64">
          <h3 className="mb-2 text-lg font-semibold">Dengue Fever</h3>
      <p className="mb-4 text-gray-700">Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people. It is more common in tropical and subtropical climates.</p>
      <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
        View Resources
      </button>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow-md text-center w-64">
          <h3 className="mb-2 text-lg font-semibold">Dengue Fever</h3>
      <p className="mb-4 text-gray-700">Dengue (break-bone fever) is a viral infection that spreads from mosquitoes to people. It is more common in tropical and subtropical climates.</p>
      <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700">
        View Resources
      </button>
          </div>
          
      
    </div>
    {/* <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-wrap gap-4">
        {specializations.map((spec, index) => (
          <Specialization key={index} title={spec.title} description={spec.description} />
        ))}
      </div>
    </div> */}
    {/* <div className='mx-80'>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        // sx={{ height: 140 }}
        // image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </div>
     */}
    </div>
    
  )
}

export default Specialization;
