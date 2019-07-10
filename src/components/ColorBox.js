import React from 'react'
import PropTypes from 'prop-types';

import './ColorBox.scss'

export function ColorBox({ color = "#FFF" }) {
  let colorBoxColor = {
    backgroundColor: color
  }

  return (
    <div className="ColorBox-Card">
      <figure className="image">
        <section className="section ColorBox-Color " style={colorBoxColor} />
      </figure>
      <div className="ColorBox-Body">
        <div className="ColorBox-Title">
          <p className="subtitle is-5">{color}</p>
        </div>
      </div>
    </div>
  );
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired
}
