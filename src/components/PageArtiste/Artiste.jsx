import React, { useEffect, useState, useContext } from 'react';
import '../../style/CSS/PageArtiste/Artiste.css';

import axios from 'axios';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../ThemeContext';

import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';

const Artiste = ({ match }) => {
  const { idartist } = match.params;
  const [theme] = useContext(ThemeContext);

  const [artiste, setArtiste] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/artists/id/${idartist}`)
      .then((response) => response.data)
      .then((data) => setArtiste(data));
  }, [idartist]);

  return (
    <div className="container-parent-artiste">
      <div className={theme}>
        <Navbar />
        {artiste.map((artist) => (
          <div className="container-art">
            <div className="banner-artiste-texte">
              <div className="artiste-info">
                <p className="artiste-nom">{artist.name}</p>
                <p className="country-artiste"> {artist.country}</p>
                <div className="music-boutton">
                  <a
                    href={artist.music_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="boutton-play"
                      src="https://arras.salon-idhome.fr/wp-content/themes/ave-child/play.jpg"
                      alt=""
                    />
                  </a>
                  <div className="music">
                    <p className="top-music"> Top musique </p>
                    <p className="title-music">{artist.embed_video}</p>
                  </div>
                </div>
              </div>
              <div className="div-image">
                <img
                  className="image-artiste"
                  src={artist.image_url}
                  alt="artiste"
                />
              </div>
            </div>
            <div className="container-description-artiste">
              <p className="descritpion-artiste">{artist.description}</p>
            </div>
          </div>
        ))}

        <Footer />
      </div>
    </div>
  );
};
Artiste.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ idartist: PropTypes.number }).isRequired,
  }).isRequired,
};
export default Artiste;
