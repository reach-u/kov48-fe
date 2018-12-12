/**
 * @author kaspar.arme@reach-u.com
 * @since 2018-08-03
 */

import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import withStyles from '@material-ui/core/styles/withStyles';
import requiredIf from 'react-required-if';

const styles = {
  head: {
    backgroundColor: '#fff',
    position: 'sticky',
    top: 0,
    paddingLeft: '5px',
    zIndex: 100,
  },
};

const DataTableHeader = ({onRequestSort, columns, orderBy, order, classes}) => {
  const createSortHandler = (property, order) => _event => {
    onRequestSort(property, order);
  };
  return (
    <TableHead>
      <TableRow>
        {columns.map(column => {
          return (
            <TableCell
              key={column.id}
              className={classes.head}
              padding="none"
              sortDirection={orderBy === column.id ? order : false}
              variant="head">
              {column.sortable ? (
                <Tooltip title="Sorteeri" placement="bottom" enterDelay={300}>
                  <TableSortLabel
                    active={orderBy === column.id}
                    direction={order}
                    onClick={createSortHandler(column.id, order)}>
                    {column.label}
                  </TableSortLabel>
                </Tooltip>
              ) : (
                <div>{column.label}</div>
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

DataTableHeader.propTypes = {
  onRequestSort: requiredIf(PropTypes.func, props => props.columns.some(column => column.sortable)),
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  orderBy: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
};

export default withStyles(styles)(DataTableHeader);
