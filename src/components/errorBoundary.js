import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from './primaryButton';



class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  handleClick = () => {
    window.location.reload();
  };

  render() {
    const {children} = this.props;
    const {hasError} = this.state;

    if (hasError) {
      return (
        <div >
          <p variant="display1">Midagi läks valesti.</p>
          <PrimaryButton onClick={this.handleClick}>
            Lae uuesti
          </PrimaryButton>
        </div>
      );
    } else {
      return children;
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
//  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ErrorBoundary;
