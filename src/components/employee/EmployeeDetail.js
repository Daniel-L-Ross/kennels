import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeDetail = () => {
    const { getEmployeeById, removeEmployee } = useContext(EmployeeContext)
    const [employee, setEmployee] = useState({})

    const { employeeId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getEmployeeById(employeeId)
            .then((response) => {
                setEmployee(response)
            })
    }, [])

    const handleRemove = () => {
        removeEmployee(employee.id)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location?.name}</div>
            <button onClick={handleRemove}>Remove Employee</button>
            <Link to={`/employees/update/${employee.id}`}>
            <button>Update Employee</button>
            </Link>
        </section>
    )
}