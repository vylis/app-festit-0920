import React, { useState, useContext } from 'react';
import '../../../style/CSS/Reusable/Navbar/Navbar.css';
import { ThemeContext } from '../../../ThemeContext';

export default function Toolbar() {
  const [theme, changeTheme] = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);
  const handleChange = () => {
    changeTheme();
    setIsOn(!isOn);
  };

  function ToggleKnob() {
    return (
      <span
        className={`toggleKnob 
                      ${theme === 'dark' ? 'isActive' : ''}`}
      >
        &nbsp;
      </span>
    );
  }

  return (
    <div className="mode">
      <p className="themeP">Theme</p>
      <div className="centerButtonThemeNavbar">
        <button
          type="button"
          className={`toggleContainer ${theme === 'dark' ? 'isActive' : ''}`}
          onClick={() => handleChange()}
          defaultValue={theme}
        >
          <ToggleKnob />
        </button>
      </div>
    </div>
  );
}
