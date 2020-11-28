import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../style/CSS/Home/BoxStyle.css';

class BoxStyle extends Component {
  constructor() {
    super();
    this.state = {
      listofStyles: [],
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/api/styles`)
      .then((response) => this.setState({ listofStyles: response.data }));
  }

  render() {
    const { listofStyles } = this.state;

    return (
      <div className="pageStyle">
        {listofStyles.map((style) => (
          <div className="pageStyle_box">
            <Link
              to={`/style/${style.idstyle}`}
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '54px',
              }}
            >
              <div
                className="insideStyleBox"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundImage: `url(${style.image})`,
                }}
              >
                <div className="titleBox">
                  <div className="titleStyleBox">
                    <div className="styleName">
                      <h2 className="pName">{style.name}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

export default BoxStyle;
