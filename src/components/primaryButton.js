import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.grey[50],
  },
});

const PrimaryButton = ({onClick, children, classes, disabled}) => {
  return (
    <Button
      disabled={disabled}
      color="secondary"
      mini
      variant="contained"
      className={classes.button}
      onClick={onClick}>
      {children}
    </Button>
  );
};

PrimaryButton.defaultProps = {
  disabled: false,
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  disabled: PropTypes.bool,
};

export default withStyles(styles)(PrimaryButton);
