import { useState } from 'react';
import './addhosteller.css';
import { useLocation } from 'react-router-dom';
import axiosInstance from '../../loginpage/axiosInstance';
import{Link} from 'react-router-dom'
import { useOwner } from '../../../context/ownerContext';
function AddHosteller() {
  const { ownerData } = useOwner();
  const[successregistration,upsuccessregistration]=useState(false)
  const[failsregistration,upfailregistration]=useState(false)

  const[hostelerid,sethostllerid]=useState("");
  const [hostlerData, updatehostler] = useState({
    firstName: "",
    lastName: "",
    fathersName: "",
    mobileNumber: "",
    fathersMobile: "",
    aadhaarNumber: "",
    nativePlace: "",
    profession: "",
    allottedRoom: "",
    mode: "",
    advancePayment: ""
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

     newErrors.firstname=hostlerData.firstName==="";
     newErrors.lastname=hostlerData.lastName==="";
     newErrors.fathername=hostlerData.fathersName==="";
     newErrors.mobilenumber=!mobilePattern.test(hostlerData.mobileNumber);
     newErrors.fathermobilenumber=!mobilePattern.test(hostlerData.fathersMobile);
     newErrors.adharnumber=!aadhaarPattern.test(hostlerData.aadhaarNumber);
     newErrors.nativePlace=hostlerData.nativePlace==="";
     newErrors.profestion=hostlerData.profession==="";
     newErrors.AllotedRoom=hostlerData.allottedRoom==="";
     newErrors.Mode=hostlerData.mode==="Choose";
     newErrors.paymentMonths=hostlerData.advancePayment==="";
     check=!Object.values(newErrors).includes(true);
      updateerrors(newErrors);
      if(check){
        RequestRegister();
      }
    
  }
  async function RequestRegister() {
    const updatedHostellerData={...hostlerData,
      hostelleruserid:ownerData.hostelName+hostlerData.lastName,
      ownermail:ownerData.email
    }

     try{
      console.log(updatedHostellerData)
      const response=await axiosInstance.post("http://localhost:8080/addhosteller",updatedHostellerData);
      sethostllerid(response.data);
      upsuccessregistration(true);
      console.log(response.data)
     }catch(e){
      upfailregistration(true)
        console.log(e);
     }
  }

  return (
    <div className="container my-5">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white text-center">
          <h3>Add Hosteller</h3>
        </div>
        <div className="card-body">
         
          <div className='row'>
            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input name="firstName" type="text" className="form-control" placeholder="First Name" value={hostlerData.firstName} onChange={handleChange} />
              {errors.firstname && <p className='text-danger'>inavlid name</p>}
            </div>

            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input name="lastName" type="text" className="form-control" placeholder="Last Name" value={hostlerData.lastName} onChange={handleChange} />
              {errors.lastname && <p className='text-danger'>inavlid name</p>}

            </div>

            <div className="col-md-6">
              <label className="form-label">Father's Name</label>
              <input name="fathersName" type="text" className="form-control" placeholder="Father's Name" value={hostlerData.fathersName} onChange={handleChange} />
              {errors.fathername && <p className='text-danger'>inavlid name</p>}

            </div>

            <div className="col-md-6">
              <label className="form-label">Mobile Number</label>
              <input name="mobileNumber" type="text" className="form-control" placeholder="Mobile Number" value={hostlerData.mobileNumber} onChange={handleChange} />
              {errors.mobilenumber && <p className='text-danger'>inavlid number</p>}

            </div>

            <div className="col-md-6">
              <label className="form-label">Father's Mobile</label>
              <input name="fathersMobile" type="text" className="form-control" placeholder="Father's Mobile" value={hostlerData.fathersMobile} onChange={handleChange} />
              {errors.fathermobilenumber && <p className='text-danger'>inavlid mobile number</p>}

            </div>

            <div className="col-md-6">
              <label className="form-label">Aadhaar Number</label>
              <input name="aadhaarNumber" type="text" className="form-control" placeholder="Aadhaar Number" value={hostlerData.aadhaarNumber} onChange={handleChange} />
              {errors.adharnumber && <p className='text-danger'>inavlid aadhar umber</p>}

            </div>

            <div className="col-md-6">
              <label className="form-label">Native Place</label>
              <input name="nativePlace" type="text" className="form-control" placeholder="Native Place" value={hostlerData.nativePlace} onChange={handleChange} />
              {errors.nativePlace && <p className='text-danger'>invalid Native Place</p>}

            </div>

            <div className="col-md-6">
              <label className="form-label">Profession</label>
              <input name="profession" type="text" className="form-control" placeholder="Profession" value={hostlerData.profession} onChange={handleChange} />
              {errors.firstname && <p className='text-danger'>inavlid profection</p>}

            </div>

            <div className="col-md-6">
              <label className="form-label">Allotted Room</label>
              <input name="allottedRoom" type="text" className="form-control" placeholder="Room Number" value={hostlerData.allottedRoom} onChange={handleChange} />
              {errors.firstname && <p className='text-danger'>invalid Alloted Room</p>}

            </div>

            <div className="col-md-6">
              <label className="form-label">Select Mode</label>
              <select name="mode" className="form-select" value={hostlerData.mode} onChange={handleChange}>
                <option value="">Choose...</option>
                <option value="hosteller">Hosteller</option>
                <option value="onlyfood">Only Food</option>
                {errors.Mode && <p className='text-danger'>inavlid name</p>}

              </select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Advance Payment</label>
              <input name="advancePayment" type="number" className="form-control" placeholder="Amount in ₹" value={hostlerData.advancePayment} onChange={handleChange} />
            </div>

            <div className="col-12 text-center">
              <button  className="btn btn-success px-5" onClick={validate}>Add Hosteller</button>
            </div>

            {
            successregistration && 
            <>
             <div class="alert alert-success mt-4" role="alert">Hostller Added SuccessFully ID: {hostelerid}</div>
             <Link to="/hostelmatehome" className="btn btn-primary mt-3">BackTo Home</Link>
             </>
                       
            }
            { failsregistration && <div class="alert alert-danger mt-4" role="alert">Hosteller already exists</div>


            }
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default AddHosteller;
