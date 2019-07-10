import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import PropTypes from 'prop-types'
import Vibrant from 'node-vibrant'

export class UploadableImage extends Component {
  state = {
    file: {}
  }

  constructor(props) {
    super(props);
    this.refImage = React.createRef();
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

      this._extractPalette(this.refImage.current)
    }
  }

  _extractPalette = (imageElement) => {
    Vibrant
      .from(imageElement)
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

  render() {
    const { preview } = this.state.file
    return (
      <Dropzone onDrop={this._onDrop}>
        {({ getRootProps, getInputProps }) => (
          <figure className="image is-4by3" {...getRootProps()}>
            <img ref={this.refImage} crossOrigin="anonymous" className="App-img" src={preview} alt="Description" />
            <input {...getInputProps()} type="file" name="image" accept="image/*" />
          </figure>
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
