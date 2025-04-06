import { useState } from 'react';
import './addhosteller.css';

function AddHosteller() {
  const [hostlerData, updatehostler] = useState({
    firstname: "",
    lastname: "",
    fathername: "",
    mobilenumber: "",
    fathermobilenumber: "",
    adharnumber: "",
    nativePlace: "",
    profestion: "",
    AllotedRoom: "",
    Mode: "",
    paymentMonths: ""
  });
  const [errors,updateerrors]=useState({
        firstname:false,
        lastname:false,
        fathername:false,
        mobilenumber:false,
        fathermobilenumber:false,
        adharnumber:false,
        nativePlace:false,
        profestion:false,
        AllotedRoom:false,
        Mode:false,
        paymentMonths:false
      }
  )

  function handleChange(e) {
    updatehostler({
      ...hostlerData,
      [e.target.name]: e.target.value
    });
  }

  function validate(){
   let newErrors={...errors}
    const mobilePattern = /^[6-9]\d{9}$/;
    const aadhaarPattern = /^\d{12}$/;
     let check=true;

     newErrors.firstname=hostlerData.firstname==="";
     newErrors.lastname=hostlerData.lastname==="";
     newErrors.fathername=hostlerData.fathername==="";
     newErrors.mobilenumber=!mobilePattern.test(hostlerData.mobilenumber);
     newErrors.fathermobilenumber=!mobilePattern.test(hostlerData.fathermobilenumber);
     newErrors.adharnumber=!aadhaarPattern.test(hostlerData.adharnumber);
     newErrors.nativePlace=hostlerData==="";
     newErrors.profestion=hostlerData==="";
     newErrors.AllotedRoom=hostlerData==="";
     newErrors.Mode=hostlerData.Mode==="";
     newErrors.paymentMonths=hostlerData==="";
     check=!Object.values(newErrors).includes(true);
      updateerrors(newErrors);
      if(check){
        alert("suceess")
      }
    
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h3>Add Hosteller</h3>
        </div>
        <div className="card-body">
          <form className="row g-3">

            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input name="firstname" type="text" className="form-control" placeholder="First Name" value={hostlerData.firstname} onChange={handleChange} />
              
            </div>

            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input name="lastname" type="text" className="form-control" placeholder="Last Name" value={hostlerData.lastname} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Father's Name</label>
              <input name="fathername" type="text" className="form-control" placeholder="Father's Name" value={hostlerData.fathername} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Mobile Number</label>
              <input name="mobilenumber" type="text" className="form-control" placeholder="Mobile Number" value={hostlerData.mobilenumber} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Father's Mobile</label>
              <input name="fathermobilenumber" type="text" className="form-control" placeholder="Father's Mobile" value={hostlerData.fathermobilenumber} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Aadhaar Number</label>
              <input name="adharnumber" type="text" className="form-control" placeholder="Aadhaar Number" value={hostlerData.adharnumber} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Native Place</label>
              <input name="nativePlace" type="text" className="form-control" placeholder="Native Place" value={hostlerData.nativePlace} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Profession</label>
              <input name="profestion" type="text" className="form-control" placeholder="Profession" value={hostlerData.profestion} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Allotted Room</label>
              <input name="AllotedRoom" type="text" className="form-control" placeholder="Room Number" value={hostlerData.AllotedRoom} onChange={handleChange} />
            </div>

            <div className="col-md-6">
              <label className="form-label">Select Mode</label>
              <select name="Mode" className="form-select" value={hostlerData.Mode} onChange={handleChange}>
                <option value="">Choose...</option>
                <option value="hosteller">Hosteller</option>
                <option value="onlyfood">Only Food</option>
              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Advance Payment</label>
              <input name="paymentMonths" type="number" className="form-control" placeholder="Amount in ₹" value={hostlerData.paymentMonths} onChange={handleChange} />
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn btn-success px-5" onClick={validate}>Add Hosteller</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHosteller;
