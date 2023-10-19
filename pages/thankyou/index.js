import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function Thankyou() {
  return (
    <div style={MainStyle}>
      <Container>
        <Row>
          <Col md="12">
            {/* <center>
              <Image
                src={Logo}
                alt="Description of Image"
                width={300}
                height={300}
              />
            </center> */}
            <div className="bio-content">
              <div style={copyStyle}>
                Thanks for reaching out, Ill be in touch soon!
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
