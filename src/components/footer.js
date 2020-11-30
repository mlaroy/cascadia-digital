import React from 'react'
import { Link } from 'gatsby'
import Section from './section'
import MainNav from './main-nav';
import whitelogo from '../images/cascadia-logo-5-white.svg'
import NewsletterForm from '../components/newsletterForm';

const Footer = ({ siteTitle }) => (
  <footer className="footer bg-jp-indigo text-white">
    <Section>
      <div className="flex items-center md:items-start justify-between flex-col md:flex-row mb-16">
        <div>
          <img src={whitelogo} width="150" alt="" className="mb-16"/>

          <NewsletterForm
            url="1774006"
            buttonText="Subscribe"
            flex="true">
            <h4 className="text-2xl mt-2 mb-2 text-white">Subscribe to my mailing list</h4>
          </NewsletterForm>
        </div>
        <div className="footer-nav text-center md:text-right">
          <MainNav linkColor="text-white" />
          <h3 className="text-white text-md md:justify-end mt-8">Follow</h3>
          <div className="flex justify-center md:justify-end">
            <a href="https://twitter.com/digitalcascadia" className="link text-white text-sm block">Twitter</a>
            <a href="https://instagram.com/cascadiadigital" className="link text-white text-sm block ml-4">Instagram</a>
            <a href="https://www.linkedin.com/company/cascadia-digital/" className="link text-white text-sm block ml-4">LinkedIn</a>
          </div>
          {/* <a href="#" className="link text-white text-sm">Terms &amp; Privacy Policy</a> */}
        </div>
      </div>
      <p className="text-sm text-center md:text-right mb-2">
        <Link to="/privacy-terms"
            className="link text-white text-sm"
          >Privacy &amp; Terms</Link>
      </p>
      <p className="text-sm text-center md:text-right">&copy; {getYear()} {siteTitle}</p>
    </Section>
  </footer>
)

const getYear = () => {
  return new Date().getFullYear();
}
export default Footer
