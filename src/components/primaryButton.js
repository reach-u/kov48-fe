import React from 'react';
import PropTypes from 'prop-types';



const PrimaryButton = ({onClick, children, disabled}) => {
  return (
    <input
      disabled={disabled}
      color="secondary"
      mini
      variant="contained"
      onClick={onClick}>
      {children}
    </input>
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

export default PrimaryButton;
