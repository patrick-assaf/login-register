import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import doctor from './images/doctor.svg';
import medicine from './images/medicine.svg';

interface Props {

}

export const App: React.FC<Props> = () => {

  const sign_up = () => {
    document.querySelector(".container")?.classList.add("sign-up-mode");
  }

  const sign_in = () => {
    document.querySelector(".container")?.classList.remove("sign-up-mode");
  }

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
      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus et iusto.</p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => sign_up()}>Sign up</button>
          </div>

          <img src={doctor} className="image" alt=""/>
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>Already one of us ?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente delectus et iusto.</p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => sign_in()}>Sign in</button>
          </div>

          <img src={medicine} className="image" alt=""/>
        </div>
      </div>
    </div>
  );
};
