import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.PNG';
import ContactUs from './components/ContactUsform';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import MaterialContactform from './components/MaterialContactform';
import Link from 'next/link';
import Typed from "react-typed";


import { Row, Col, Button } from 'reactstrap';

const ROLES = [
  'Families',
  'Nonprofit Organizations',
  'Savers on a Budget',
  'Environmental Enthusiasts',
  'Students and Young Adults',
  'Low to Moderate-Income Earners',
  'Entrepreneurs and Small Business Owners',
  'Retirees and Seniors',
  'Community Members',
  'Philanthropic Individuals',
  'Nature and Conservation Enthusiasts:',
  'Disability',
  'Local Initiatives and Startups',
];


export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };

  const companyTitle = {
    textAlign: 'center',
    fontFamily: 'avenir',
  };

  const copy = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'avenir',
  };
  return (
    <Container>
      <Row>
  
        <Col
          md="7" lg="7" sm="12"
          className="hero-welcome-wrapper d-flex align-items-center justify-content-start"
        >
          <div className="hero-welcome-main">
            <div className="hero-welcome-text">
              <h2 className="display-4 callout">Achieve <span className="callouttext">Savings Goals</span> With Community</h2>
              <h6 className="display-6 text-black"></h6>
              <p className="lead text-black font-weight-light">
                {' '}
                <span>
                  "Susus" thrive on the power of community. Friends, family
                  members, and like-minded individuals come together,
                  contributing money regularly. Here's the magic: Each member
                  takes turns receiving the entire pooled amount. It's a simple
                  yet effective way to save and provide mutual financial support
                  within your social network.
                  <br></br>
                  <br></br>
                  <Typed
                    loop
                    strings={ROLES}
                    typeSpeed={50}
                    backSpeed={80}
                    backDelay={3000}
                    loopCout={0}
                    showCursor
                    className="self-typed"
                    cursorChar="|"
                  ></Typed>{' '}
                </span>
                <br></br>
                {/* <span className="h3">
                  Fostering Community Cohesion through Local Savings
                </span> */}
              </p>
            </div>
            <br></br>
            <Link href="/info">
            <Button style={{backgroundColor: "#fff", color:"#02CD08", fontFamily:"avenir"}} size="lg">
              Learn More
            </Button>{' '}
            </Link>
        
            <div className="hero-welcome-bio">
              <p className="mb-2 text-white">
                * *only availible to downlad via chrome browser
              </p>
              {/* <div className="socialIcons">
                    <p>Follow Us</p>
                    <SocialIcon
                      url="https://www.facebook.com/Marin-County-Cooperation-Teams-110632247349694/"
                      network="facebook"
                      bgColor="#438DCD"
                    />
                    <SocialIcon
                      url="https://instagram.com/marincountycooperationteam?igshid=1aqmiwepeowdr"
                      network="instagram"
                      bgColor="#438DCD"
                    />
                  </div> */}
            </div>
          </div>
        </Col>

        <Col
          md="5"
          sm="12"
          xs="12"
          className="hero-welcome-wrapper d-flex justify-content-end"
        >
          <img
            style={{ height: '500px', width: '275px' }}
            src="/images/device.png"
          />
        </Col>
      </Row>
    </Container>
  );
}
