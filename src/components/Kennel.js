import React from "react"
import { AnimalCard } from "./animal/AnimalCard"
import "./Kennel.css"

export const Kennel = () => {
    const timeElapsed = Date.now()
    const today = new Date(timeElapsed).toDateString()
    const kennels = {
        locations: [
            {
                name: "East Nashvilee",
                adress: "500 Puppy Way"
            },
            {}
        ]
    }


    return (
        <>
            <h2>Nashville Kennels</h2>
            <div>Today is {today}</div>
            <small>Loving care when you're not there.</small>
            <address>
                <div>Visit Us at the Nashville North Location</div>
                <div>500 Puppy Way</div>
            </address>
            <article className="animals">
                <AnimalCard />
                <AnimalCard />
                <AnimalCard />
            </article>
        </>
    )
}
