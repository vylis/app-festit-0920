import React, { useState } from 'react';
import propTypes from 'prop-types';
import '../../../style/CSS/Contact/Form.css';
import useForm from './useForm';
import validate from './Validateinfo';

const Form = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );
  const [newsLetter, setNewletters] = useState(false);
  return (
    <div>
      <h1 style={{ fontSize: '56px' }}>Contact</h1>
      <form className="formContact" onSubmit={handleSubmit}>
        <label className="labelContact" htmlFor="name">
          Prénom
          <input
            type="text"
            id="name"
            name="name"
            className="inputContact"
            placeholder="ex:Jean"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <p className="message">{errors.name}</p>}
        <label className="labelContact" htmlFor="lastname">
          Nom
          <input
            type="text"
            id="lastname"
            name="lastname"
            className="inputContact"
            placeholder="ex:Bernard"
            value={values.lastname}
            onChange={handleChange}
          />
        </label>
        {errors.lastname && <p className="message">{errors.lastname}</p>}

        <label className="labelContact" htmlFor="email">
          E-mail
          <input
            type="text"
            id="email"
            name="email"
            className="inputContact"
            placeholder="ex:jean@gmail.com"
            value={values.email}
            onChange={handleChange}
          />
        </label>

        {errors.email && <p className="message">{errors.email}</p>}

        <label className="labelContact" htmlFor="question">
          Une question ?
          <select className="selectContact">
            <option className="optionContact">
              Comment me faire rembourser mon billet ?
            </option>
            <option className="optionContact">
              Est-ce-que je peux échanger mon billet ?
            </option>
            <option className="optionContact">
              Y&rsquo;a t-il des assurances ?
            </option>
          </select>
        </label>
        <label className="labelContact" htmlFor="comment">
          <textarea className="areaContact" placeholder="Un commentaire ?" />
        </label>
        <label className="labelContact2" htmlFor="newletter">
          S&rsquo;abonner à la newsletter ?
          <input
            type="checkbox"
            id="newletter"
            className={setNewletters ? 'newlettersfalse' : 'newsletterstrue'}
            name="newletter"
            value={newsLetter}
            onChange={(e) => setNewletters(e.target.value)}
          />
        </label>
      </form>

      <button className="buttonContact" type="button" onClick={handleSubmit}>
        Envoyer
      </button>
    </div>
  );
};
Form.propTypes = {
  submitForm: propTypes.shape.isRequired,
};

export default Form;
