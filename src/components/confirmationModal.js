import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PrimaryButton from './primaryButton';

const styles = theme => ({
  main: {
    padding: theme.spacing.unit * 3,
  },
  title: {
    margin: theme.spacing.unit,
  },
  actions: {
    display: 'flex',
    marginRight: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 3,
    justifyContent: 'center',
  },
  scrollingContainer: {
    overflow: 'auto',
    maxHeight: '80vh',
    [theme.breakpoints.down('lg')]: {
      maxHeight: '50vh',
    },
  },
});

const ConfirmationModal = ({title, classes, onOk, onCancel, children, okLabel, cancelLabel}) => {
  return (
    <Paper className={classes.main}>
      <Typography className={classes.title} variant="title">
        {title}
      </Typography>
      <Divider />
      <div className={classes.scrollingContainer}>{children}</div>
      {children ? <Divider /> : null}
      <div className={classes.actions}>
        <PrimaryButton onClick={onOk}>{okLabel}</PrimaryButton>
        <PrimaryButton onClick={onCancel}>{cancelLabel}</PrimaryButton>
      </div>
    </Paper>
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

export default withStyles(styles)(ConfirmationModal);
