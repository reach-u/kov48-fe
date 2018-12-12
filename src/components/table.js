import React from 'react';
import PropTypes from 'prop-types';
import requiredIf from 'react-required-if';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import DataTableHeader from './table/header';
import DataTableBody from './table/body';
import DataTableFooter from './table/footer';

const styles = theme => ({
  header: {
    marginBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
    margin: 1,
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    marginTop: theme.spacing.unit * 2,
  },
});

const DataTable = ({
  columns,
  data,
  header,
  classes,
  children,
  totalCount,
  page,
  size,
  onChangePage,
  onChangeRowsPerPage,
  onSortingChange,
  showPagination,
  order,
  orderBy,
}) => {
  return data.length > 0 ? (
    <Paper className={classes.paper}>
      <Typography className={classes.header} variant="title">
        {header}
      </Typography>
      {children}
      <Table className={classes.table}>
        <DataTableHeader
          order={order}
          orderBy={orderBy}
          columns={columns}
          onRequestSort={onSortingChange}
        />
        <DataTableBody data={data} columns={columns} />
        {showPagination && (
          <DataTableFooter
            totalCount={totalCount}
            page={page}
            size={size}
            onChangePage={onChangePage}
            onChangeRowsPerPage={onChangeRowsPerPage}
          />
        )}
      </Table>
    </Paper>
  ) : null;
};

DataTable.defaultProps = {
  header: '',
  order: 'asc',
  orderBy: 'index',
  showPagination: false,
};

DataTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string,
  order: PropTypes.string,
  orderBy: PropTypes.string,
  totalCount: requiredIf(PropTypes.number, props => props.showPagination),
  page: requiredIf(PropTypes.number, props => props.showPagination),
  size: requiredIf(PropTypes.number, props => props.showPagination),
  onChangePage: requiredIf(PropTypes.func, props => props.showPagination),
  onChangeRowsPerPage: requiredIf(PropTypes.func, props => props.showPagination),
  onSortingChange: requiredIf(PropTypes.func, props =>
    props.columns.some(column => column.sortable)
  ),
  showPagination: PropTypes.bool,
};

export default withStyles(styles)(DataTable);
