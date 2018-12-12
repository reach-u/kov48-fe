import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import PrimaryButton from './primaryButton';
import withStyles from '@material-ui/core/styles/withStyles';
import Reload from '@material-ui/icons/Cached';

const styles = theme => ({
  errorPage: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconWrapper: {
    marginLeft: theme.spacing.unit,
    marginTop: 4,
  },
});

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  handleClick = () => {
    window.location.reload();
  };

  render() {
    const {classes, children} = this.props;
    const {hasError} = this.state;

    if (hasError) {
      return (
        <div className={classes.errorPage}>
          <Typography variant="display1">Midagi läks valesti.</Typography>
          <PrimaryButton onClick={this.handleClick}>
            Lae uuesti
            <span className={classes.iconWrapper}>
              <Reload />
            </span>
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
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(ErrorBoundary);
