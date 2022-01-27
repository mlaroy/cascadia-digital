import React, { Component } from 'react';

import domain7 from '../images/domain7.svg';
import engine from '../images/engine.svg';
import cl from '../images/canadalife.svg';
import monday from '../images/monday.svg';
import bch from '../images/bchydro.svg';
import pandg from '../images/pandg.svg';
import tenup from '../images/10up-logo-full.svg';
import verblio from '../images/verblio.png';
import databand from '../images/databand.svg';
import wallop from '../images/wallop.svg';

class Partners extends Component {
  render() {
    return (
      <ul className="list-reset grid grid-cols-2 md:flex flex-wrap mx-auto justify-center">
        {images.map(item => {
          const width = item.width || '179';

          return (
            <li className="flex flex-col justify-center py-8 px-4" key={item.title}>
              <img src={item.src} alt={item.title} className="block mx-auto" width={`${width}px`} loading="lazy"/>
            </li>
          )
        })}
      </ul>
    );
  }
}

const images = [
  {
    src: cl,
    title: 'Canada Life'
  },
  {
    src: bch,
    title: 'BC Hydro'
  },
  {
    src: engine,
    title: 'Engine Digital'
  },
  {
    src: domain7,
    title: 'Domain7'
  },
  {
    src: tenup,
    title: '10up',
    width: '125'
  },
  {
    src: pandg,
    title: 'Pound & Grain'
  },
  {
    src: monday,
    title: 'Monday Creative'
  },
  {
    src: wallop,
    title: 'Wallop'
  },
  {
    src: verblio,
    title: 'Verblio'
  },
  {
    src: databand,
    title: 'Databand'
  },
]

export default Partners;
