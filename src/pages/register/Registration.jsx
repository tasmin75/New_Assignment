import React, { useState, useEffect } from "react";
import style from "./Registration.module.css";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";


const Registration = () => {

  const [values, setValues] = useState({
    FirstName: "",
    LastName: "",
    DOB: "",
    Study: "",
    StartDate: "",
    EndDate: "",
    CurrentSalary: "",
    Description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handeSaveData = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sweede.app/DeliveryBoy/Add-Employee/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      alert("Registration successful:", data);
      setValues({
        FirstName: "",
        LastName: "",
        DOB: "",
        Study: "",
        StartDate: "",
        EndDate: "",
        CurrentSalary: "",
        Description: "",
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={style.registration}>
      <h2>Employee Registration Form</h2>
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
            <label>End Day</label>
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
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
