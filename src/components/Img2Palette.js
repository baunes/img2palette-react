import React, { Component } from 'react'

export class Img2Palette extends Component {

  state = {
    usedSearch: false
  }

  _handleClick = () => {
    this.setState((prevState) => ({ isMenuActive: !prevState.isMenuActive }))
  }

  _renderDefault = () => {
    return (
      <React.Fragment>
        <h1 className="title is-2">
          Image To Palette
        </h1>
        <h2 className="subtitle is-4">
          Extract the perfect color palette for the image.
        </h2>
        <br />
        <p className="has-text-centered">
          <button className="button is-medium is-info is-outlined">
            Extract
          </button>
        </p>
      </React.Fragment>
    )
  }

  render() {
    return (
      <div className="container has-text-centered">
        <div className="columns is-vcentered">
          <div className="column is-5">
            <figure className="image is-4by3">
              <img className="App-img" src="https://picsum.photos/800/600/?random" alt="Description" />
            </figure>
          </div>
          <div className="column is-6 is-offset-1">
            { this.state.usedSearch
                ? this._renderDefault()
                : this._renderDefault()}
          </div>
        </div>
      </div>
    );
  }
}
