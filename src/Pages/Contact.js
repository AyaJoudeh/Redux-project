import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Input from '../Components/Form/Input';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { selectIsDarkMode } from '../Components/Redux/themeSelectors';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'react-bootstrap';

const Contact = ({ isDarkMode }) => {
 
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    title: Yup.string().required("Question Title is required"),
    request: Yup.string().required("Your Question is required"),
    username: Yup.string().required("Username is required"),
  });
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
 
    console.log('done');
  };




  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Container className={`pt-5 mt-5 border rounded  ${isDarkMode ? 'bg-black ' : 'bg-white '}`}>
        <h3 className={`mb-5 ${isDarkMode ? 'text-white' : ''}`}> Contact Us </h3>
        <Row>
  <Col>
    <Input
      label="Email"
      name="email"
      type="text"
      placeholder="ex@ex.com"
      className={`border rounded ${isDarkMode ? 'text-white' : ''}`}
      register={register}
    />
    {errors.email && <p className="bg-danger fs-5 mt-3 fw-bold">{errors.email.message}</p>}
  </Col>
</Row>
<Row>
  <Col>
    <Input
      label="Question Title"
      name="title"
      type="text"
      placeholder="Ahmad Mohammad"
      className={`border rounded ${isDarkMode ? 'text-white' : ''}`}
      register={register}
    />
    {errors.title && <p className="bg-danger fs-5 mt-3 fw-bold">{errors.title.message}</p>}
  </Col>
</Row>
<Row>
  <Col>
    <Input
      label="Your Question"
      name="request"
      type="textarea"
      placeholder="Et nisi deserunt..."
      className={`border rounded ${isDarkMode ? 'text-white' : ''}`}
      register={register}
    />
    {errors.request && <p className="bg-danger fs-5 mt-3 fw-bold">{errors.request.message}</p>}
  </Col>
</Row>
<Row>
  <Col>
  <Col md={2}>      <button  className='btn btn-success m-3'  onClick={onSubmit} >Send Request</button></Col>
  </Col>
</Row>
      </Container>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isDarkMode: selectIsDarkMode(state),
  };
};

export default connect(mapStateToProps)(Contact);
