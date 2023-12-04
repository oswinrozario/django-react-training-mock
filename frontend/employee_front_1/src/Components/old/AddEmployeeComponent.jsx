import React, { useState, useEffect } from "react";
import EmployeeService from "../../service/EmployeeService";
import { Link, useNavigate, useParams } from "react-router-dom";

const AddEmployeeComponent = () => {
  /** Variables and method to collect and store inputes */
  const [name, setFirstName] = useState("");
  const [profile, setLastName] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const employeeData = { name, profile }; //bundle the inpute from user

  /**send data to api and navigate when succesful */
  function saveEmployee(e) {
    e.preventDefault();

    if (employeeData.name !== "" && employeeData.profile !== "") {
      /**If id is present in the parameter, it should update else it should save */
      if (id) {
        EmployeeService.updateEmployee(id, employeeData)
          .then(navigate("/employee"))
          .catch((e) => console.log(e));
      } else {
        EmployeeService.saveEmployee(employeeData)
          .then(navigate("/employee"))
          .catch((e) => console.log(e));
      }
    } else {
      alert("Please, fill in all inputes");
    }
  }

  function tile() {
    if (id) {
      return "Update Employee";
    } else {
      return "Add Employee";
    }
  }
  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)
        .then((res) => {
          setFirstName(res.data.name);
          setLastName(res.data.profile);
        })
        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="card col-md-6 offset-md-3">
            <h2 className="text-center">{tile()}</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={name}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group mb-2">
                  <input
                    className="form-control"
                    value={profile}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    placeholder="Enter Profile"
                  />
                </div>
                <button
                  onClick={(e) => saveEmployee(e)}
                  className="btn btn-success"
                >
                  Save
                </button>{" "}
                <Link to={"/employee"} className="btn btn-danger" href="">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeComponent;