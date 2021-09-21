import wordpress from '../images/wordpress.svg';
import jamStack from '../images/static.svg';
import performance from '../images/performance.svg';
import programmer from '../images/programmer.svg';
import accessibility from '../images/accessibility.svg';
import ecommerce from '../images/ecommerce.svg';
import gatsby from '../images/gatsby.svg';
import landingPage from '../images/landing-page.svg';
import developer from '../images/developer.svg'
import search from '../images/search.svg'

export const getImage = img => {
    switch(img) {
      case 'wordpress':
        return wordpress;
      case 'static':
        return jamStack;
      case 'performance':
        return performance;
      case 'accessibility':
        return accessibility;
      case 'search':
        return search;
      case 'gatsby':
        return gatsby;
      case 'programmer':
        return programmer;
      case 'landing-page':
        return landingPage;
      case 'developer':
        return developer;
      case 'ecommerce':
          return ecommerce;
      default:
        return wordpress;
    }
  }
