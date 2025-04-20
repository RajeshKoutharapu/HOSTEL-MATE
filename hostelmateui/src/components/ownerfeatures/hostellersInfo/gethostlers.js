import { useOwner } from "../../../context/ownerContext";
import { useState } from "react";
import axiosInstance from "../../loginpage/axiosInstance";

function GetHosteller() {
  const [responseData, setResponseData] = useState(null);
  const { ownerData } = useOwner();
  const [hostellerId, updateHostellerId] = useState("");
  const [idError, setIdError] = useState(false);

  async function sendId(event) {
    if (event.key === "Enter") {
      try {
        const response = await axiosInstance.get(
          `http://localhost:8080/owners/${ownerData.email}/hostellers/${hostellerId}`
        );

        if (!response.data || response.data.length < 2) {
          setIdError(true);
          setResponseData(null);
        } else {
          setResponseData(response.data[1]); // paymentStatus + hosteller inside
          setIdError(false);
        }
      } catch (e) {
        console.log(e);
        setIdError(true);
        setResponseData(null);
      }
    }
  }

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
          value={hostellerId}
          onChange={(e) => updateHostellerId(e.target.value)}
          onKeyDown={sendId}
        />
      </div>

      {/* Hosteller Info Display */}
      {responseData && (
        <div className="mt-4">
          <ul className="list-group">
  <li className="list-group-item">
    <strong>Name:</strong> {responseData.hosteller.firstName} {responseData.hosteller.lastName}
  </li>
  <li className="list-group-item">
    <strong>ID:</strong> {responseData.hostellerId}
  </li>
  <li className="list-group-item">
    <strong>Joining Date:</strong> {responseData.hosteller.joiningDate || "N/A"}
  </li>
  <li className="list-group-item">
    <strong>Available Status:</strong> {responseData.hosteller.stayingStatus || "N/A"}
  </li>
  <li className="list-group-item">
    <strong>Father's Name:</strong> {responseData.hosteller.fathersName || "N/A"}
  </li>
  <li className="list-group-item">
    <strong>Mobile Number:</strong> {responseData.hosteller.mobileNumber}
  </li>
  <li className="list-group-item">
    <strong>Father's Mobile Number:</strong> {responseData.hosteller.fathersMobile}
  </li>
  <li className="list-group-item">
    <strong>Aadhar Number:</strong> {responseData.hosteller.aadhaarNumber}
  </li>
  <li className="list-group-item">
    <strong>Native Place:</strong> {responseData.hosteller.nativePlace}
  </li>
  <li className="list-group-item">
    <strong>Profession:</strong> {responseData.hosteller.profession}
  </li>
  <li className="list-group-item">
    <strong>Allotted Room:</strong> {responseData.hosteller.allottedRoom}
  </li>
  <li className="list-group-item">
    <strong>Mode of Joining:</strong> {responseData.hosteller.mode}
  </li>
  <li className="list-group-item">
    <strong>Staying Status:</strong> {responseData.hosteller.stayingStatus || "N/A"}
  </li>
  <li className="list-group-item">
    <strong>Payment Status:</strong> {responseData.paymentStatus}
  </li>
  <li className="list-group-item">
    <strong>Pending Amount:</strong> ₹{responseData.pendingAmount}
  </li>
</ul>

        </div>
      )}

      {idError && <p className="text text-danger">---- INVALID ID ----</p>}
    </div>
  );
}

export default GetHosteller;
