import { Link } from 'react-router-dom';
import './createAccount.css';
import { useState } from 'react';
import axios from 'axios'

function CreateAccount() {
 let [backToLogin,updateBackToLogin]=useState(false)//state used to navigate back to login page after succesfull registration
 let [emailexisteserror,updateEmailExiste]=useState(false);
  const [newdata, updatedata] = useState({
    firstName: "",
    lastName: "",
    hostelName: "",
    location: "",
    mobileNumber: "",
    email: "",
    password: "",
    conformpassword: ""
  });

  const [errors, updateerrors] = useState({
    firstname: false,
    lastname: false,
    hostelname: false,
    location: false,
    Mobilenumber: false,
    emailid: false,
    password: false,
    conformpassword: false
  });

  function handleChange(e) {
    updatedata({
      ...newdata,
      [e.target.name]: e.target.value
    });
  }
  async function  handleSubmit(){

    const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
   const {conformpassword,...filteredstate}=newdata;
    const dataWithDate = {
      ...filteredstate,
      registrationDate: currentDate
    };
    try {
      console.log(dataWithDate)
      const response = await axios.post("http://localhost:8080/register",dataWithDate);
  
      if (response.status===200) {
       updateEmailExiste(false)
        updateBackToLogin(true); // navigate back to login
      }
    } catch (error) {
      updateEmailExiste(true)
      console.error("Registration error:", error);
    }
  }

  function validate() {
    console.log("clicked")
    let newErrors = { ...errors };
    let temp = true;

    const mobilePattern = /^[6-9]\d{9}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    newErrors.firstname = newdata.firstName === "";
    newErrors.lastname = newdata.lastName === "";
    newErrors.hostelname = newdata.hostelName === "";
    newErrors.location = newdata.location === "";
    newErrors.Mobilenumber = !mobilePattern.test(newdata.mobileNumber);
    newErrors.emailid = !emailPattern.test(newdata.email);
    newErrors.password = !passwordPattern.test(newdata.password);
    newErrors.conformpassword = newdata.password !== newdata.conformpassword;

    // Check if any error is true
    temp = !Object.values(newErrors).includes(true);

    updateerrors(newErrors);

    if (temp) {
     handleSubmit();
    }
  }

  return (
    <>
      <div className='container d-flex flex-column createAccountdiv'>
        <h1 className='text-center text-primary'>Create Account</h1>

        <div>
          <label>First Name:</label>
          <input name="firstName" className='form-control' type='text' value={newdata.firstName} onChange={handleChange} />
          {errors.firstname && <p className='text-danger mt-2'>Invalid first name</p>}
        </div>

        <div>
          <label>Last Name:</label>
          <input name="lastName" className='form-control' type='text' value={newdata.lastName} onChange={handleChange} />
          {errors.lastname && <p className='text-danger mt-2'>Invalid last name</p>}
        </div>

        <div>
          <label>Hostel Name:</label>
          <input name="hostelName" className='form-control' type='text' value={newdata.hostelName} onChange={handleChange} />
          {errors.hostelname && <p className='text-danger mt-2'>Invalid hostel name</p>}
        </div>

        <div>
          <label>Location:</label>
          <input name="location" className='form-control' type='text' value={newdata.location} onChange={handleChange} />
          {errors.location && <p className='text-danger mt-2'>Invalid location</p>}
        </div>

        <div>
          <label>Mobile Number:</label>
          <input name="mobileNumber" className='form-control' type='text' value={newdata.mobileNumber} onChange={handleChange} />
          {errors.Mobilenumber && <p className='text-danger mt-2'>Invalid mobile number</p>}
        </div>

        <div>
          <label>Email ID:</label>
          <input name="email" className='form-control' type='text' value={newdata.email} onChange={handleChange} />
          {errors.emailid && <p className='text-danger mt-2'>Invalid email ID</p>}
          {emailexisteserror && <p className='text-danger mt-2'> entered email is already exists</p>}
        </div>

        <div>
          <label>Password:</label>
          <input name="password" className='form-control' type='password' value={newdata.password} onChange={handleChange} />
          {errors.password && (
            <p className='text-danger mt-2'>
              Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 digit, and 1 special character
            </p>
          )}
        </div>

        <div>
          <label>Confirm Password:</label>
          <input name="conformpassword" className='form-control' type='password' value={newdata.conformpassword} onChange={handleChange} />
          {errors.conformpassword && <p className='text-danger mt-2'>Passwords do not match</p>}
        </div>

        <div className='text-center'>
          <button className='btn btn-primary mt-4' onClick={validate}>Register</button>
        </div>
       {backToLogin && (
  <>
    <div className='text-center'>
      <Link to={'/'}>Back to login</Link>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 
        5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 
        0 0 0-.01-1.05z"/>
      </symbol>
    </svg>

    <div className="alert alert-success d-flex align-items-center" role="alert">
      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
        <use href="#check-circle-fill" />
      </svg>
      <div>
        Registered successfully!
      </div>
    </div>
  </>
)}

      </div>
    </>
  );
}

export default CreateAccount;
