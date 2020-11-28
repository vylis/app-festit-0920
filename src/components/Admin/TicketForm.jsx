import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/CSS/Admin/AdminPage.css';

const TicketForm = () => {
  const [input, setInput] = useState({});
  const [festivals, setFestivals] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/festivals`)
      .then((res) => res.data)
      .then((data) => setFestivals(data));
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    await axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/tickets`, {
        ...input,
      })
      /* eslint-disable no-console */
      .then((response2) => console.log(response2))

      .catch((error) => {
        /* eslint-disable no-console */
        console.log(error);
      });
    await window.location.reload(true);
  };

  return (
    <div>
      <div className="ticketform">
        <h2> Tickets </h2>
        <input
          className="inputeuh"
          name="name"
          onChange={(e) => handleChange(e)}
          placeholder="Name"
        />

        <input
          className="inputeuh"
          name="description"
          onChange={(e) => handleChange(e)}
          placeholder="Description"
        />

        <input
          className="inputeuh"
          name="type"
          onChange={(e) => handleChange(e)}
          placeholder="Type of the ticket"
        />

        <input
          className="inputeuh"
          name="date"
          onChange={(e) => handleChange(e)}
          placeholder="Date"
        />

        <input
          className="inputeuh"
          name="price"
          onChange={(e) => handleChange(e)}
          placeholder="Price"
        />

        <select
          className="selecteuh"
          name="soldOut"
          onChange={(e) => handleChange(e)}
        >
          <option value="">Sold Out</option>
          <option value="false">false</option>
          <option value="true">true</option>
        </select>

        <select
          className="selecteuh"
          name="id_festival"
          onChange={(e) => handleChange(e)}
        >
          <option value="">--Please choose a festival--</option>
          {festivals.map((festival) => (
            <option value={festival.idfestival}>
              Name:{festival.name}, Id:{festival.idfestival}
            </option>
          ))}
        </select>
        <div className="bouttonCenter">
          <button
            className="buttoneuh"
            type="submit"
            onClick={() => handleClick()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
