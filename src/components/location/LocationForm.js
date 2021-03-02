import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationForm = () => {
    const { addLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({
        name: "",
        address: ""
    })

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newLocation = {...location}
        let selectedVal = event.target.value

        newLocation[event.target.id] = selectedVal

        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        event.preventDefault()

        const name = location.name
        const address = location.address

        if (name === "" || address === ""){
            window.alert("Please provide the location name and address")
        } else {
            addLocation(location)
            .then(() => 
            history.push("/locations"))
        }
    }
return (
    
    <div>This worked


    <button onClick={handleClickSaveLocation}>Save Location</button>
    </div>
)
}