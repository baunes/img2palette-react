import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import PropTypes from 'prop-types'
import Vibrant from 'node-vibrant'

import './UploadableImage.scss'

export class UploadableImage extends Component {
  state = {
    file: {},
    randomCounter: 0
  }

  constructor(props) {
    super(props);
    this.refImage = React.createRef()
  }

  _extractPalette = () => {
    console.log('Extracting colors')
    Vibrant
      .from(this.refImage.current)
      .getPalette()
      .then((palette) => {
        this.props.onImageSelected([
          { name: 'DarkMuted', color: Vibrant.Util.rgbToHex(...palette.DarkMuted._rgb) },
          { name: 'DarkVibrant', color: Vibrant.Util.rgbToHex(...palette.DarkVibrant._rgb) },
          { name: 'LightMuted', color: Vibrant.Util.rgbToHex(...palette.LightMuted._rgb) },
          { name: 'LightVibrant', color: Vibrant.Util.rgbToHex(...palette.LightVibrant._rgb) },
          { name: 'Muted', color: Vibrant.Util.rgbToHex(...palette.Muted._rgb) },
          { name: 'Vibrant', color: Vibrant.Util.rgbToHex(...palette.Vibrant._rgb) }
        ])
      })
      .catch((palette) => console.error("Error extracting colors", palette))
  }

  _loadRandom = () => {
    this.setState((prevState) => ({
      file: { preview: `https://picsum.photos/800/600/?random&counter=${prevState.randomCounter}`},
      randomCounter: prevState.randomCounter + 1
    }))
  }

  _onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      let file = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0])
      })
      this.setState((state) => {
        if (state.file) {
          URL.revokeObjectURL(state.file.preview)
        }
        return { file }
      })
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.file
        && (prevState.file.preview !== this.state.file.preview
          || prevState.randomCounter !== this.state.randomCounter)) {
      this._extractPalette()
    }
  }

  render() {
    const { preview } = this.state.file
    return (
      <Dropzone onDrop={this._onDrop}>
        {({ getRootProps, getInputProps }) => (
          <React.Fragment>
            <figure className="image is-4by3" {...getRootProps()}>
              <img ref={this.refImage} crossOrigin="anonymous" className="App-img" src={preview} alt="Description" />
              <input {...getInputProps()} type="file" name="image" accept="image/*" />
            </figure>
            <br />
            <p className="has-text-centered UploadableImage-Buttons">
              <button className="button is-medium is-info is-outlined" onClick={this._loadRandom}>
                Random
              </button>
              <span>Drag your photo to the box or choose a random one.</span>
            </p>
          </React.Fragment>
        )}
      </Dropzone>
    )
  }
}

UploadableImage.defaultProps = {
  onImageSelected: () => {}
}

UploadableImage.propTypes = {
  onImageSelected: PropTypes.func.isRequired
}