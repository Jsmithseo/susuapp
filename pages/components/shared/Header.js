import React, { useState } from 'react';
import Link from 'next/link';
// import { isAuthorized } from "@/utils/auth0";
import ReactResizeDetector from 'react-resize-detector';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const BsNavLink = (props) => {
  const { href, title, className = '' } = props;
  return (
    <Link legacyBehavior href={href}>
      <a className={`nav-link port-navbar-link ${className}`}>{title}</a>
    </Link>
  );
};

const BsNavBrand = () => (
  <Link legacyBehavior href="/">
    <a className="navbar-brand port-navbar-brand">Here</a>
  </Link>
);

const LoginLink = () => (
  <a className="nav-link port-navbar-link" href="/api/v1/login">
    Login | Sign up
  </a>
);

const LogoutLink = () => (
  <a className="nav-link port-navbar-link" href="/api/v1/logout">
    Logout
  </a>
);

const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="container">
      <BsNavBrand />
      <Dropdown
        className="port-navbar-link port-dropdown-menu"
        nav
        isOpen={isOpen}
        toggle={() => setIsOpen(!isOpen)}
      >
        <DropdownToggle className="port-dropdown-toggle" nav caret>
          Admin
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem>
            <BsNavLink
              legacyBehavior
              className="port-dropdown-item"
              href="/portfolios"
              title="View Portfolios"
            />
          </DropdownItem>
          <DropdownItem>
            <BsNavLink
              legacyBehavior
              className="port-dropdown-item"
              href="/portfolios/new"
              title="Create Portfolio"
            />
          </DropdownItem>
          <DropdownItem>
            <BsNavLink
              legacyBehavior
              className="port-dropdown-item"
              href="/blogs/editor"
              title="Draft Blog"
            />
          </DropdownItem>
          {/* <DropdownItem>
          <BsNavLink
            className="port-dropdown-item"
            href="/dashboard"
            title="Dashboard"
          />
        </DropdownItem> */}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuOpenClass = isOpen ? 'menu-open' : 'menu-close';

  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <Navbar
          className={`port-navbar port-default ${className}  ${
            width < 768 && isOpen ? 'is-open' : 'is-close'
          } ${menuOpenClass}`}
          dark
          expand="md"
        >
           
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
          <img
              style={{ height: '50px', width: '50px' }}
              src="/images/logo.png"
              onError={e => { e.currentTarget.src = "/images/logo.png"; }}
            />
            <Nav className="mr-auto" navbar>
           
              <NavItem className="port-navbar-item d-flex justify-content-end">
          
                <BsNavLink
                  legacyBehavior
                  href="/contact"
                  title="contact support"
                />
              </NavItem>
              {/* <NavItem className="port-navbar-item">
              <BsNavLink href="/secret" title="Secret"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/secretssr" title="SecretSSR"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadmin" title="Admin"/>
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink href="/onlyadminssr" title="AdminSSR"/>
            </NavItem> */}
            </Nav>
            <Nav navbar>
              {!loading && (
                <>
                  {user && (
                    <>
                      {isAuthorized(user, 'admin') && <AdminMenu />}
                      <NavItem className="port-navbar-item">
                        <LogoutLink />
                      </NavItem>
                    </>
                  )}
                  {!user && (
                    <NavItem className="port-navbar-item">
                      <LoginLink />
                    </NavItem>
                  )}
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </ReactResizeDetector>
  );
};

export default Header;
