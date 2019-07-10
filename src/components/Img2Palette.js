import React, { Component } from 'react'
import Vibrant from 'node-vibrant'

import { Palette } from './Palette'

export class Img2Palette extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

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

  _extractPalette = () => {
    console.log("_extractPalette", this.myRef.current);
    Vibrant
      .from(this.myRef.current)
      .getPalette()
      .then((palette) => {
        //Vibrant.rgbToHex()
        console.log(palette);
        this.setState((state) => ({
          usedSearch: true,
          colors: [
            Vibrant.Util.rgbToHex(...palette.DarkMuted._rgb),
            Vibrant.Util.rgbToHex(...palette.DarkVibrant._rgb),
            Vibrant.Util.rgbToHex(...palette.LightMuted._rgb),
            Vibrant.Util.rgbToHex(...palette.LightVibrant._rgb),
            Vibrant.Util.rgbToHex(...palette.Muted._rgb),
            Vibrant.Util.rgbToHex(...palette.Vibrant._rgb)
          ]
        }))
      })
      .catch((palette) => console.error("Error extracting colors", palette))
  }

  render() {
    return (
      <div className="container has-text-centered">
        <div className="columns is-vcentered is-centered">
          <div className="column is-5">
            <figure className="image is-4by3">
              <img ref={this.myRef} crossOrigin="anonymous" className="App-img" src="https://picsum.photos/800/600/?random" alt="Description" />
            </figure>
          </div>
          { this.state.usedSearch
                ? this._renderColors()
                : this._renderDefault() }
        </div>
      </div>
    );
  }
}
