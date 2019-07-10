import React, { Component } from 'react'

import { Palette } from './Palette'
import { UploadableImage } from './UploadableImage'

export class Img2Palette extends Component {

  state = {
    usedSearch: false,
    colors: []
  }

  _renderDefault = () => {
    return (
      <div className="column is-6 is-offset-1">
        <h1 className="title is-2">
          Image To Palette
        </h1>
        <h2 className="subtitle is-4">
          Extract the perfect color palette for the image.
        </h2>
        <br />
        <p className="has-text-centered">
          <button className="button is-medium is-info is-outlined" onClick={this._extractPalette}>
            Extract
          </button>
        </p>
      </div>
    )
  }

  _renderColors = () => {
    return (
      <div className="column is-6 is-offset-1">
        <Palette colors = {this.state.colors} />
      </div>
    )
  }

  _onImageSelected = (colors) => {
    this.setState((state) => ({
      usedSearch: true,
      colors
    }))
  }

  render() {
    return (
      <div className="container has-text-centered">
        <div className="columns is-vcentered is-centered">
          <div className="column is-5">
            <UploadableImage onImageSelected={this._onImageSelected}/>
          </div>
          { this.state.usedSearch
                ? this._renderColors()
                : this._renderDefault() }
        </div>
      </div>
    )
  }
}
