import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../style/CSS/PaymentPage/PaymentPage.css';
import * as FaIcons from 'react-icons/fa';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import { ThemeContext } from '../../ThemeContext';

const PaymentPage = ({ location }) => {
  const { price } = location.state ? location.state : '';
  const [values, setValues] = useState({ email: '' });
  const [value, setValue] = useState({ mail: '' });
  const [theme] = useContext(ThemeContext);

  const history = useHistory();

  const handleChange = (e) => {
    setValues({ [e.target.name]: e.target.value });
  };

  const handleChange2 = (e) => {
    setValue({ [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.mail === values.email && values.email.includes('@')) {
      history.push('/');
      alert(
        "Merci de votre achat, vous allez être redirigé vers la page d'accueil"
      );
    } else {
      alert('Email invalide');
    }
  };

  return (
    <div className={theme}>
      <div className="paymentPage">
        <Navbar />

        <h1 className="PayementTitle">Récapitulatif d&rsquo;achat</h1>
        <form className="PaymentForm">
          <div className="row">
            <div className="person">
              Civilité
              <select className="nasratselect" id="genre" name="genre">
                <option value="Monsieur">Monsieur</option>
                <option value="Mademoiselle">Mademoiselle</option>
                <option value="Madame">Madame</option>
              </select>
              Votre prénom
              <input
                type="firstName"
                id="firstName"
                name="firstName"
                className="PayementInput"
                placeholder="Edward"
              />
              Votre nom
              <input
                type="lastName"
                id="lastName"
                name="lastName"
                className="PayementInput"
                placeholder="Elric"
                required
              />
              Votre adresse mail
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                className="PayementInput"
                placeholder="ex : fma@gmail.com"
                onChange={handleChange}
                required
              />
              Confirmer votre adresse mail
              <input
                type="mail"
                id="mail"
                name="mail"
                value={value.mail}
                className="PayementInput"
                onChange={handleChange2}
              />
              Téléphone
              <input
                type="phoneNumber"
                id="phoneNumber"
                name="phoneNumber"
                className="PayementInput"
              />
              <h3>Détail de l&rsquo;adresse</h3>
              Adresse
              <input
                type="address"
                id="address"
                name="address"
                className="PayementInput"
              />
              Ville
              <input
                type="city"
                id="city"
                name="city"
                className="PayementInput"
              />
              Code Postal
              <input
                type="postalCode"
                id="postalCode"
                name="PostalCode"
                className="PayementInput"
              />
            </div>

            <div className="card">
              <h3>Nombre de tickets</h3>
              <select id="tickets" name="tickets" className="nasratselect">
                <option value="1">
                  1 x {price}€ | Total : {price * 1}€
                </option>
                <option value="2">
                  2 x {price}€ | Total : {price * 2}€
                </option>
                <option value="3">
                  3 x {price}€ | Total : {price * 3}€
                </option>
                <option value="4">
                  4 x {price}€ | Total : {price * 4}€
                </option>
                <option value="5">
                  5 x {price}€ | Total : {price * 5}€
                </option>
                <option value="6">
                  6 x {price}€ | Total : {price * 6}€
                </option>
              </select>
              <h4>Détail du paiement</h4>
              <div htmlFor="cname">
                Choix de la carte
                <div className="icon-container">
                  <FaIcons.FaCcVisa className="visa" />
                  <FaIcons.FaCcMastercard className="mastercard" />
                  <FaIcons.FaApplePay className="apple" />
                  <FaIcons.FaCcPaypal className="paypal" />
                </div>
              </div>
              Numéro de carte
              <div className="cardN">
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  className="PayementInput"
                  maxLength="16"
                />
              </div>
              Date d&rsquo;expiration
              <div className="date">
                <div className="month">
                  <select
                    className="nasratselect"
                    name="expireMM"
                    id="expireMM"
                  >
                    <option value="">Mois</option>
                    <option value="01">Janvier</option>
                    <option value="02">Fevrier</option>
                    <option value="03">Mars</option>
                    <option value="04">Avril</option>
                    <option value="05">Mai</option>
                    <option value="06">Juin</option>
                    <option value="07">Juillet</option>
                    <option value="08">Aout</option>
                    <option value="09">Septembre</option>
                    <option value="10">Octobre</option>
                    <option value="11">Novembre</option>
                    <option value="12">Decembre</option>
                  </select>
                </div>
                <div className="year">
                  <select
                    className="nasratselect"
                    name="expireYY"
                    id="expireYY"
                  >
                    <option value="">Année</option>{' '}
                    <option value="10">2020</option>
                    <option value="11">2021</option>
                    <option value="12">2022</option>
                    <option value="12">2023</option>
                  </select>{' '}
                </div>
              </div>
              Numéro CCV
              <div className="ccv">
                <input
                  type="text"
                  id="ccv"
                  name="ccv"
                  className="PayementInput"
                  maxLength="3"
                />
              </div>
            </div>
          </div>
          <button type="button" className="btn" onClick={handleSubmit}>
            Payer
          </button>
        </form>

        <Footer />
      </div>
    </div>
  );
};

PaymentPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({ price: PropTypes.number }).isRequired,
  }).isRequired,
};

export default PaymentPage;
