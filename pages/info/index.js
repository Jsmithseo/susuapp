import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image';
import Link from 'next/link';

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
              <h2>What is a Susu Program?</h2>
              <p>
                A "Susu," known as a "Rotating Savings and Credit Association"
                (ROSCA) in some regions, is a traditional and widely practiced
                financial arrangement found in numerous cultures worldwide. It's
                a time-tested method for individuals, often with strong social
                bonds, to collectively save and provide mutual financial
                support.
              </p>
              <h3>How It Operates:</h3>
              <i>
                <p>
                  At the core of a Susu program is a sense of community and
                  collaboration. Here's how it works
                </p>
              </i>
              <ol>
                <li>
                  <b>Formation:</b> A group of individuals, whether friends,
                  family members, or community members, forms a Susu. This group
                  is typically small, but it can vary in size depending on the
                  participants' preferences.
                </li>
                <li>
                  <b>Regular Contributions:</b> Members of the Susu commit to
                  making regular contributions of money into a shared pool. The
                  contributions can be weekly, bi-weekly, monthly, or based on a
                  predetermined schedule.
                </li>
                <li>
                  <b>Rotation:</b> The uniqueness of a Susu lies in the rotation
                  process. At each rotation, one member from the group receives
                  the total pooled amount. This rotation continues until every
                  member has had their turn.
                </li>
                <li>
                  <b>Payout:</b>The member receiving the payout can use the
                  funds for various purposes, such as addressing financial
                  emergencies, investing, purchasing goods, starting a business,
                  or funding education. Importantly, they remain committed to
                  the Susu, continuing their regular contributions even after
                  receiving their payout.
                </li>
              </ol>
              <h2>Key Advantages:</h2>
              <i>
                <p>Participating in a Susu program offers several benefits:</p>
              </i>
              <ol>
                <li>
                  <b>Proven Effectiveness:</b>Susus have been successfully
                  practiced for generations in various cultures. Their enduring
                  popularity is a testament to their effectiveness.
                </li>
                <li>
                  <b>Community and Trust:</b> Susus strengthen social bonds,
                  foster trust among members, and create a sense of community.
                </li>
                <li>
                  <b>Interest-Free:</b> Unlike traditional banking systems,
                  Susus are typically interest-free. This means participants
                  don't have to worry about interest payments or charges.
                </li>
                <li>
                  <b>Flexible Goals:</b>Susus can be customized to meet
                  different financial goals, from short-term needs to long-term
                  investments.
                </li>
                <li>
                  <b>Financial Empowerment:</b>They empower individuals and
                  communities, providing a financial safety net for unexpected
                  expenses and opportunities.
                </li>
              </ol>
              <p>
                A Susu program is a simple yet powerful way to achieve financial
                goals while building and nurturing relationships within your
                community. It's a true embodiment of the principle that
                together, we can achieve more. Whether you're looking to
                strengthen your financial security, support your educational
                endeavors, or start a business, a Susu program can provide you
                with the means to make it happen, hand in hand with your trusted
                network.
              </p>
            </div>
          </Col>
          <Link href="#">
            <Col className="investorLink" md="12" lg="12">
              Become An Investor
            </Col>
          </Link>
        </Row>
      </Container>
    </div>
  );
}
