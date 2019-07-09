import React, { Component } from 'react'
import classNames from 'classnames'

export class NavBar extends Component {

  state = {
    isMenuActive: false
  }

  _handleClick = () => {
    this.setState( (prevState) => ({ isMenuActive: !prevState.isMenuActive }) )
  }

  render() {
    let navbarMenuClasses = classNames({
      'navbar-menu': true,
      'is-active': this.state.isMenuActive
    })

    return (
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <img src="../images/bulma.png" alt="Logo" />
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu" onClick={this._handleClick}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className={ navbarMenuClasses }>
            <div className="navbar-end">
              <div className="tabs is-right">
                <ul>
                  <li className="is-active"><a href="Home">Home</a></li>
                  <li><a href="Examples">Examples</a></li>
                  <li><a href="Features">Features</a></li>
                  <li><a href="Team">Team</a></li>
                  <li><a href="Help">Help</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
