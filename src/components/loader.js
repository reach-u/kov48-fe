import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import LinearProgress from '@material-ui/core/LinearProgress';
import {compose} from 'redux';
import {connect} from 'react-redux';

const styles = {
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
};

const Loader = ({loading, classes}) => {
  return loading ? <LinearProgress className={classes.loader} color="secondary" /> : null;
};

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default compose(
  withStyles(styles),
  connect(state => ({
    loading: state.appLoader.isVisible,
  }))
)(Loader);
