import React, { Component } from 'react';
import { Link } from 'gatsby'

class MainNav extends Component {
  render() {
    const { activeClass, linkColor } = this.props;
    const linkClass = `${linkColor || ''} link hover:underline py-4 block w-full sm:inline-block`
    return (
      <ul className="list-reset sm:flex justify-between">
        {pages && pages.map(page => {
          return (
            <li className="flex text-center items-center ml-4" key={page.url}>
              <Link
                to={page.url}
                activeClassName={activeClass}
                className={linkClass}
              >{page.text}</Link>
            </li>
          )
        })}
      </ul>
    );
  }
}

const pages = [
  {
    url: '/about',
    text: 'About'
  },
  // {
  //   url: '/work',
  //   text: 'Work'
  // },
  {
    url: '/services',
    text: 'Services'
  },
  {
    url: '/contact',
    text: 'Contact'
  }
];

export default MainNav;