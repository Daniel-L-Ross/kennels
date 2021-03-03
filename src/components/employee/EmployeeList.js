import React, { useContext, useEffect } from "react"
import {useHistory} from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeDetail"
import "./Employee.css"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    const history = useHistory()

    useEffect(() => {
        getEmployees()
    }, [])

    return (
        <div className="employees">
            <h2>Employees</h2>
            <button onClick={() => {history.push("/employees/hire")}}>Add New Employee</button>
            {
                employees.map(employee => {
                    return <EmployeeCard key={employee.id} employee={employee} />
                })
            }
        </div>
    )
}