import React from "react"
import { Link } from "react-router-dom"

export const LocationCard = ({location}) => {
    const employeeCount = location.employees.length
    const animalCount = location.animals.length

    return (
    <section className="location">
        <h3 className="location__name">
            <Link to={`locations/detail/${location.id}`}>
                {location.name}
            </Link>
        </h3>
        <div>Employees: {employeeCount}</div>
        <div>Animals: {animalCount}</div>
    </section>
)}