import React from 'react'
import { Link } from 'gatsby'
import Section from './section'

const Footer = ({ siteTitle }) => (
  <footer className="footer bg-grey-lightest text-white">
    <Section>
      <h1 className="text-cascadia-green m-auto">
        <Link
          to="/"
          className="text-cascadia-green no-underline"
        >
          <span className="hidden">
            {siteTitle}
          </span>
        </Link>
      </h1>
    </Section>
  </footer>
)

export default Footer
