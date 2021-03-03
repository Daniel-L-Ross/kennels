import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from  "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeCard = ({ employee }) => {
    const history = useHistory()
    
    const handleRemove = () => {
        history.push("/employees")
    }

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">Location: {employee.location.name}</div>
            <button onClick={handleRemove}>Remove Employee</button>
        </section>
    )
}