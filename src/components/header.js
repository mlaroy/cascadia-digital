import React, { Component } from 'react'
import { Link } from 'gatsby'
import MainNav from './main-nav';
import cascadiaSVG from '../images/cascadia-logo-5.svg'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      isOpen: false
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleViewPort = this.toggleViewPort.bind(this);
  }

  componentDidMount() {
    const mediaQuery = window.matchMedia('(min-width: 576px)')
    mediaQuery.addListener(this.toggleViewPort);
    this.toggleViewPort(mediaQuery);
  }

  toggleViewPort(e) {
    if (e.matches) {
      this.setState({
        view: 'desktop',
        isOpen: true,
        pageYoffset: 0
      })
    } else {
      this.setState({
        view: 'mobile',
        isOpen: false
      })
    }
  }

  toggleMenu() {
    let offset;
    if( !this.state.isOpen ){
      offset = document.documentElement.scrollTop;
      console.log(offset);
      document.body.classList.add('nav-open');
    }else{
      document.body.classList.remove('nav-open');
      document.documentElement.scrollTop = this.state.pageYoffset;
      offset = 0;
    }
    this.setState({
      isOpen: !this.state.isOpen,
      pageYoffset: offset
    });
  }

  render() {
    const { isOpen, view } = this.state;
    const { siteTitle } = this.props;
    return (
      <div className="header w-full bg-white shadow sticky pin-t pin-r pin-l">
        <div className="md:mx-auto md:w-5/6  p-4 flex justify-between">
          <Link
            to="#main-content"
            className="skip-link"
          >
            Skip to content
          </Link>
          <Link
            to="/"
            className="no-underline"
          >
            <img src={cascadiaSVG} width="150" alt="Cascadia Digial" className="header-logo block"/>
            <span className="hidden">
              {siteTitle}
            </span>
          </Link>
          <button
            onClick={this.toggleMenu} className="sm:hidden font-sans text-sm"
            id="main-nav-toggle"
            >
            &#9776;
            Menu
            </button>
          <nav
            className={isOpen ? 'main-nav js-is-open sm:flex': 'main-nav'}
            aria-hidden={isOpen ? 'false' : 'true'}
          >
            {view === 'mobile' && isOpen && (
              <button onClick={this.toggleMenu} className="nav-toggle">&times;</button>
            )}
            <MainNav activeClass="is-active" />
          </nav>
        </div>
      </div>
    )
  }
}

const pages = [
  {
    url: '/about',
    text: 'About'
  },
  {
    url: '/work',
    text: 'Work'
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
