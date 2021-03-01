import React from "react"

export const CustomerCard = ({customer}) => (
<section className="customer">
    <h3 className="customer__name">{customer.name}</h3>
    <div className="customer__Address">Address: {customer.address}</div>
</section>
)