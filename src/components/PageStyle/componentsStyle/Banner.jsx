import React from 'react';
import '../../../style/CSS/PageStyle/Banner.css';
import PropTypes from 'prop-types';

const Banner = ({ style }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${style.image})`,
      }}
    >
      <p>{style.name}</p>
    </div>
  );
};

Banner.propTypes = {
  style: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color_two: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Banner;
