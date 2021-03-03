import React, { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import "./Animal.css"
import { useParams, useHistory } from "react-router-dom"

export const AnimalDetail = () => {
    const { getAnimalById } = useContext(AnimalContext)

    const [animal, setAnimal] = useState({})

    const {animalId} = useParams()
    const history = useHistory()

    useEffect(() => {
        console.log("useEffect", animalId)
        getAnimalById(animalId)
        .then((response) => {
            setAnimal(response)
        })
    }, [])

    
}