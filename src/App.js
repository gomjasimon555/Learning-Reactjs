import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";
// import {v4 as uuidv4} from 'uuid'
function App() {
  const [role, setRole] = useState("dev");
  const [employees, setEmployees] = useState([
    { 
      id:1,
      name: "Caleb",
      role: "Developer",
      img: "https://images.pexels.com/photos/5750775/pexels-photo-5750775.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
    {
      id:2,
      name: "Simon",
      role: "Engineer",
      img: "https://images.pexels.com/photos/4154072/pexels-photo-4154072.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id:3,
      name: "Sal",
      role: "Manager",
      img: "https://images.pexels.com/photos/6207069/pexels-photo-6207069.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id:4,
      name: "Corey",
      role: "The Devops Guy",
      img: "https://images.pexels.com/photos/6833444/pexels-photo-6833444.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      id:5,
      name: "Jake",
      role: "Senior",
      img: "https://images.pexels.com/photos/5750775/pexels-photo-5750775.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    },
  ]);
function updateEmployee(id,newName, newRole)
{
const updatedEmployees = employees.map((employee)=>{
  if(id == employee.id)
  {
    return {...employee, name:newName, role:newRole};
  }
  return employee;
});
setEmployees(updatedEmployees)
}
  const showEmployees = true;

  return (
    <div className="App">
      {showEmployees ? (
        <>
          <input
            type="txt"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />

          <div className="flex flex-wrap justify-center">
            
            {employees.map((employee) => {
                return(
                <Employee 
                key={employee.id}
                id={employee.id}
                name={employee.name}
                role={employee.role}
                img={employee.img}
                updateEmployee ={updateEmployee}
                />
                );
            })}
      
          </div>
        </>
      ) : (
        <p>You cannot see the employees</p>
      )}
    </div>
  );
}

export default App;
