function GetHosteller() {
    return (
      <div className="container mt-5 p-4 border rounded shadow">
        <h3 className="mb-4 text-primary">Hosteller Details</h3>
  
        {/* Input Field */}
        <div className="mb-3">
          <label htmlFor="hostellerId" className="form-label">
            Enter Hosteller ID:
          </label>
          <input
            type="number"
            className="form-control"
            id="hostellerId"
            placeholder="e.g. 1023"
          />
        </div>
  
        {/* Hosteller Info Display */}
        <div className="mt-4">
          <ul className="list-group">
            <li className="list-group-item"><strong>Name:</strong> Rajeeh</li>
            <li className="list-group-item"><strong>ID:</strong> 1023</li>
            <li className="list-group-item"><strong>Joining Date:</strong> 01-Jan-2023</li>
            <li className="list-group-item"><strong>Available Status:</strong> Yes</li>
            <li className="list-group-item"><strong>Payment Status:</strong> Paid</li>
            <li className="list-group-item"><strong>Pending Months:</strong> 0</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default GetHosteller;
  
  