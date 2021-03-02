import React, { useContext, useEffect, useState } from "react"
import { useHistory } from 'react-router-dom';
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"

export const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [employee, setEmployee] = useState({
        name: "",
        locationId: 0
    })

    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])

    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEmployee[event.target.id] = selectedVal

        setEmployee(newEmployee)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        const locationId = employee.locationId
        const name = employee.name

        if (locationId === 0 || name === "") {
            window.alert("Please select a location and fill out the Employee's name")
        } else {
            addEmployee(employee)
                .then(() =>
                    history.push("/employees"))
        }


    }

    return (
        <form className="employeeForm">
            <h2 className="emplyeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Employee Name" value={employee.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location:</label>
                    <select defaultValue={employee.locationId} name="locationid" id="locationId" onChange={handleControlledInputChange} className="form-control">
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value ={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveEmployee}>
                Save Employee
            </button>
        </form>
    )
}