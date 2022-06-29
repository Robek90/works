import React from 'react';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Dots from '../../../assets/icon/MenuDots.svg';
import ArrowDown from '../../../assets/icon/ArrowDown.svg';
import { inject, observer } from 'mobx-react';

import useStyles from './muistyle';
import { StyledTableCell, StyledTableRow } from './styled';

export default inject('product')(
  observer((props) => {
    const classes = useStyles();

    return (
      <div className={classes.orderContainer}>
        <div className={classes.orderHeader}>
          <div className={classes.orderTitle}>Recent Orders</div>
          <img className={classes.orderSeeMore} src={Dots} alt=""></img>
        </div>
        <TableContainer className={classes.orderTable} component={Paper}>
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
              {props.product.products.map((row, id) => (
                <StyledTableRow className={classes.row} key={id}>
                  <StyledTableCell className={classes.bodyTableLeft + ' ' + classes.bodyTable}>
                    #{row.id}
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
  })
);
