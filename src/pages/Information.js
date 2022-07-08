import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FormGroup, Label, Col, Button } from 'reactstrap';
import { validateInfoForm } from '../utils/validateInfoForm';


const handleSubmit = (values, { resetForm }) => {
  console.log('form values:', values);
  console.log('in JSON format:', JSON.stringify(values));
  resetForm();
};

const Information = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        phoneNum: '',
        email: '',
        inquiry: '',
      }}
      onSubmit={handleSubmit}
      validate={validateInfoForm}
    >
      <section className='section-info border-bottom'>
        <div className='container'>
          <h3 className='font-weight-bold display-6 text-center'>
            Request Information
          </h3>
          <div className='card shadow booking-form'>
            <Form className="form-group">
              <FormGroup row>
                <Label htmlFor='firstName' md='2'>
                  First Name
                </Label>
                <Col md='10'>
                  <Field
                    name='firstName'
                    placeholder='First Name'
                    className='form-control' />
                  <ErrorMessage name='firstName'>
                    {(msg) => <p className='text-danger'>{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='lastName' md='2'>
                  Last Name
                </Label>
                <Col md='10'>
                  <Field
                    name='lastName'
                    placeholder='Last Name'
                    className='form-control' />
                  <ErrorMessage name='lastName'>
                    {(msg) => <p className='text-danger'>{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='phoneNum' md='2'>
                  Phone
                </Label>
                <Col md='10'>
                  <Field
                    name='phoneNum'
                    placeholder='Phone'
                    className='form-control' />
                  <ErrorMessage name='phoneNum'>
                    {(msg) => <p className='text-danger'>{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='email' md='2'>
                  Email
                </Label>
                <Col md='10'>
                  <Field
                    name='email'
                    placeholder='Email'
                    className='form-control' />
                  <ErrorMessage name='email'>
                    {(msg) => <p className='text-danger'>{msg}</p>}
                  </ErrorMessage>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label htmlFor='inquiry' md='2'>
                  Inquiry Message
                </Label>
                <Col md='10'>
                  <Field
                    name='inquiry'
                    as='textarea'
                    rows='12'
                    className='form-control'
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 12, offset: 2 }}>
                  <Button type='submit' color='info'>
                    Send Inquiry
                  </Button>
                  <Link to='/Booking'>
                    <button type='submit' color='info' className='btn btn-success ml-1'>
                      Book Now!
                    </button>
                  </Link>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </section>
    </Formik>
  );
};

export default Information;
