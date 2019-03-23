import React, { Component } from 'react';

import domain7 from '../images/domain7.svg';
import engine from '../images/engine.svg';

class Partners extends Component {
  render() {
    return (
      <ul className="list-reset flex mx-auto">
      {images.map(item => {
        return (
          <li className="flex flex-col justify-center mx-16">
            <img src={item.src} alt={item.title} className="block w-32"/>
          </li>
        )
      })}
      </ul>
    );
  }
}

const images = [
  {
    src: domain7,
    title: 'Domain7'
  },
  {
    src: engine,
    title: 'Engine Digital'
  }
]

export default Partners;