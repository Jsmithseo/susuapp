import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Form submitted:`, formData);

    const response = await fetch('./api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      console.log('Email sent successfully');
      window.location.href = '/thankyou';
    } else {
      console.error('Error sending email');
    }

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container>
      <br></br>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="name">Full Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input
            type="textarea"
            name="message"
            id="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      <br></br>
    </Container>
  );
};

export default ContactUs;
