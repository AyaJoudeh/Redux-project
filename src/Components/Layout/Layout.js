import React from 'react';
import { Layout as AntLayout, Menu } from 'antd';
import Navigation from './Navigation';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectIsDarkMode } from '../Redux/themeSelectors';

const Layout = ({ isDarkMode }) => {

  return (
    <div>
      <AntLayout style={{ minHeight: '100vh' }} >
        <Navigation />
        <AntLayout style={{ background: isDarkMode ? 'black' : '' }}>
          <div className="w-100 mt-4">
            <Outlet />
          </div>
        </AntLayout>
      </AntLayout>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkMode: selectIsDarkMode(state),
  };
};

export default connect(mapStateToProps)(Layout);
