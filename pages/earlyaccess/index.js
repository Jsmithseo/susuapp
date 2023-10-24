import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';
// import EarlyAccessForm from '../components/EarlyAccessForm';

const MainStyle = {
  overflowX: 'hidden',
};

const copyStyle = {
  fontSize: '22px',
  fontFamily: 'avenir',
  textAlign: 'center',
};

export default function EarlyAccess() {
  return (
    <div style={MainStyle}>
      <Container>
        <div className="bio-content">
          <h1>Unlock Early Access to Our Beta App</h1>
          <i>
            <p>
              You're about to gain an exclusive opportunity to be among the
              first to experience our cutting-edge beta app. Early access is
              your chance to get a sneak peek into the future of our product,
              and here's why it's so exciting:
            </p>
          </i>
          <ol>
            <li>
              <b>Be a Trailblazer:</b> As an early access user, you become a
              pioneer, helping shape the app's development by providing valuable
              feedback. Your input directly influences the final product.
            </li>
            <li>
              <b>First Look:</b> Get a head start on the app's features and
              capabilities. You'll be among the select few to explore what it
              has to offer before it's released to the general public.
            </li>
            <li>
              <b>Direct Influence:</b> Your feedback will be heard and
              considered in the ongoing development process. Your insights can
              lead to improvements and enhancements based on real-world usage.
            </li>
            <li>
              <b>Exclusive Updates: </b> Enjoy early updates, bug fixes, and new
              features as they're rolled out during the beta phase. You won't
              have to wait for the official release to benefit from
              improvements.
            </li>
            <li>
              <b>Personalized Support: </b>You'll receive priority support,
              ensuring any questions or issues you have are addressed promptly
              by our dedicated team.
            </li>
          </ol>

          <h3>How to Get Early Access: </h3>
          <p>
            We'll send you an email to help you get started on your journey to
            early access. To become an early access user and unlock the future
            of our app, simply complete the provided form. We'll walk you
            through the process, allowing you to dive into the app's potential
            and actively contribute to its development.
          </p>
        </div>

        {/* <EarlyAccessForm /> */}
      </Container>
    </div>
  );
}
