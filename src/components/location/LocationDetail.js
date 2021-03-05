import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
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


    const employeeCount = location.employees?.length
    const animalCount = location.animals?.length


    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <h4>Employees:</h4>
            <div>
                {employeeCount > 0 &&
                    location.employees.map(employee => `${employee.name}, `)
                }
            </div>
            <h4>Animals:</h4>
            <div>
                {animalCount > 0 &&
                    location.animals.map(animal => animal.name).join(", ")
                }
            .</div>
            <Link to={`/locations/edit/${location.id}`}>
                <button>Edit</button>
            </Link>
        </section>
    )
}