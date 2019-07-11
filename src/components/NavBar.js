import React, { Component } from 'react'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

import './NavBar.scss'

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
    const textImage = 'Image 2 Palette'

    return (
      <nav className="navbar has-shadow is-spaced">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <img src="../images/bulma.png" alt={textImage} />
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
                  <li className="is-active">
                    <a href="Home"><FontAwesomeIcon className="NavBar-menuIcon" icon={faHome} /> Home</a>
                  </li>
                  <li>
                    <a href="https://github.com/baunes/img2palette-react">
                      <FontAwesomeIcon className="NavBar-menuIcon"icon={faGithubAlt} />Github
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
