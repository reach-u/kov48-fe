/**
 * @author kaspar.arme@reach-u.com
 * @since 2018-08-16
 */

import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  tooltip: {
    background: theme.palette.common.white,
    color: theme.palette.text.primary,
    boxShadow: theme.shadows[1],
    fontSize: 14,
  },
});

const TableTooltip = ({classes, title, children}) => {
  return (
    <Tooltip classes={{tooltip: classes.tooltip}} title={title}>
      {children}
    </Tooltip>
  );
};

TableTooltip.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default withStyles(styles)(TableTooltip);
