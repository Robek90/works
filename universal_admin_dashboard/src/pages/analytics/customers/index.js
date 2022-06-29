import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuDots from '../../../components/buttons/DotsMenu.js';
import FotoAva from '../../../assets/image/FotoAva.jpg';
import ArrowDown from '../../../assets/icon/ArrowDown.svg';
import loader from '../../../assets/animation/ghostLoader.gif';

import useStyles from './muistyle';
import { StyledTableCell, StyledTableRow } from './styled';

export default function Customers(props) {
  const classes = useStyles();

  const [changeClass] = useState('male');

  const { data, error, rows, deleteRow, handleRow, handleDrawRow, isLoaded } = props;

  return error ? (
    <>
      <div className={classes.errorBlock}>
        <p className={classes.errorTextTitle}>Something went wrong!!!</p>
        <p className={classes.errorText}>Try reloading the page or come back later...</p>
      </div>
    </>
  ) : !isLoaded ? (
    <>
      <div className={classes.loader}>
        <img src={loader} alt=""></img>
        <p className={classes.loaderText}>Loading...</p>
      </div>
    </>
  ) : (
    <>
      <TableContainer component={Paper} className={classes.listContainer}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Name</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Email</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Phone number</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Gender</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody
            className={classes.tBody}
            onClick={() => {
              handleRow();
            }}
          >
            {data.map((row, id) => (
              <StyledTableRow className={classes.row} key={id} onClick={() => handleDrawRow(row)}>
                <StyledTableCell className={classes.bodyTableLeft + ' ' + classes.bodyTable}>
                  <img className={classes.avatar} src={FotoAva} alt="" />
                  {row.name.first} {row.name.last}
                </StyledTableCell>
                <StyledTableCell className={classes.bodyTable}>{row.email}</StyledTableCell>
                <StyledTableCell className={classes.bodyTable}>{row.phone}</StyledTableCell>
                <StyledTableCell className={classes.bodyTable}>
                  <p className={changeClass === row.gender ? classes.male : classes.female}>
                    {row.gender}
                  </p>
                </StyledTableCell>
                <StyledTableCell className={classes.bodyTableRight + ' ' + classes.bodyTable}>
                  <MenuDots deleteRow={deleteRow} row={rows} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
