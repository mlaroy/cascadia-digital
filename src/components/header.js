import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import MainNav from './main-nav';
import logo from '../images/cascadia-logo-5.svg'
import logoWhite from '../images/cascadia-logo-5-white.svg'

const Header = ({ siteTitle, full }) => {

  const [view, setView] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [pageYoffset, setPageYoffset] = useState(0);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 576px)')
    mediaQuery.addListener(toggleViewPort);
    toggleViewPort(mediaQuery);
  }, []);

  useEffect( () => {
    const height = document.querySelector('.header').offsetHeight;
    const onScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > height || false );
    };
    document.addEventListener('scroll', onScroll);

    return () => {
        document.removeEventListener('scroll', onScroll);
    }
  }, [scrollTop]);

  const toggleViewPort = (e) => {
    if (e.matches) {
      setView('desktop');
      setIsOpen(true);
      setPageYoffset(0)
    } else {
      setView('mobile');
      setIsOpen(false);
    }
  }

  const toggleMenu = () => {
    let offset;
    if( !isOpen ){
      offset = document.documentElement.scrollTop;
      console.log(offset);
      document.body.classList.add('nav-open');
    }else{
      document.body.classList.remove('nav-open');
      document.documentElement.scrollTop = pageYoffset;
      offset = 0;
    }
    setIsOpen(!isOpen);
    setPageYoffset(offset);
  }


  return (
    <div className={`header w-full ${full ? 'fixed' : 'sticky'} pin-t pin-r pin-l z-50 ${full && !scrolling ? '' : 'scrolled bg-white shadow'}`}>
      <div className="md:mx-auto p-4 flex justify-between container">
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
          <img src={!scrolling && full ? logoWhite : logo} width="150" alt="Cascadia Digial" className="header-logo block"/>
          <span className="hidden">
            {siteTitle}
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          className={`sm:hidden font-sans font-bold text-sm ${!scrolling && full ? 'text-white' : 'text-black'}`}
          id="main-nav-toggle"
          >
          &#9776;
          Menu
          </button>
        <nav
          className={`main-nav sm:flex ${isOpen ? 'main-nav js-is-open fadeIn': ''}`}
          aria-hidden={isOpen ? 'false' : 'true'}
        >
          {view === 'mobile' && isOpen && (
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="nav-toggle text-3xl text-black">&times;</button>
            </div>
          )}
          <MainNav
            activeClass="is-active"
            hasCTA="true"
            linkColor={!scrolling && full && view !== 'mobile' ? 'text-white' : 'text-black'} />
        </nav>
      </div>
    </div>
  );
}

export default Header
