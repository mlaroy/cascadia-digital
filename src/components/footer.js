import React from 'react'
// import { Link } from 'gatsby'
import Section from './section'
import MainNav from './main-nav';
import whitelogo from '../images/cascadia-logo-5-white.svg'

const Footer = ({ siteTitle }) => (
  <footer className="footer bg-black text-white">
    <Section className="flex items-center justify-between flex-col md:flex-row">
      <img src={whitelogo} width="150" alt="" />
      <div className="footer-nav text-center">
        <MainNav linkColor="text-white" />
        <a href="#" className="link text-white text-sm">Terms &amp; Privacy Policy</a>
      </div>
      &copy; {getYear()} {siteTitle}
    </Section>
  </footer>
)

const getYear = () => {
  return new Date().getFullYear();
}
export default Footer
