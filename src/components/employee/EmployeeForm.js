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
        const newEmployee = {...employee}
        let selectedVal = event.target.value

        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newEmployee[event.target.id] = selectedVal

        setAnmal(newAnimal)
    }

    const handleClickSaveEmployee = (event) => {
        event.preventDefault()

        const 
    }
}