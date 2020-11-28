import React, { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../style/CSS/PageArtiste/ListeArtistes.css';
import { ThemeContext } from '../../ThemeContext';

import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';

const ListeArtistes = () => {
  const [theme] = useContext(ThemeContext);
  const [listArtists, setListArtists] = useState([]);
  const [filterArtists, setFilterArtists] = useState(null);
  const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/artists`)
      .then((response) => setListArtists(response.data));
  }, []);

  const handleArtists = (letter) => {
    const newArray = [];

    listArtists.filter(
      (elem) =>
        elem.name.charAt(0).toLowerCase() === letter.toLowerCase() &&
        newArray.push(elem)
    );
    setFilterArtists(newArray);
  };

  const handleReset = () => {
    window.location.reload();
  };
  return (
    <div className="container">
      <div className={theme}>
        <Navbar />
        <div className="fixArtist">
          <Link to="/artists" className="artiste-title">
            <button
              onClick={() => handleReset()}
              onKeyDown={handleReset}
              className="artiste-title-cursor"
              type="button"
            >
              Artistes
            </button>
          </Link>
        </div>

        <div className="container-letter">
          {alphabet.map((letter) => (
            <button
              type="button"
              onClick={() => handleArtists(letter)}
              className="boutton-letters"
            >
              <Link to={`/artists/${letter}`} className="letters">
                {letter}
              </Link>
            </button>
          ))}
        </div>

        <div className="container-liste-artists">
          <div className="container-enfant-artists">
            {filterArtists !== null
              ? filterArtists.map((artists) => (
                  <Link
                    to={`/artiste/${artists.idartist}`}
                    className="artists"
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: `url(${artists.image_url})`,
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover',
                    }}
                  >
                    <p className="nameArtistBox">{artists.name}</p>
                  </Link>
                ))
              : listArtists.map((artists) => (
                  <Link
                    to={`/artiste/${artists.idartist}`}
                    className="artists"
                    style={{
                      backgroundRepeat: 'no-repeat',
                      backgroundImage: `url(${artists.image_url})`,
                      backgroundPosition: 'center center',
                      backgroundSize: 'cover',
                    }}
                  >
                    <p className="nameArtistBox">{artists.name}</p>
                  </Link>
                ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ListeArtistes;
