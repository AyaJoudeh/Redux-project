import React from 'react';
import data from './About.json';
import { Container, Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { selectIsDarkMode } from '../Components/Redux/themeSelectors';

const About = ({ isDarkMode }) => {

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <Container className="my-5">
            <Row>
              {index % 2 === 0 ? (
                <>
                  <Col md={6}>
                    <Image src={item.imgUrl} alt={item.title} rounded className="img-fluid" />
                  </Col>
                  <Col md={6} className={`p-5 ${isDarkMode ? 'text-white' : ''}`}>
                    <h1>{item.title}</h1>
                    <p className={`fs-5 mt-3  ${isDarkMode ? 'text-white' : ''}`}>{item.description}</p>
                  </Col>
                </>
              ) : (
                <>
                  <Col md={6} className={`p-5 ${isDarkMode ? 'text-white' : ''}`}>
                    <h1>{item.title}</h1>
                    <p className={`fs-5 mt-3  ${isDarkMode ? 'text-white' : ''}`}>{item.description}</p>
                  </Col>
                  <Col md={6}>
                    <Image src={item.imgUrl} alt={item.title} rounded className="img-fluid" />
                  </Col>
                </>
              )}
            </Row>
          </Container>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkMode: selectIsDarkMode(state),
  };
};

export default connect(mapStateToProps)(About);
