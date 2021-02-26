import React from "react"
// importing route to create the route paths
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { LocationCard } from "./location/Location"
import { CustomerCard } from "./customer/Customer"
import { EmployeeCard } from "./employee/Employee"

// this component is responsible for rendering the dynamic content 
// <route path is use to show what url to display when LINKing TO that page
// see the matching LINKs on the NavBar.js component

export const ApplicationViews = () => {
    return (
        <>
            {/* the word exact is needed, else every LinkTo will catch on this path */}
            <Route exact path="/">
                {/* When this route is invoked, what component should it call? */}
                <Home />
            </Route>

            <Route path="/locations">
                <LocationCard />
            </Route>
            
            <Route path="/animals">
                <AnimalCard />
            </Route>
            
            <Route path="/customers">
                <CustomerCard />
            </Route>
            
            <Route path="/employees">
                <EmployeeCard />
            </Route>
        </>
    )
}