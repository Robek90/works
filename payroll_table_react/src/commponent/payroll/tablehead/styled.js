import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    borderSpacing: '0 10px',
    fontFamily: 'Open Sans, sans-serif',
    fontWeight: 'bold',
    padding: '10px 10px',
    backgroundColor: '#56433D',
    color: '#F9C941',
    borderRight: '2px solid',
    fontSize: '0.9em',
  },
  [`&.static`]: {
    backgroundColor: 'transparent',
    borderBottom: 'none',
    borderRight: 'none',
    textAlign: 'center'
  },
  '&:first-of-type': {
    width:'80px',
    backgroundColor: '#bba996',
    textAllign: 'left',
    border: 0,
    borderRight: '2px solid',
  },
  '&:last-of-type': {
    width:'120px',
    backgroundColor: '#bba996',
    textAllign: 'left',
    border: 0,
  },
}));
export { StyledTableCell };