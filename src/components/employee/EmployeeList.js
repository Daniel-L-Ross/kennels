import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeList = () => {
    const { employees, getEmployees } = useContext(EmployeeContext)

    const history = useHistory()

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">
            <h2>Employees</h2>
            <ul>
                {employees.map(employee => {
                    return <li><Link to={`employees/detail/${employee.id}`}>{employee.name}</Link></li>
                })}
            </ul>
            <button onClick={() => { history.push("/employees/hire") }}>Add New Employee</button>
        </div>
    )
}