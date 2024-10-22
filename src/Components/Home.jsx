import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Page1 from './Page1';

import {useNavigate} from 'react-router-dom';

const Home = () => {
  const [moveText, setMoveText] = useState(false);
  

  useEffect(() => {
    // Trigger the animation when the component mounts
    setMoveText(true);
    



   
  }, []);
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/menu'); // Redirect to Menu page
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(https://images.pexels.com/photos/28967155/pexels-photo-28967155/free-photo-of-scenic-forest-bridge-in-jeju-island.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1, // Ensures the background is behind the text
        }}
      />
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full text-white">
        <div>
          <h1
            className={`text-8xl font-bold transform transition-transform duration-1000 ease-out ${
              moveText ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            Welcome,
          </h1>
        </div>
        <div>
          <h1
            className={`text-8xl font-bold transform transition-transform duration-1000 ease-out ${
              moveText ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            This is a website where you gain some knowledge about trees.
          </h1>
        </div>
        <div>
          <h1
            className={`text-8xl font-bold transform transition-transform duration-1000 ease-out ${
              moveText ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            In this world there are many trees, It is impossible to give you knowledge of all the trees but some of them are absolutely listed. 
          </h1>
        </div>   

        <button onClick={handleButtonClick} className='bg-violet-600 h-12 w-20 rounded-xl '> Let's go</button>     
        
      </div>
      <Page1/>
    </div>
  );
};

export default Home;
