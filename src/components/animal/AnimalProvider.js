import React, { useState, createContext } from "react"


/* 
    The context is imported and used by individual components that need data
    Whenver a data provider componenet is created in react,
    a context must be created as well.
*/
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    // array destructuring to get our initial value and funcion
    const [animals, setAnimals] = useState([])

    // getAnimals is a what we have been using, except we set the animals
    // data state to the return value
    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=location")
            .then(res => res.json())
            .then(setAnimals)
    }
    
    const getAnimalById = (id) => {
        return fetch(`http://localhost:8088/animals/${id}?_expand=location&_expand=customer`)
            .then(res => res.json())
    }

    // post method to add an animal
    const addAnimal = animalObj => {
        return fetch("http://localhost:8088/animals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animalObj)
        })
            .then(getAnimals)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        // this is where the context is sent out to be used
        // by child compenents. the VALUE attribute holds
        // the data we are sending here
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, getAnimalById
        }}>
            {props.children}
        </AnimalContext.Provider>
    )
}