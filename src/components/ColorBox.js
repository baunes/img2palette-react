import React from 'react'
import PropTypes from 'prop-types';

import './ColorBox.scss'

export function ColorBox({ color = "#FFF", name = "" }) {
  let colorBoxColor = {
    backgroundColor: color
  }

  return (
    <div className="ColorBox-Card">
      <figure className="image">
        <section className="section ColorBox-Color " style={colorBoxColor} />
      </figure>
      <div className="ColorBox-Body">
        <div>
        <p className="subtitle is-7 ColorBox-Name">{name}</p>
        <p className="subtitle is-5">{color}</p>
        </div>
      </div>
    </div>
  );
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
