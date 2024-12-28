import { Box, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import './Registration.css'
import school from '../assets/school1.png'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    mobile: "",
    email: "",
    gender: "",
    dob: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.mobile || !/^[\d]{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.course) newErrors.course = "Please select a course.";
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Please fill the form correctly.");
    } else {
      setErrors({});
    }
  };

  const handleRegister = () => {
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      alert("Please fill the form correctly.");
    } else {
      alert("Your form is Registered successfully!");
      setFormData({
        name: "",
        address: "",
        mobile: "",
        email: "",
        gender: "",
        dob: "",
        course: "",
      });
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      address: "",
      mobile: "",
      email: "",
      gender: "",
      dob: "",
      course: "",
    });
    setErrors({});
  };

  return (
    <div style={{ minHeight: "100vh" }} className="main d-lg-flex justify-content-center align-items-center p-2">
      <div className="p-5">
        <form onSubmit={handleSubmit}>
          <h2>Higher Secondary Admission Form</h2>
          <div className="mt-5">
            <label className="me-4">Name</label>
            <TextField
              style={{ marginLeft: "15px" }}
              id="name"
              label="Enter Your Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p className="error text-danger">{errors.name}</p>}
          </div>
          <div className="mt-3">
            <label className="me-3">Address</label>
            <TextField
              id="address"
              label="Address"
              multiline
              maxRows={4}
              style={{ marginLeft: "10px", width: "220px" }}
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {errors.address && <p className="error text-danger">{errors.address}</p>}
          </div>
          <div className="mt-3">
            <label className="me-3">Mobile</label>
            <TextField
              style={{ marginLeft: "16px" }}
              id="mobile"
              label="Enter Your Number"
              variant="outlined"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
            {errors.mobile && <p className="error text-danger">{errors.mobile}</p>}
          </div>
          <div className="mt-3">
            <label className="me-3">Email</label>
            <TextField
              style={{ marginLeft: "27px" }}
              id="email"
              label="Email Address"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p className="error text-danger">{errors.email}</p>}
          </div>
          <div className="mt-3">
            <FormLabel id="gender-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender-label"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            {errors.gender && <p className="error text-danger">{errors.gender}</p>}
          </div>
          <div className="mt-1">
            <label>Date of Birth</label>
            <TextField
              type="date"
              id="dob"
              variant="outlined"
              name="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />
            {errors.dob && <p className="error text-danger">{errors.dob}</p>}
          </div>
          <div className="mt-2">
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="course-label">Course</InputLabel>
                <Select
                  labelId="course-label"
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                >
                  <MenuItem value="Biology Science">Biology Science</MenuItem>
                  <MenuItem value="Computer Science">Computer Science</MenuItem>
                  <MenuItem value="Commerce">Commerce</MenuItem>
                  <MenuItem value="Humanities">Humanities</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {errors.course && <p className="error text-danger">{errors.course}</p>}
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <div className="mt-3">
              <button className="btn btn-success" type="submit">
                Submit<i class="fa-solid fa-arrow-right ms-2 text-warning"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div style={{ position: "relative" }} className="display-content p-5">
        <div className="d-flex align-items-center justify-content-center">
          <h2>Check your Details</h2>
        </div>
        <div style={{ position: "absolute" }} className="mt-5">
          <p className="fw-mediom">Name: <span className="fw-bolder">{formData.name}</span></p>
          <p className="fw-mediom">Address: <span className="fw-bolder">{formData.address}</span></p>
          <p className="fw-mediom">Mobile: <span className="fw-bolder">{formData.mobile}</span></p>
          <p className="fw-mediom">Email: <span className="fw-bolder">{formData.email}</span></p>
          <p className="fw-mediom">Gender: <span className="fw-bolder">{formData.gender}</span></p>
          <p className="fw-mediom">Date of Birth: <span className="fw-bolder">{formData.dob}</span></p>
          <p className="fw-mediom">Course: <span className="fw-bolder">{formData.course}</span></p>
        </div>

        <div style={{ bottom:"0"}} className="">
          <img className="img-fluid " src={school} alt="school" />
        </div>

        <div className="d-flex align-items-center justify-content-center">
          <div className="mt-3">
            <button className="btn btn-primary" type="button" onClick={handleRegister}>
              Register
            </button>
            <button className="btn btn-secondary ms-3" type="button" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegistrationForm;
