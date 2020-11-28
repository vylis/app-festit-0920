import React, { Component } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';

class Style extends Component {
  constructor() {
    super();
    this.state = {
      style: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    Axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/styles/${match.params.id}`
    ).then((response) => this.setState({ style: response.data[0] }));
  }

  render() {
    const { style } = this.state;
    return <h1 className="styleName">{style.name}</h1>;
  }
}

Style.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.number }).isRequired,
  }).isRequired,
};

export default Style;
