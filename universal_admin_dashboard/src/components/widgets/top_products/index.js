import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Position from '../../../assets/icon/Position.svg';
import ArrowDown from '../../../assets/icon/ArrowDown.svg';

import useStyles from './muistyle';
import { StyledTableCell, StyledTableRow } from './styled';

export default function TopProducts(props) {
  const classes = useStyles();

  const { data, setRow } = props;

  function handleDrawRow(i) {
    setRow(i);
  }

  return (
    <div className={classes.productContainer}>
      <div className={classes.productHeader}>
        <div className={classes.productTitle}>Top Selling Products</div>
        <div className={classes.productSeeMore}>See More</div>
      </div>
      <TableContainer className={classes.productTable} component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>SN</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Name</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Price</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Total Order </span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Total Sales</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tBody}>
            {data.map((row, id) => (
              <StyledTableRow className={classes.row} key={id} onClick={() => handleDrawRow(row)}>
                <StyledTableCell className={classes.bodyTableLeft + ' ' + classes.bodyTable}>
                  {row.id <= 3 ? <img src={Position} alt="" /> : row.id}
                </StyledTableCell>
                <StyledTableCell className={classes.bodyTable}>
                  <Link className={classes.nameLink}>{row.name}</Link>
                </StyledTableCell>
                <StyledTableCell className={classes.bodyTable}>{'$' + row.price}</StyledTableCell>
                <StyledTableCell className={classes.bodyTable}>{row.totalorder}</StyledTableCell>
                <StyledTableCell className={classes.bodyTableRight + ' ' + classes.bodyTable}>
                  {'$' + row.price * row.totalorder}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
