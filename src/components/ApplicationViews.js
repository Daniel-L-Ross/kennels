import React from "react"
// importing route to create the route paths
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeeList"

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
                <LocationProvider>
                    <LocationList />
                </LocationProvider>
            </Route>

            {/* wrap a componenet that needs data in the provider. this is 
                required in jsx */}
            <Route path="/animals">
                <AnimalProvider>
                    <AnimalList />
                </AnimalProvider>
            </Route>

            <Route path="/customers">
                <CustomerProvider>
                    <CustomerList />
                </CustomerProvider>
            </Route>

            <Route path="/employees">
                <EmployeeProvider>
                    <EmployeeList />
                </EmployeeProvider>
            </Route>
        </>
    )
}