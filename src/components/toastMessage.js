import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import ToastMessageContent from './toastMessage/content';
import store from '../store';
import {clearToast} from '../store/actions/toastMessage';

export class ToastMessage extends Component {
  queue = [];

  state = {
    open: false,
    messageObject: {},
  };

  componentDidUpdate = (prevProps, _prevState) => {
    const {message, type} = this.props.toast;
    if (message && message !== prevProps.toast.message) {
      this.queue.push({
        type,
        message,
        key: new Date().getTime(),
      });

      if (this.state.open) {
        this.setState({open: false});
      } else {
        this.processQueue();
      }
    }
  };

  processQueue = () => {
    const queSize = this.queue.length;
    if (queSize > 0) {
      setTimeout(() => {
        this.setState({
          messageObject: this.queue.shift(),
          open: true,
        });
      }, queSize * 1000);
    }
  };

  handleClose = (_event, reason) => {
    if (reason === 'clickaway') {
      return null;
    } else {
      this.setState({open: false, messageObject: {}}, () => {
        store.dispatch(clearToast('[Toast message]'));
      });
    }
  };

  handleExited = () => {
    this.processQueue();
  };

  render() {
    const {
      messageObject: {key, message, type},
      open,
    } = this.state;

    return (
      <div
        key={key}
        style={{marginTop: '5px'}}
        open={open}
        onClose={this.handleClose}
        onExited={this.handleExited}>
        <ToastMessageContent message={message} type={type} handleClose={this.handleClose} />
      </div>
    );
  }
}

ToastMessage.propTypes = {
  toast: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    toast: state.toastMessage,
  }),
  null
)(ToastMessage);
