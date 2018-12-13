import React from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from './primaryButton';

const ConfirmationModal = ({title, onOk, onCancel, children, okLabel, cancelLabel}) => {
  return (
    <div>
      <span variant="title">{title}</span>
      <div>{children}</div>
      {children ? <div> ------------------------------------------------- </div> : null}
      <div>
        <PrimaryButton onClick={onOk}>{okLabel}</PrimaryButton>
        <PrimaryButton onClick={onCancel}>{cancelLabel}</PrimaryButton>
      </div>
    </div>
  );
};

ConfirmationModal.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'Loobu',
};

ConfirmationModal.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string.isRequired,
  onOk: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export default ConfirmationModal;
