import React, { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"

export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)
    const [location, setLocation] = useState({})

    const { locationId } = useParams()

    useEffect(() => {
        getLocationById(locationId)
            .then((response) => {
                setLocation(response)
            })
    }, [])

console.log(location)

    return (
        <section className="location">
            {/* <h3 className="location__name">{location.name}</h3> */}
            {/* <div className="location__address">{location.address}</div> */}
            <h4>Employees:</h4>
            <div></div>
            <h4>Animals:</h4>
            <div></div>

        </section>
    )
}