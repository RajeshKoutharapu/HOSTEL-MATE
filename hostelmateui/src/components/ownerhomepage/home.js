import './home.css';

function OwnerHomePage() {
  const handleProfileClick = () => {
    alert("Profile icon clicked! You can navigate to the profile page here.");
  };

  return (
    <>
      <nav className="navbar custom-navbar bg-primary" data-bs-theme="dark">
        <h1 className="navbar-title ">Hello Rajeeh</h1>

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
                  <button className="btn btn-primary mt-3">Add</button>
                </div>
              </div>
            </div>
           
            <div className="col-4 md-3 mb-4">
           <div className="card text-center h-100 shadow-sm">
             <div className="card-body d-flex flex-column justify-content-between cards">
               <h5 className="card-title">Pending Dues</h5>
               <button className="btn btn-primary mt-3">Click</button>
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
               <button className="btn btn-primary mt-3">Vacate</button>
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
               <button className="btn btn-primary mt-3">Get</button>
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
       
       
         
        
    </>
  );
}

export default OwnerHomePage;
