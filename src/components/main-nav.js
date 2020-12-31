import React, { Component } from 'react';
import { Link } from 'gatsby';

class MainNav extends Component {
  render() {
    const { activeClass, linkColor, hasCTA = false } = this.props;
    const linkClass = `${linkColor || ''} link hover:underline py-4 block w-full sm:inline-block`
    return (
      <ul className="list-reset sm:flex justify-between">
        {pages && pages.map(page => {
          return (
            <li className="flex text-center items-center sm:ml-4" key={page.url}>
              <Link
                to={page.url}
                activeClassName={activeClass}
                className={linkClass}
              >{page.text}</Link>
            </li>
          )
        })}
        {hasCTA && (
          <li className="flex text-center items-center sm:ml-4">
            <Link
                to="/book-consultation"
                activeClassName={activeClass}
                className="button button--small mx-auto mt-4 md:mt-0"
              >Book Consultation</Link>
          </li>
        )}
      </ul>
    );
  }
}

const pages = [

  // {
  //   url: '/work',
  //   text: 'Work'
  // },
  {
    url: '/services',
    text: 'Services'
  },
  {
    url: '/about',
    text: 'About'
  },
  {
    url: '/contact',
    text: 'Contact'
  }
];

export default MainNav;
