import React from 'react';

import '../../../style/CSS/Contact/FormSuccess.css';

const FormSuccess = () => {
  window.scrollTo(0, 0);
  return (
    <div className="form-success">
      <div className="container-requete">
        <h2 className="merci">Merci ! </h2>
        <p className="requete"> Nous avons bien reçu ta requête </p>
      </div>
      <div className="star star1">&nbsp;</div>
      <div className="star star2">&nbsp;</div>
      <div className="star star3">&nbsp;</div>
      <div className="star star4">&nbsp;</div>
      <div className="star star5">&nbsp;</div>
      <div className="star star6">&nbsp;</div>
      <div className="star star7">&nbsp;</div>
      <div className="star star8">&nbsp;</div>
    </div>
  );
};
export default FormSuccess;
