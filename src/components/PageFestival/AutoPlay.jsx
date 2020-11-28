import React, { useState, useEffect } from 'react';

import PropTypes from 'prop-types';
import Slider from 'react-slick';
import '../../style/CSS/PageFestival/AutoPlay.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import axios from 'axios';

const AutoPlay = ({ idFestival }) => {
  const [artists, setArtists] = useState([]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
  };

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/festivals/${idFestival}/artists`
      )
      .then((response) => response.data)
      .then((data) => setArtists(data));
  }, [idFestival]);

  return (
    <div className="container-artists">
      {/* eslint-disable react/jsx-props-no-spreading */}
      <Slider {...settings}>
        {artists.map((artist) => (
          <div className="artist-name">&#8249; &#47; {artist.name} &#8250;</div>
        ))}
      </Slider>
    </div>
  );
};

AutoPlay.propTypes = {
  idFestival: PropTypes.number.isRequired,
};
export default AutoPlay;
