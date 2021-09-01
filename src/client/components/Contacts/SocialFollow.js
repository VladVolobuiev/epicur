import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import '../../../styles/social.scss';

export default function SocialFollow() {
  return (
    <div className="social-container">
      <h4 className="text-center">Social Follow</h4>
      <div className="d-flex flex-column align-items-center ">
        <a
          href="https://www.youtube.com/channel/UCLc3aCq8WLMPC5X6YB2fsiw"
          className="youtube social"
        >
          <FontAwesomeIcon icon={faYoutube} size="3x" />
        </a>
        <a
          href="https://www.facebook.com/epikur.official"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" />
        </a>
        {/*<a href="https://www.twitter.com/jamesqquick" className="twitter social">*/}
        {/*    <FontAwesomeIcon icon={faTwitter} size="1x" />*/}
        {/*</a>*/}
        <a
          href="https://www.instagram.com/epikur.ua/"
          className="instagram text-center social"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" />
        </a>
        {/*<FontAwesomeIcon icon={['fab', 'facebook']} />*/}
      </div>
    </div>
  );
}
