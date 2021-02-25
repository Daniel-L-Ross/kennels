import React, {useState} from "react"

export const PropsAndState = ({yourName}) => {
    let [countClicks, setCountClicks] = useState(0)

    // middle of chapt 3
    return (
        <>
            <h3>Welcome, {yourName}</h3>
        </>
    )
}