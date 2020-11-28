import React, { useContext } from 'react';
import BoxStyle from './BoxStyle';
import '../../style/CSS/Home/Home.css';
import Footer from '../Reusable/Footer/Footer';
import Navbar from '../Reusable/NavBar/Navbar';

import { ThemeContext } from '../../ThemeContext';

function Home() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="Home">
        <Navbar />
        <BoxStyle />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
