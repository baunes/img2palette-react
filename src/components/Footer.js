import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

import './Footer.scss'

export function Footer() {
  return (
    <footer className="footer AppFoter">
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <div className="level-item">
              <p>
                <strong>Image 2 Palette</strong> The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php"> MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
            </div>
          </div>

          <div className="level-right">
            <div clasName="level-item">
              <a href="https://github.com/baunes/img2palette-react">
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
}
