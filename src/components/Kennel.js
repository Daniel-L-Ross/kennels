import React from "react"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"


export const Kennel = () => {
    return (
        <>
            {/* navbar renders the navbar */}
            <NavBar />

            {/* appplicationViews renders the "main" section of content that is 
            dynamically updated via the router */}
            <ApplicationViews />
        </>
    )
}
