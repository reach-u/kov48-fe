import React from 'react';
import {Alert} from 'reactstrap';

const ToastMessageContent = ({message, type, open, handleClose}) => {
  return (
    <Alert isOpen={open} color={type} toggle={handleClose}>
      {message}
    </Alert>
  );
};

export default ToastMessageContent;
