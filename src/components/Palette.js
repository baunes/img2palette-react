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
          colors.map( (color, index) => (
            <div key={index} className="ColorBox-Wrapper">
              <ColorBox color={color.color} name={color.name} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

Palette.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.exact({
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
}
