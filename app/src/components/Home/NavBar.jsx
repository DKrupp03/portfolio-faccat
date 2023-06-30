'use client';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import '../../styles/NavBar.css';

export default function NavBar () {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  
  const links = [
    { name: 'home' },
    { name: 'skills' },
    { name: 'projects' }
  ]

  const icons = [
    { name: 'instagram', icon: FaInstagram, link: 'https://www.instagram.com/diogo.kruppe/' },
    { name: 'github', icon: FaGithub, link: 'https://github.com/DKrupp03' },
    { name: 'linkedin', icon: FaLinkedin, link: 'https://www.linkedin.com/in/diogo-krupp-engelmann-b12a801bb/' }
  ]

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <div>
      <Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {
                links.map((link, index) => (
                  <Nav.Link
                    key={index}
                    alt={link.name}
                    href={`#${link.name}`}
                    className={activeLink === link.name ? 'active navbar-link' : 'navbar-link'}
                    onClick={() => onUpdateActiveLink(link.name)}
                  >
                    { link.name }
                  </Nav.Link>
                ))
              }
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {
                  icons.map((link, index) => (
                    <a key={index} href={link.link} alt={link.name} target='_blank'>
                      { link.icon && React.createElement(link.icon) }
                    </a>
                  ))
                }
              </div>
              <button className="vvd" href=''>
                <span>Let’s Connect</span>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
