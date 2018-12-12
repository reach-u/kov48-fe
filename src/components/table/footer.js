import React from 'react';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DataTablePagination from './pagination';

const DataTableFooter = ({totalCount, page, size, onChangePage, onChangeRowsPerPage}) => {
  return (
    <TableFooter>
      <TableRow>
        <TablePagination
          colSpan={99}
          count={totalCount}
          rowsPerPage={size}
          rowsPerPageOptions={[10, 50, 100]}
          page={page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
          ActionsComponent={DataTablePagination}
          labelRowsPerPage="Kirjeid lehel:"
          labelDisplayedRows={({from, to, count}) => `${from}-${to} / ${count}`}
        />
      </TableRow>
    </TableFooter>
  );
};

export default DataTableFooter;
