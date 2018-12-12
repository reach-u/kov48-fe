import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import withStyles from '@material-ui/core/styles/withStyles';
import TableTooltip from './tooltip';

const styles = {
  cell: {
    verticalAlign: 'top',
    padding: '5px',
  },
};

const DataTableBody = ({data, columns, classes}) => {
  const formatValue = (value, getFormat, rowData) => {
    if (typeof getFormat === 'function') {
      return getFormat(value, rowData);
    }
    return value;
  };

  const formatStyle = (value, getStyle) => {
    if (typeof getStyle === 'function') {
      return getStyle(value);
    }
    return {};
  };

  const handleClick = (value, clickHandler) => {
    if (value && typeof clickHandler === 'function') {
      clickHandler(value);
    }
    return () => {};
  };
  const formatTooltip = (value, getTooltip) => {
    if (value && typeof getTooltip === 'function') {
      return getTooltip(value);
    }
  };

  return (
    <TableBody>
      {data.map((row, idx) => {
        return (
          <TableRow hover key={row.id || idx}>
            {columns.map(column => {
              const {
                id,
                name,
                clickEvent,
                formatStyle: cellStyle,
                formatValue: cellValue,
                formatTooltip: cellTooltip,
              } = column;
              const cell = (
                <TableCell
                  className={classes.cell}
                  onClick={() => handleClick(row[name], clickEvent)}
                  style={formatStyle(row[name], cellStyle)}>
                  {formatValue(row[name], cellValue, row)}
                </TableCell>
              );
              const tooltip = formatTooltip(row[name], cellTooltip);
              return (
                <Fragment key={id}>
                  {!!tooltip ? <TableTooltip title={tooltip}>{cell}</TableTooltip> : cell}
                </Fragment>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

DataTableBody.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(DataTableBody);
