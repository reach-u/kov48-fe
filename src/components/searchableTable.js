import React, {Component, Fragment} from 'react';
import DataTable from './table';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import FreeText from './freeText';

const styles = theme => ({
  actionDiv: {
    marginTop: theme.spacing.unit,
    display: 'flex',
    alignItems: 'flex-end',
  },
  title: {
    marginBottom: theme.spacing.unit,
  },
  table: {
    overflow: 'auto',
    padding: 1,
  },
});

const filterInputData = (data, filterString, filterBy) => {
  return data.filter(row => {
    if (row[filterBy]) {
      return row[filterBy].toLowerCase().includes(filterString.toLowerCase());
    }
    return false;
  });
};

class SearchableTable extends Component {
  state = {
    inputData: this.props.data,
    filteredData: this.props.data,
    filterString: '',
  };

  static getDerivedStateFromProps(props, currentState) {
    if (currentState.inputData !== props.data) {
      return {
        inputData: props.data,
        filteredData: filterInputData(props.data, currentState.filterString, props.filterBy),
      };
    } else return null;
  }

  filterData = () => {
    const {inputData, filterString} = this.state;
    const {filterBy} = this.props;
    const results = filterInputData(inputData, filterString, filterBy);
    this.setState({filteredData: results});
  };

  setFilter = event => {
    this.setState({filterString: event.value}, () => this.filterData());
  };

  clearSearch = () => {
    this.setState({filterString: ''}, () => this.filterData());
  };

  render() {
    const {header, columns, classes, orderBy, searchLabel: label, tableHeight} = this.props;
    const {filteredData: data, filterString: value} = this.state;
    return (
      <Fragment>
        <Fragment>
          <Typography variant="title" className={classes.title}>
            {header}
          </Typography>
          <Divider />
          <div className={classes.actionDiv}>
            <FreeText
              value={value}
              onChange={this.setFilter}
              label={label}
              name="parameterString"
              placeholder="Otsi..."
            />
            <Button onClick={() => this.clearSearch()}>Tühjenda otsing</Button>
          </div>
        </Fragment>
        <div className={classes.table} style={{height: tableHeight}}>
          <DataTable columns={columns} data={data} orderBy={orderBy} />
        </div>
      </Fragment>
    );
  }
}

SearchableTable.defaultProps = {
  header: '',
  orderBy: 'station1',
  searchLabel: '',
  tableHeight: '500px',
};

SearchableTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterBy: PropTypes.string.isRequired,
  header: PropTypes.string,
  orderBy: PropTypes.string,
  searchLabel: PropTypes.string,
  tableHeight: PropTypes.string,
};

export default withStyles(styles)(SearchableTable);
