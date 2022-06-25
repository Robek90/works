import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles(() => ({
  head: {
    paddingTop: '30px',
    backgroundColor: '#white',
    color: '#black',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(() => ({
  root: {
    background: '#ffffff',
    height: '60px',
  },
}))(TableRow);

export { StyledTableCell, StyledTableRow };
