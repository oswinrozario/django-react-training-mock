import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const [employee, setEmployee] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://13.55.178.92:3000/api_4/employee_api/" + id)
      .then((result) => {
        setEmployee(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <div className="p-2 d-flex justify-content-center shadow">
        <h4>Emoployee Management System</h4>
      </div>
      <div className="d-flex justify-content-center flex-column align-items-center mt-3">
        <div className="d-flex align-items-left flex-column mt-5">
          <h3>ID: {employee.id}</h3>
          <h3>Name: {employee.name}</h3>
          <h3>Profile: {employee.profile}</h3>
          <h3>Salary: ${employee.salary}</h3>
        </div>
        <div>
          <button className="btn btn-primary me-2">Edit</button>
          <button className="btn btn-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
