import React, { useState, useEffect } from "react";
import style from "./Registration.module.css";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";


const UpdateForm = ({updateItem,fetchItems,closeForm}) => {

  const [values, setValues] = useState({
    FirstName: updateItem.FirstName,
    LastName: updateItem.LastName,
    DOB: updateItem.DOB,
    Study: updateItem.Study,
    StartDate: updateItem.StartDate,
    EndDate: updateItem.EndDate,
    CurrentSalary: updateItem.CurrentSalary,
    Description: updateItem.Description,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handeSaveData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://sweede.app/DeliveryBoy/update-Employee/${updateItem.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("Update successful:", data);
        fetchItems(); 
        closeForm(); 
        alert("Update successful:", data)
      } else {
        const errorData = await response.json();
        console.log("Update error:", errorData);
      }
    } catch (error) {
      alert("Update error:", error);
    }
  };
  

  return (
    <div className={style.registration}>
      <h2>Employee Update Form</h2>
      <form onSubmit={handeSaveData}>
        <div className={style.flex_div}>
          <div className={style.column}>
            <label>First Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="FirstName"
              value={values.FirstName}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.column}>
            <label>Last Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="LastName"
              value={values.LastName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <label>DOB</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="date"
          name="DOB"
          value={values.DOB}
          onChange={handleInputChange}
        />
        <label>Study</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          name="Study"
          value={values.Study}
          onChange={handleInputChange}
        />

        <div className={style.flex_div}>
          <div className={style.column}>
            <label>Start Date</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="date"
              name="StartDate"
              value={values.StartDate}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.column}>
            <label>End Date</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="date"
              name="EndDate"
              value={values.EndDate}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <label>Current Salary</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="number"
          name="CurrentSalary"
          value={values.CurrentSalary}
          onChange={handleInputChange}
        />

        <label>Description</label>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={8}
          style={{ width: "100%" }}
          name="Description"
          value={values.Description}
          onChange={handleInputChange}
        />

        <div className={style.btn}>
          <button type="reset">Cancel</button>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
