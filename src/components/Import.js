import React from "react";
import { useState } from "react";
import {
  Button,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Menu,
  MenuItem,
} from "@material-ui/core";

import { MoreVert, Delete } from "@material-ui/icons";

const Import = (props) => {
  const [anchorEl, setAnchorEl] = useState(false);


  const handleMenuOpen = (e) => {
    console.log(e.currentTarget, "event");
    setAnchorEl(e.currentTarget);
  };
  const handleMenuclose = () => {
    setAnchorEl(false);
  };

  const deleteRow = (i) => {
    props.deleteMake(i);
    handleMenuclose();
  };
  
  const numOfRows = props.makes.length;

  return (
    <Container>
      <h2>COUNT: {numOfRows}</h2>
      <Button variant="contained" color="primary" onClick={props.fetchMakes}>
        Import
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Make</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.makes.map((make, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>{make.MakeId}</TableCell>
                <TableCell>{make.MakeName}</TableCell>
                <TableCell>
                  <MoreVert onClick={handleMenuOpen} />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuclose}
      >
        <MenuItem onClick={deleteRow}>
          <Delete />
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Import;
