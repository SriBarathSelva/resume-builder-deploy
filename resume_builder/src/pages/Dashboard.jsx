import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import image from './backgrd.jpeg';
import image2 from '../assets/avatar.jpeg';
import image3 from '../assets/resume1.jpeg';
import image4 from '../assets/resume2.jpeg';
import image5 from '../assets/hi.jpeg';

const Dashboard = () => {
  return (
    <div>
      <div className='headerdash'>
        <div className='logo'>
          <img src={image} alt="" width="50px" height="30px" />
          <h1 className='logoname'>Resume Builder</h1>
        </div>
        <div className='acc'>
          <img className='imagee' src={image2} alt="" width="50px" height="50px" />
          <Link className='forg' style={{ textDecoration: 'none' }} to='/forgotpass'>Account</Link>
        </div>
      </div>
      <h2 className='seltemp'>Select your favorite template!</h2>
      <div className='imgg'>
        <Link to='/resume1?template=template1'><img className='iii' src={image3} alt='template1' /></Link>
        <Link to='/resume1?template=template2'><img className='iii' src={image4} alt='template2' /></Link>
        <Link to='/resume1?template=template3'><img className='iii' src={image5} alt='template3' /></Link>
      </div>
    </div>
  );
};

export default Dashboard;
