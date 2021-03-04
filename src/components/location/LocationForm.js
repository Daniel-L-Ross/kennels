import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import "./Location.css"

export const LocationForm = () => {
    const { addLocation, getLocationById, updateLocation } = useContext(LocationContext)

    const [location, setLocation] = useState({
        name: "",
        address: ""
    })

    const history = useHistory()
    const { locationId } = useParams()
    const [isLoading, setIsLoading] = useState(true);

    const handleControlledInputChange = (event) => {
        const newLocation = { ...location }
        let selectedVal = event.target.value

        newLocation[event.target.id] = selectedVal

        setLocation(newLocation)
    }

    const handleClickSaveLocation = (event) => {
        event.preventDefault()
        const name = location.name
        const address = location.address

        if (name === "" || address === "") {
            window.alert("Please provide the location name and address")
        } else {
            setIsLoading(true);

            if (locationId) {
                updateLocation(location)
                    .then(() => history.push(`/locations/detail/${location.id}`))
            } else {

                addLocation(location)
                    .then(() => history.push("/locations"))
            }
        }
    }

    useEffect(() => {
        if(locationId) {
            getLocationById(locationId)
            .then(location=> {
                setLocation(location)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
    }, [])
    return (

        <form className="locationForm">
            <h2 className="locationForm__title">{locationId ? "Edit Location" : "Add Location"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Location Name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Location Name" value={location.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="address">Location Address:</label>
                    <input type="text" id="address" onChange={handleControlledInputChange} className="form-control" placeholder="Address" value={location.address} />
                </div>
            </fieldset>
            <button disabled={isLoading} onClick={handleClickSaveLocation}>{locationId ? "Save Location" : "Add Location"}</button>
        </form>

    )
}