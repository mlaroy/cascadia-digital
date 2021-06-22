import React, { Component } from 'react';

import domain7 from '../images/domain7.svg';
import engine from '../images/engine.svg';
import cl from '../images/canadalife.svg';
import monday from '../images/monday.svg';
import bch from '../images/bchydro.svg';
import pandg from '../images/pandg.svg';

class Partners extends Component {
  render() {
    return (
      <ul className="list-reset flex flex-wrap md:flex-row mx-auto justify-between">
      {images.map(item => {
        return (
          <li className="flex flex-col justify-center py-8 px-4 w-1/2 md:w-1/3 lg:w-1/5" key={item.title}>
            <img src={item.src} alt={item.title} className="block w-full mx-auto" width="179px" loading="lazy"/>
          </li>
        )
      })}
      </ul>
    );
  }
}

const images = [
  // {
  //   src: cl,
  //   title: 'Canada Life'
  // },
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
    src: pandg,
    title: 'Pound & Grain'
  },
  {
    src: monday,
    title: 'Monday Creative'
  },
]

export default Partners;
