import React, { useContext, useEffect } from "react"
import { useHistory, Link } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
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
            {employees.map(employee => <EmployeeCard key={employee.id} employee={employee}/>)}
            <button onClick={() => { history.push("/employees/hire") }}>Add New Employee</button>
        </div>
    )
}