import React from 'react';
import '../../../style/CSS/Reusable/Footer/Footer.css';
/* import PropTypes from 'prop-types'; */
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="container-contact">
        <p className="question"> Une Question ? </p>
        <p> festoch.fastoch@gmail.com</p>
        <p className="adresse"> 7 allée Serr </p>
        <p className="ville"> 33100, Bordeaux</p>
      </div>

      <IconContext.Provider value={{ size: '40px' }}>
        <div className="container-reseaux">
          <p> SUIVEZ NOUS </p>
          <div className="buttons">
            <a className="reseaux-icones" href="https://www.facebook.com/">
              <FaIcons.FaFacebook />
            </a>

            <a className="reseaux-icones" href="https://www.youtube.com/">
              <SiIcons.SiYoutube />
            </a>

            <a className="reseaux-icones" href="https://www.twitter.com/">
              <AiIcons.AiOutlineTwitter />
            </a>

            <a className="reseaux-icones" href="https://www.instagram.com/">
              <SiIcons.SiInstagram />
            </a>
          </div>
          <p className="tt"> @ Festoch'Fastoch, 2020, tous droits réservés</p>
        </div>

        <div className="container-formalites">
          <p>Conditions générales de ventes</p>
          <p>Politique de confidentialités</p>
          <p>Conditions d'achat de billets</p>
          <p>Mentions légales </p>
        </div>
      </IconContext.Provider>
    </div>
  );
}

/* Footer.propTypes = {
  style: PropTypes.shape({
    color: PropTypes.string.isRequired,
  }).isRequired,
}; */

export default Footer;
