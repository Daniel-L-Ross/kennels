import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory, Link } from  "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => {
    const history = useHistory()
    
    const handleRemove = () => {
        history.push("/employees")
    }

    return (
        <section className="employee">
            <Link to={`employees/detail/${employee.id}`}><h3>{employee.name}</h3></Link>
            <div className="employee__location">Location: {employee.location.name}</div>
            <button onClick={handleRemove}>Remove Employee</button>
        </section>
    )
}