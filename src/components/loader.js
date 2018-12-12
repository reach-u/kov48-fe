import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const Loader = ({loading}) => {
  return loading ? <p color="secondary" /> : null;
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default

  connect(state => ({
    loading: state.appLoader.isVisible,
  })
)(Loader);
