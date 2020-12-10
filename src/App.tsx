import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

interface Props {

}

export const App: React.FC<Props> = () => {
  return (
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} />
              <input type="text" placeholder="Username"/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} />
              <input type="password" placeholder="Password"/>
            </div>
            <input type="submit" value="Login" className="btn solid"/>

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container"></div>
    </div>
  );
};
