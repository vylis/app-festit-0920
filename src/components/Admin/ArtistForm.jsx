import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../style/CSS/Admin/AdminPage.css';

const ArtistForm = () => {
  const [input, setInput] = useState({});
  const [festivals, setFestivals] = useState([]);
  const [festivalId, setFestivalId] = useState(null);
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/festivals`)
      .then((res) => res.data)
      .then((data) => setFestivals(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/styles`)
      .then((res) => res.data)
      .then((data) => setStyles(data));
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleClick = async () => {
    let indexArtist;
    let idArtist;
    await axios.post(`${process.env.REACT_APP_BASE_URL}/api/artists`, {
      ...input,
    });

    await axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/artists/`)
      .then((res) => {
        indexArtist = res.data.length - 1;
        idArtist = res.data[`${indexArtist}`].idartist;
      });

    await axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/api/festivals/${Number(
          festivalId
        )}/artists/${idArtist}`
      )
      /* eslint-disable no-console */
      .then((response2) => console.log(response2))

      .catch((error) => {
        /* eslint-disable no-console */
        console.log(error);
      });
    await window.location.reload(true);
  };

  const handleSelect = (e) => {
    setFestivalId(e.target.value);
  };

  return (
    <div>
      <div className="artistform">
        <h2>Artists</h2>
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
          name="country"
          onChange={(e) => handleChange(e)}
          placeholder="Country"
        />

        <input
          className="inputeuh"
          name="image_url"
          onChange={(e) => handleChange(e)}
          placeholder="Image"
        />

        <input
          className="inputeuh"
          name="music_url"
          onChange={(e) => handleChange(e)}
          placeholder="Music Video"
        />

        <input
          className="inputeuh"
          name="embed_video"
          onChange={(e) => handleChange(e)}
          placeholder="Title of the Music"
        />

        <input
          className="inputeuh"
          name="tracker_count"
          onChange={(e) => handleChange(e)}
          placeholder="Number of followers"
        />
        <select
          className="selecteuh"
          name="id_style"
          onChange={(e) => handleChange(e)}
        >
          <option value="">--Please choose a style--</option>
          {styles.map((style) => (
            <option value={style.idstyle}>
              Name:{style.name}, Id:{style.idstyle}
            </option>
          ))}
        </select>

        <select
          className="selecteuh"
          name="style"
          onChange={(e) => handleSelect(e)}
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

export default ArtistForm;
