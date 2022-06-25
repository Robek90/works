import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MenuDots from '../../../components/buttons/DotsMenu.js';
import FotoAva from '../../../assets/image/FotoAva.jpg';
import Delete from '../../../assets/icon/DeleteHeaderInvocie.png';
import ArrowDown from '../../../assets/icon/ArrowDown.svg';

import useStyles from './muistyle';
import { StyledTableCell, StyledTableRow } from './styled';

export default function InvoiceTable(props) {
  const classes = useStyles();

  const [changeClass] = useState('Male');

  const [data] = useState(JSON.parse(localStorage.getItem('Invoice')) || props.list);
  console.log(data);
  const [selected, setSelected] = useState([]);

  const { handleRow } = props;

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (index) => selected.indexOf(index) !== -1;

  return (
    <>
      <TableContainer component={Paper} className={classes.listContainer}>
        <Table className={classes.table} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell className={classes.headerTable}>
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < data.length}
                  checked={data.length > 0 && selected.length === data.length}
                  onChange={handleSelectAllClick}
                />
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Invoice id</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Name</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Email</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Date</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <span className={classes.colTitle}>Status</span>
                <img src={ArrowDown} alt=""></img>
              </StyledTableCell>
              <StyledTableCell className={classes.headerTable}>
                <img className={classes.iconImg} src={Delete} alt="Edit" />
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody
            className={classes.tBody}
            onClick={() => {
              handleRow();
            }}
          >
            {data.map((row, id) => {
              const isItemSelected = isSelected(row.id);

              return (
                <StyledTableRow
                  role="checkbox"
                  tabIndex={-1}
                  aria-checked={isItemSelected}
                  selected={isItemSelected}
                  className={classes.row}
                  key={id}
                  onClick={(event) => {
                    // handleDrawRow(row)
                    handleClick(event, row.id);
                  }}
                >
                  <StyledTableCell className={classes.bodyTableLeft + ' ' + classes.bodyTable}>
                    <Checkbox checked={isItemSelected} />
                  </StyledTableCell>
                  <StyledTableCell className={classes.bodyTable}>{row.id}</StyledTableCell>
                  <StyledTableCell className={classes.bodyTable}>
                    <img className={classes.avatar} src={FotoAva} alt="" />
                    {row.firstName} {row.lastName}
                  </StyledTableCell>
                  <StyledTableCell className={classes.bodyTable}>{row.email}</StyledTableCell>
                  <StyledTableCell className={classes.bodyTable}>{row.number}</StyledTableCell>
                  <StyledTableCell className={classes.bodyTable}>
                    <p className={changeClass === row.gender ? classes.male : classes.female}>
                      {row.gender}
                    </p>
                  </StyledTableCell>
                  <StyledTableCell className={classes.bodyTableRight + ' ' + classes.bodyTable}>
                    <MenuDots
                    // deleteRow={deleteRow(index)}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
