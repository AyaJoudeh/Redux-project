import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectIsDarkMode } from '../Components/Redux/themeSelectors';

const Home = ({ isDarkMode }) => {
    

  return (
<div className={`d-flex flex-column align-items-center justify-content-center text-center m-5 ${isDarkMode ? 'text-white' : ''}`}>

<h1 className='fw-bold mt-5'>Welcome Everyone</h1>
<h3 className='fw-bold mt-3'>Discover & Share the World's Inspiration with SpotLight</h3>
<p className='fs-4 fw-normal mt-3'>Millions of ideas and no credit card needed</p>
<Button className='mt-4 p-3 border rounded-xl border-2 cr-pointer' variant='success' as={Link} to="/about">
  Get Started
</Button>
</div>

  );
};

const mapStateToProps = (state) => {
  return {
    isDarkMode: selectIsDarkMode(state),
  };
};

export default connect(mapStateToProps)(Home);
