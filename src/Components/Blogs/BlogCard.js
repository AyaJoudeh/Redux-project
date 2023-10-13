import React from 'react';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { selectIsDarkMode } from '../Redux/themeSelectors';

const BlogCard = (props) => {
  const { source, author, title, description, isDarkMode } = props;

  // Add a class for white text color when isDarkMode is true


  return (
    <Card style={{ width: '18rem', minHeight: '18rem', maxHeight: '18rem' }} className={`m-3 ${isDarkMode ? 'bg-black' : ''}`}>
      <Card.Body>
        <Card.Title className={`mb-4 ${isDarkMode ? 'text-white' : ''}`}>{title}</Card.Title>
        <Card.Subtitle className={`mb-2 text-muted ${isDarkMode ? 'text-white' : ''}`}></Card.Subtitle>
        <Card.Text className={`${isDarkMode ? 'text-white' : ''}`}>{description}</Card.Text>
        <Card.Link className={`${isDarkMode ? 'text-white' : ''}`} href="#">
          {source}
        </Card.Link>
        <Card.Link className={`${isDarkMode ? 'text-white' : ''}`} href="#">
          {author}
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkMode: selectIsDarkMode(state),
  };
};

export default connect(mapStateToProps)(BlogCard);
