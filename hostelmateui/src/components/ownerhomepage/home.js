import './home.css';
import { Link,useLocation } from 'react-router-dom';

function OwnerHomePage() {
  const handleProfileClick = () => {
    alert("Profile icon clicked! You can navigate to the profile page here.");
  };
  const location = useLocation();
  const username=location.state?.HostelName

  return (
    <>
      <nav className="navbar custom-navbar " data-bs-theme="dark">
        <h1 className="navbar-title ">Hello {username}</h1>

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
                  <Link to="/add" className="btn btn-primary mt-3">Add</Link>
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
        <input className='form-control'></input>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger">vacate</button>
      </div>
    </div>
  </div>
</div>
   </>
  );
}

export default OwnerHomePage;
