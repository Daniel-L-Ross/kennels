import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"

export const AnimalList = () => {
    // This state changes when `getAnimals()` is invoked below
    const { animals, getAnimals } = useContext(AnimalContext)

    //useEffect - reach out to the world for something
    // since the dependency array is empty, useEffect here is only
    // triggered once after the component renders for the first time 
    useEffect(() => {
        console.log("AnimalList: useEffect - getAnimals")
        getAnimals()
    }, [])


    return (
        <div className="animals">

            {
                animals.map(animal => {
                    // jsx to invoke/return animal card with a key of the id, and props of 
                    // the animal object
                    return <AnimalCard key={animal.id} animal={animal} />
                })
            }
        </div>
    )
}