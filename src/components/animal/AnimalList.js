import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)
    const { locations, getLocations } = useContext(LocationContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    //useEffect - reach out to the world for something
    // since the dependency array is empty, useEffect here is only
    // triggered once after the component renders for the first time 
    useEffect(() => {
        getLocations()
            .then(getCustomers)
            .then(getAnimals)
    }, [])


    return (
        <div className="animals">

            {
                animals.map(animal => {
                    // jsx to invoke/return animal card with a key of the id, and props of 
                    // the animal object
                    const owner = customers.find(c => c.id === animal.customerId)
                    const location = locations.find(l => l.id === animal.locationId)
                    return <AnimalCard key={animal.id}
                        location={location}
                        customer={owner}
                        animal={animal} />
                })
            }
        </div>
    )
}