import React, { Component } from 'react';

import domain7 from '../images/domain7.svg';
import engine from '../images/engine.svg';
import gwl from '../images/greatwest.png';
import bch from '../images/bchydro.svg';

class Partners extends Component {
  render() {
    return (
      <ul className="list-reset flex flex-col md:flex-row mx-auto">
      {images.map(item => {
        return (
          <li className="flex flex-col justify-center mx-2 py-8 lg:mx-8 " key={item.title}>
            <img src={item.src} alt={item.title} className="block w-48"/>
          </li>
        )
      })}
      </ul>
    );
  }
}

const images = [
  {
    src: gwl,
    title: 'Great-West Life'
  },
  {
    src: domain7,
    title: 'Domain7'
  },
  {
    src: bch,
    title: 'BC Hydro'
  },
  {
    src: engine,
    title: 'Engine Digital'
  }
]

export default Partners;
