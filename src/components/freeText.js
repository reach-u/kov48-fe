import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import PropTypes from 'prop-types';
import {styles} from './selectComponents';

class FreeTextFilter extends Component {
  handleChange = event => {
    this.props.onChange({name: this.props.name, value: event.target.value});
  };

  render() {
    const {classes, helperText, placeholder, label, name, value, width, defaultValue} = this.props;
    return (
      <div className={classes.mainDiv} style={{width: width}}>
        <Typography className={classes.inputLabel}>{label}</Typography>
        <TextField
          defaultValue={defaultValue}
          fullWidth
          name={name}
          onChange={this.handleChange}
          helperText={helperText}
          placeholder={placeholder}
          value={value}
        />
      </div>
    );
  }
}

FreeTextFilter.defaultProps = {
  helperText: '',
  placeholder: '',
  label: '',
  width: '200px',
  defaultValue: '',
};

FreeTextFilter.propTypes = {
  defaultValue: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
};

export default withStyles(styles)(FreeTextFilter);
