import React, { useState, useEffect } from "react";
import style from "./Employee.module.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import UpdateForm from "../register/UpdateForm";
import ViewForm from "../register/ViewForm";

const Employee = () => {
  const [items, setItems] = useState([]);
  const [updateItem, setUpdateItem] = useState({});
  const [type, setType] = useState("view");
  const [viewItem, setViewItem] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [openRegistrationModal, setOpenRegistrationModal] = useState(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const fetchItems = async () => {
    try {
      const response = await axios.get(
        "https://sweede.app/DeliveryBoy/Get-Employee/"
      );
      setItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(
        `https://sweede.app/DeliveryBoy/delete-Employee/${id}`
      );
      fetchItems();
    } catch (error) {
      console.error("Error deleting employee data:", error);
    }
  };

  const openRegistration = () => {
    setOpenRegistrationModal(true);
  };

  const closeRegistration = () => {
    setOpenRegistrationModal(false);
  };

  const EditItem = async (id) => {
    setUpdateItem(items.find((item) => item.id === id));
    setOpenRegistrationModal(true);
    setType("edit");
  };

  const handleViewItem = (id) => {
    setViewItem(items.find((item) => item.id === id));
    setOpenRegistrationModal(true);
    setType("view");
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className={style.employee}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">DOB</TableCell>
              <TableCell align="left">Start Date</TableCell>
              <TableCell align="left">End Date</TableCell>
              <TableCell align="left">Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="left">{`${item.FirstName} ${item.LastName}`}</TableCell>
                <TableCell align="left">{item.DOB}</TableCell>
                <TableCell align="left">{item.StartDate}</TableCell>
                <TableCell align="left">{item.EndDate}</TableCell>
                <TableCell align="left">
                  <div className={style.description}>
                    {item.Description}
                    <span onClick={handleClick}>...</span>
                    <Popover
                      id={id}
                      open={open}
                      anchorEl={anchorEl}
                      onClose={handleClose}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "left",
                      }}
                    >
                      <Typography sx={{ p: 1 }} style={{ cursor: "pointer" }}>
                        <p onClick={() => handleViewItem(item.id)}>View</p>
                      </Typography>
                      <Typography sx={{ p: 1 }} style={{ cursor: "pointer" }}>
                        <p onClick={() => EditItem(item.id)}>Edit</p>
                      </Typography>
                      <Typography sx={{ p: 1 }} style={{ cursor: "pointer" }}>
                        <p onClick={() => deleteItem(item.id)}>Delete</p>
                      </Typography>
                    </Popover>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openRegistrationModal} onClose={closeRegistration}>
        {type === "view" ? (
          <ViewForm viewItem={viewItem} />
        ) : (
          <UpdateForm
            closeForm={closeRegistration}
            updateItem={updateItem}
            fetchItems={fetchItems}
          />
        )}
      </Dialog>
    </div>
  );
};

export default Employee;
