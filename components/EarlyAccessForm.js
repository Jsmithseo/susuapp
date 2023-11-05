import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Textarea,
} from 'reactstrap';

const EarlyAccessForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Form submitted:`, formData);

    const response = await fetch('./api/sendMailVolunteer', {
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
      phone: '',
      interest: '',
      description: '',
    });
  };

  const MainStyles = {
    padding: '10px 20px 20px 20px',
  };

  return (
    <div style={MainStyles}>
      <Container>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="name">Name:</Label>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label for="phone">Phone:</Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="interest">Interest in Saving:</Label>
            <Input
              type="text"
              name="interest"
              id="interest"
              placeholder="E.g., Bills, Loans, Vacation, Community Project"
              value={formData.interest}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">Comments</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Share a comment"
              value={formData.description}
              onChange={handleChange}
            />
          </FormGroup>
          <Button type="submit" color="primary">
            Sign Up
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default EarlyAccessForm;
