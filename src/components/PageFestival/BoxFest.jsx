import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/CSS/PageFestival/BoxFest.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi';
import * as TiIcons from 'react-icons/ti';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import AutoPlay from './AutoPlay';

const BoxFest = ({ match, location }) => {
  const [festivals, setFestivals] = useState({});
  const [tickets, setTickets] = useState([]);
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const { idfestival } = match.params;
  const { color } = location.state ? location.state : '';

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/festivals/${idfestival}`)
      .then((response) => response.data)
      .then((data) => setFestivals(data[0]));

    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/api/tickets/festivals/${idfestival}`
      )
      .then((response) => setTickets(response.data));
  }, [idfestival]);

  const handleMouseDes = () => {
    setIsToggleOn(!isToggleOn);
  };

  const handleMouse = (pack) => {
    setIsToggle(pack.idticket);
  };

  const handleTicketsPrice = () => {
    const newPrice = [];

    tickets.map((ticket) => newPrice.push(ticket.price));

    newPrice.sort((a, b) => a - b);

    return newPrice[0];
  };

  return (
    <div className="festival" style={{ backgroundColor: `${color}` }}>
      <div className="footerColorChange">
        <Navbar />
      </div>
      {/* box festival : image en background et nom festoch */}
      <div className="fadeEffect">
        <div
          className="boxFestival"
          style={{
            backgroundImage: `url("${festivals.image1}")`,
            opacity: '0.7',
            backgroundSize: 'cover',
            zIndex: -1,
            backgroundPosition: 'center',
          }}
        >
          <div
            className="cadreTitle"
            // style={{
            //   content: '',
            //   width: '100%',
            //   position: 'absolute',
            //   left: 0,
            //   right: 0,
            //   height: '500px',
            //   opacity: 0.85,
            //   background: `linear - gradient(transparent, ${color} 90% )`,
            //   Zindex: 1,
            // }}
          />
          <h2 className="styleNameFest">{festivals.name}</h2>
        </div>
      </div>
      {/* ------- Partie description ---------*/}

      <div
        className="container-descriptionDesktop"
        aria-hidden="true"
        onMouseEnter={() => handleMouseDes()}
        onMouseLeave={() => handleMouseDes()}
        style={{ backgroundColor: `${color}` }}
      >
        <div className="descriptionFestival">
          <p className="details">
            <p className="fleche"> &darr; </p>
            <p className="description">DESCRIPTION</p>
            <p className="fleche"> &darr; </p>
          </p>
          {isToggleOn ? (
            <div className="descriptionText">{festivals.description}</div>
          ) : (
            ''
          )}
        </div>
      </div>

      <div
        className="container-descriptionMobli"
        aria-hidden="true"
        style={{ backgroundColor: `${color}` }}
      >
        <div className="descriptionFestival">
          <p className="details">
            <p className="fleche"> &darr; </p>
            <p className="description">DESCRIPTION</p>
            <p className="fleche"> &darr; </p>
          </p>
          <div className="descriptionText">{festivals.description}</div>
        </div>
      </div>
      {/* ------- Partie description ---------*/}
      {/* -----Partie icones ----- */}
      <IconContext.Provider value={{ size: '90px' }}>
        <div className="container-icones">
          <div className="icone-texte">
            <p className="reseaux-icones">
              <TiIcons.TiLocationOutline />
            </p>
            <p className="text-icone"> {festivals.city}</p>
          </div>

          <div className="icone-texte">
            <p className="reseaux-icones">
              <BiIcons.BiCalendarStar />
            </p>
            <p className="text-icone">
              Du {festivals.startDate} au {festivals.endDate}
            </p>
          </div>
          <div className="icone-texte">
            <p className="reseaux-icones">
              <BiIcons.BiEuro />
            </p>
            <p className="text-icone">
              A partir de {handleTicketsPrice(tickets)}€
            </p>
          </div>
        </div>
      </IconContext.Provider>
      {/* -------fin partie icones -------- */}
      {/* ------ le lineup ---------- */}
      <AutoPlay idFestival={festivals.idfestival} />
      {/* package festival (box ticket) */}
      <div className="section950px">
        <div className="cardsPack">
          {tickets.map((pack) => (
            <div
              className="packCadre"
              onMouseEnter={() => handleMouse(pack)}
              onMouseLeave={() => handleMouse(!pack)}
            >
              <div className="imagepackcard">
                <img
                  className="imgCard"
                  src="https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="imagecard"
                />
              </div>
              <div className="textPack">
                <h2>{pack.name}</h2>

                <p>{pack.description}</p>

                {isToggle === pack.idticket ? (
                  <div className="moreInfo">
                    <p>{pack.date}</p>
                    <p>{pack.price}€</p>

                    {/* <Link
                    to={{
                      pathname: `/festivals/${box.idfestival}`,
                      state: { color: style.color },
                    }}
                  >
                    En savoir plus
                  </Link> */}
                    <Link
                      to={{
                        pathname: '/payment',
                        state: { price: pack.price },
                      }}
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      <div className="bouttonResa"> &gt; Réserver</div>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section951px">
        <div className="cardsPack">
          {tickets.map((pack) => (
            <div className="packCadre">
              <div className="imagepackcard">
                <img
                  className="imgCard"
                  src="https://images.pexels.com/photos/2014775/pexels-photo-2014775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt="imagecard"
                />
              </div>
              <div className="textPack">
                <h2>{pack.name}</h2>

                <p>{pack.description}</p>

                <div className="moreInfo">
                  <p>{pack.date}</p>
                  <p>{pack.price}€</p>
                  <Link
                    to="/payment"
                    style={{
                      textDecoration: 'none',
                    }}
                  >
                    <div className="bouttonResa"> &gt; Réserver</div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footerColorChange">
        <Footer />
      </div>
    </div>
  );
};
BoxFest.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ idfestival: PropTypes.number }).isRequired,
  }).isRequired,

  location: PropTypes.shape({
    state: PropTypes.shape({ color: PropTypes.string }).isRequired,
  }).isRequired,
};

export default BoxFest;
