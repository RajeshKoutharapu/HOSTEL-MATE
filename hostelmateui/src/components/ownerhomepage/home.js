import './home.css';
import { Link,useLocation } from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useOwner } from '../../context/ownerContext';
import axiosInstance from '../loginpage/axiosInstance';
function OwnerHomePage() {

  const handleProfileClick = () => {
    alert("Profile icon clicked! You can navigate to the profile page here.");
  };
  const location = useLocation();
  const { ownerData, setOwnerData } = useOwner();
  const[vacateStatus,UpdateVacte]=useState(false);
  const[vacateinvalid,updateinvalidid]=useState(false);
  const[vacateId,UpdateVacteId]=useState("");
  const[succesvacate,upsuccessvacate]=useState(false);
let response;
//function to vacte hoster REqiuest to backend
async function vacateHosteller() {
  const token = localStorage.getItem('token');
  console.log('JWT Token:', token);  // Log token here
  
  if (!token) {
    console.log('Token is missing');
    return;
  }

  console.log(vacateId);  // Log the vacate ID
  try {
    const response = await axiosInstance.post(
      'http://localhost:8080/vacatehosteller',
      { id: parseInt(vacateId) },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response === 'deleted') {
      upsuccessvacate(true);
    } else if (response.data === 'Invalid ID') {
      updateinvalidid(true);
    } else {
      UpdateVacte(true);
    }
  } catch (error) {
    console.error('Error during vacate request:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
    }
  }
}

  useEffect(() => {
    const hostelName = location.state?.HostelName;
    const email = location.state?.username;

    if (hostelName && email) {
      setOwnerData({ hostelName, email });
    }
  }, [location.state, setOwnerData]);

  return (
    <>
      <nav className="navbar custom-navbar " data-bs-theme="dark">
        <h1 className="navbar-title ">Hello {ownerData.hostelName}</h1>

        <svg
          className="icon"
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          fill="currentColor"
          viewBox="0 0 16 16"
          onClick={handleProfileClick}
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 
            11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 
            5.468 2.37A7 7 0 0 0 8 1"
          />
        </svg>
      </nav>
      <div className="container mt-5 border rounded p-4 shadow">
        <div className="row">
         
            <div className="col-4 md-3 mb-4 ">
              <div className="card text-center h-100 shadow-sm">
                <div className="card-body d-flex flex-column justify-content-between cards">
                  <h5 className="card-title">Add hostelr</h5>
                  <Link to="/add"  className="btn btn-primary mt-3">Add</Link>
                  </div>
              </div>
            </div>
           
            <div className="col-4 md-3 mb-4">
           <div className="card text-center h-100 shadow-sm">
             <div className="card-body d-flex flex-column justify-content-between cards">
               <h5 className="card-title">Pending Dues</h5>
               <Link to="/pendingdues" className="btn btn-primary mt-3">Add</Link>
               </div>
           </div>
         </div>

         <div className="col-4 md-3 mb-4">
           <div className="card text-center h-100 shadow-sm">
             <div className="card-body d-flex flex-column justify-content-between cards">
               <h5 className="card-title">Available Rooms</h5>
               <button className="btn btn-primary mt-3">Click</button>
             </div>
           </div>
         </div>

         <div className="col-4 md-3 mb-4">
           <div className="card text-center h-100 shadow-sm">
             <div className="card-body d-flex flex-column justify-content-between cards">
               <h5 className="card-title">Vacate Hostler</h5>
               <button className="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">Vacate</button>
             </div>
           </div>
         </div>

         <div className="col-4 md-3 mb-4">
           <div className="card text-center h-100 shadow-sm">
             <div className="card-body d-flex flex-column justify-content-between cards">
               <h5 className="card-title">Add Room</h5>
               <button className="btn btn-primary mt-3">Add</button>
             </div>
           </div>
         </div>

         <div className="col-4 md-3 mb-4">
           <div className="card text-center h-100 shadow-sm">
             <div className="card-body d-flex flex-column justify-content-between cards">
               <h5 className="card-title">Get Hostler Information</h5>
               <Link to="/gethostller" className="btn btn-primary mt-3">Add</Link>
             </div>
           </div>
         </div>

         <div className="col-4 md-3 mb-4">
           <div className="card text-center h-100 shadow-sm">
             <div className="card-body d-flex flex-column justify-content-between cards">
               <h5 className="card-title">change Rents</h5>
               <button className="btn btn-primary mt-3">Change</button>
             </div>
           </div>
         </div>

         <div className="col-4 md-3 mb-4">
           <div className="card text-center h-100 shadow-sm">
             <div className="card-body d-flex flex-column justify-content-between cards">
               <h5 className="card-title">Complaints</h5>
               <button className="btn btn-primary mt-3">see</button>
             </div>
           </div>
         </div>
           
         <div className="col-4 md-3 mb-4">
           <div className="card text-center h-100 shadow-sm">
             <div className="card-body d-flex flex-column justify-content-between cards">
               <h5 className="card-title">Get Menu</h5>
               <button className="btn btn-primary mt-3">Get</button>
             </div>
           </div>
         </div>
         </div>
        
      </div>
       
      {/* <!-- Modal --> model for vacate hosteller */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label>enter Hosteller id to vacate : </label>
        <input className='form-control' value={vacateId} onChange={(e)=>{
            UpdateVacteId(e.target.value);
        }}></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" onClick={vacateHosteller}>vacate</button>
      </div>
      {  vacateStatus && <>
                    <p className='text text-danger'>Pending Due {response.data}</p> 
        </>
      }
      {
        vacateinvalid && <>
        <p className='text text-danger'>---INVALI ID---</p>
        </>
      }
       {
        succesvacate && <>
        <p className='text text-primary'>Hosteller Vacated</p>
        </>
      }
    </div>
  </div>
</div>
   </>
  );
}

export default OwnerHomePage;
