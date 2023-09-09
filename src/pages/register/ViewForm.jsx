import React, { useState, useEffect } from "react";
import style from "./Registration.module.css";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";


const ViewForm = ({viewItem}) => {

  const [values, setValues] = useState({
    firstName:viewItem.FirstName,
    lastName:viewItem.LastName,
    dob:viewItem.DOB,
    study:viewItem.Study,
    startDay:viewItem.StartDate,
    endDay:viewItem.EndDate,
    currentSalary:viewItem.CurrentSalary,
    description:viewItem.Description,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };



  return (
    <div className={style.registration}>
      <h2>Employee View Form</h2>
      <form>
        <div className={style.flex_div}>
          <div className={style.column}>
            <label>First Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.column}>
            <label>Last Name</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              name="lastName"
              value={values.lastName}
            />
          </div>
        </div>

        <label>DOB</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="date"
          name="dob"
          value={values.dob}
          onChange={handleInputChange}
        />
        <label>Stydy</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="text"
          name="study"
          value={values.study}
          onChange={handleInputChange}
        />

        <div className={style.flex_div}>
          <div className={style.column}>
            <label>Start Day</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="date"
              name="startDay"
              value={values.startDay}
              onChange={handleInputChange}
            />
          </div>
          <div className={style.column}>
            <label>End Day</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="date"
              name="endDay"
              value={values.endDay}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <label>Current Salary</label>
        <TextField
          id="outlined-basic"
          variant="outlined"
          type="number"
          name="currentSalary"
          value={values.currentSalary}
          onChange={handleInputChange}
        />

        <label>Description</label>
        <TextareaAutosize
          aria-label="minimum height"
          minRows={8}
          style={{ width: "100%" }}
          name="description"
          value={values.description}
        />
      </form>
    </div>
  );
};

export default ViewForm;
