import { styled } from '@mui/material/styles';
import TableContainer, { tableContainerClasses } from '@mui/material/TableContainer';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

// const StyledTableCell = styled(TableContainer)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   }
// }));

// export { StyledTableCell };

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  [`&.${tableContainerClasses.root}`]: {
        backgroundColor: '#bba996',
        borderRadius: '0px',
        boxShadow: 'none',
      }
  }
));

export default StyledTableContainer;