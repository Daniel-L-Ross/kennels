import React, { useContext, useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"

export const AnimalDetail = () => {
    const { getAnimalById, releaseAnimal } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({})

    const {animalId} = useParams()
    const history = useHistory()

    useEffect(() => {
        getAnimalById(animalId)
        .then((response) => {
            setAnimal(response)
        })
    }, [])

    const handleRelease = () => {
        releaseAnimal(animal.id)
        .then(() => {
            history.push("/animals")
        })
    }

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location?.name}</div>
            <div className="animal__owner">Owner: {animal.customer?.name}</div>
            <button onClick={handleRelease}>Release Animal</button>
            <button onClick={() => {
                history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
        </section>
    )
}