import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../style/CSS/PageStyle/Box.css';

const Box = ({ style }) => {
  const [boxs, setBoxs] = useState([]);

  useEffect(() => {
    Axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/festivals/style/${style.name}`
    )
      .then((result) => result.data)
      .then((data) => setBoxs(data));
  }, [style.name]);

  return (
    <div className="allbox">
      {boxs &&
        boxs.map((box) => {
          return (
            <Link
              className="linkbox"
              to={{
                pathname: `/festivals/${box.idfestival}`,
                state: { color: style.color },
              }}
            >
              <ul className="Box" style={{ backgroundColor: style.color_two }}>
                <div className="boxImage">
                  <img src={box.logo} alt={box.name} title={box.name} />

                  <div className="text">
                    <h3>{box.name}</h3>

                    <p>{box.startdate}</p>
                    <p>{box.city}</p>
                  </div>
                </div>
              </ul>
            </Link>
          );
        })}
    </div>
  );
};

Box.propTypes = {
  style: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color_two: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
};

export default Box;
