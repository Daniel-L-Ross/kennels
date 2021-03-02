import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./Location"
import "./Location.css"


export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    const history = useHistory()

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className="locations">
            <h2>Locations</h2>
            <button onClick={()=> {history.push("/locations/create")}}>Add New Location</button>
            {
                locations.map(location => {
                    return <LocationCard key={location.id} location={location} />
                })
            }
        </div>
    )
}