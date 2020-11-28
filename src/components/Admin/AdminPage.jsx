import React, { useContext } from 'react';
import FestForm from './FestForm';
import TicketForm from './TicketForm';
import ArtistForm from './ArtistForm';
import Navbar from '../Reusable/NavBar/Navbar';
import Footer from '../Reusable/Footer/Footer';
import '../../style/CSS/Admin/AdminPage.css';

import { ThemeContext } from '../../ThemeContext';

function AdminPage() {
  const [theme] = useContext(ThemeContext);

  return (
    <div className={theme}>
      <div className="allAdmin">
        <Navbar />
        <div className="AdminPage">
          <FestForm />
          <TicketForm />
          <ArtistForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminPage;
