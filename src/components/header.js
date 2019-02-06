import React from 'react'
import { Link } from 'gatsby'

import CascadiaPng from '../images/cascadia_indigo.png'

const Header = ({ siteTitle }) => (
  <div className="header w-full bg-white sticky pin-t pin-r pin-l">
    <div className="md:mx-auto md:w-5/6 px-4 py-8 flex justify-between">
      <Link
        to="/"
        className="skip-link"
      >
        Skip to content
      </Link>
      <Link
        to="/"
        className="no-underline"
      >
        <img src={CascadiaPng} width="165" className="block" alt="Cascadia Digial" />
        <span className="hidden">
          {siteTitle}
        </span>
      </Link>
      <ul className="list-reset flex justify-between">
        {pages && pages.map(page => {
          return (
            <li className="flex items-center ml-4">
              <Link
                to={page.url}
                className="no-underline link hover:underline hover:text-terra-cotta"
              >{page.text}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

const pages = [
  {
    url: '/about',
    text: 'About'
  },
  {
    url: '/services',
    text: 'Services'
  },
  {
    url: '/contact',
    text: 'Contact'
  }
];

export default Header
