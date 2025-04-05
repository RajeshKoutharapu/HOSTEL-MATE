import { Link } from 'react-router-dom';
import './createAccount.css';
import { useState } from 'react';

function CreateAccount() {
 let [backToLogin,updateBackToLogin]=useState(false)//state used to navigate back to login page after succesfull registration
  const [newdata, updatedata] = useState({
    firstname: "",
    lastname: "",
    hostelname: "",
    location: "",
    Mobilenumber: "",
    emailid: "",
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

  function validate() {
    let newErrors = { ...errors };
    let temp = true;

    const mobilePattern = /^[6-9]\d{9}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    newErrors.firstname = newdata.firstname === "";
    newErrors.lastname = newdata.lastname === "";
    newErrors.hostelname = newdata.hostelname === "";
    newErrors.location = newdata.location === "";
    newErrors.Mobilenumber = !mobilePattern.test(newdata.Mobilenumber);
    newErrors.emailid = !emailPattern.test(newdata.emailid);
    newErrors.password = !passwordPattern.test(newdata.password);
    newErrors.conformpassword = newdata.password !== newdata.conformpassword;

    // Check if any error is true
    temp = !Object.values(newErrors).includes(true);

    updateerrors(newErrors);

    if (temp) {
      alert("Form submitted successfully!");
      updateBackToLogin(true)
    }
  }

  return (
    <>
      <div className='container d-flex flex-column createAccountdiv'>
        <h1 className='text-center text-primary'>Create Account</h1>

        <div>
          <label>First Name:</label>
          <input name="firstname" className='form-control' type='text' value={newdata.firstname} onChange={handleChange} />
          {errors.firstname && <p className='text-danger mt-2'>Invalid first name</p>}
        </div>

        <div>
          <label>Last Name:</label>
          <input name="lastname" className='form-control' type='text' value={newdata.lastname} onChange={handleChange} />
          {errors.lastname && <p className='text-danger mt-2'>Invalid last name</p>}
        </div>

        <div>
          <label>Hostel Name:</label>
          <input name="hostelname" className='form-control' type='text' value={newdata.hostelname} onChange={handleChange} />
          {errors.hostelname && <p className='text-danger mt-2'>Invalid hostel name</p>}
        </div>

        <div>
          <label>Location:</label>
          <input name="location" className='form-control' type='text' value={newdata.location} onChange={handleChange} />
          {errors.location && <p className='text-danger mt-2'>Invalid location</p>}
        </div>

        <div>
          <label>Mobile Number:</label>
          <input name="Mobilenumber" className='form-control' type='text' value={newdata.Mobilenumber} onChange={handleChange} />
          {errors.Mobilenumber && <p className='text-danger mt-2'>Invalid mobile number</p>}
        </div>

        <div>
          <label>Email ID:</label>
          <input name="emailid" className='form-control' type='text' value={newdata.emailid} onChange={handleChange} />
          {errors.emailid && <p className='text-danger mt-2'>Invalid email ID</p>}
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
        { backToLogin && <div className='text-centet'>
           <Link to={'/'}> Back  to login</Link>
        </div> }
      </div>
    </>
  );
}

export default CreateAccount;
