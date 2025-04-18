import { useEffect, useState } from "react";
import axiosInstance from "../../loginpage/axiosInstance";

function PendingDues() {
  const [dues, setDues] = useState([]);

  useEffect(() => {
    const fetchDues = async () => {
      try {
        const response = await axiosInstance.get("http://localhost:8080/pendingdues");
        setDues(response.data);
      } catch (error) {
        console.error("Error fetching pending dues:", error);
      }
    };

    fetchDues();
  }, []);

  return (
    <>
     <div className="container ">
     <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Room No</th>
            <th scope="col">Pending Due</th>
          </tr>
        </thead>
        <tbody>
          {dues.map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>{row[3]}</td>
              <td>{row[4]}</td>
              <td>{row[5]}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </>
  );
}

export default PendingDues;
