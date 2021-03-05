import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
// import from libraries before local modules
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

    const [filteredAnimals, setFiltered] = useState([])
    const history = useHistory()

    //useEffect - reach out to the world for something
    // since the dependency array is empty, useEffect here is only
    // triggered once after the component renders for the first time 
    useEffect(() => {
        getAnimals()
    }, [])

    useEffect(() => {
        if (searchTerms !== "") {
            const subset = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
            setFiltered(subset)
        } else {
            setFiltered(animals)
        }
    }, [searchTerms, animals])

    return (
        <div className="animals">
            <h2>Animals</h2>
            <button onClick={() => {history.push("/animals/create")}}>Add Animal</button>
            {
                filteredAnimals.map(animal => {
                    // jsx to invoke/return animal card with a key of the id, and props of 
                    // the animal object
                    return <AnimalCard key={animal.id}
                        animal={animal} />
                })
            }
        </div>
    )
}