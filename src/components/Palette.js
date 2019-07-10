import React from 'react'
import PropTypes from 'prop-types';

import './Palette.scss'

import { ColorBox } from './ColorBox'

export function Palette({ colors = [] }) {
  let style = {
    justifyContent: "space-evenly",
    flexWrap: "wrap"
  }

  return (
    <div className="container">
    <p className="title is-2">Color Palette</p>
      <div className="container is-flex" style = {style}>
        {
          colors.map( (color) => (
            <div key={color} className="ColorBox-Wrapper">
              <ColorBox color={color} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

Palette.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
}
