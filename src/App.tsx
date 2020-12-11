import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
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
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="Username"/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input type="password" placeholder="Password"/>
            </div>
            <input type="submit" value="Login" className="btn solid"/>

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} className="icon" />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="icon" />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              </a>
            </div>
          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <FontAwesomeIcon icon={faUser} className="icon" />
              <input type="text" placeholder="Username"/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <input type="text" placeholder="Email"/>
            </div>
            <div className="input-field">
              <FontAwesomeIcon icon={faLock} className="icon" />
              <input type="password" placeholder="Password"/>
            </div>
            <input type="submit" value="Sign up" className="btn solid"/>

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} className="icon" />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} className="icon" />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faGoogle} className="icon" />
              </a>
              <a href="/" className="social-icon">
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
              </a>
            </div>
          </form>

        </div>
      </div>
      <div className="panels-container"></div>
    </div>
  );
};
