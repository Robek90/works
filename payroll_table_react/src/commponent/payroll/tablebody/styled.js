import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    textAlign: 'center',
    verticalAlign: 'middle',
    borderSpacing: '0 10px',
    padding: '10px',
    backgroundColor: '#bba996',
    color: '#F9C941',
    borderTop: '2px solid #56433D',
    borderBottom: '2px solid #56433D',
    borderRight: '2px solid #56433D',
  },
  // '&:first-child': {
  //   borderLeft: '2px solid #56433D',
  //   borderRight: '2px solid #56433D',
  // },
}));

export { StyledTableCell };