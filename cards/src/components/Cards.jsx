import React from "react";

import Card from "./Card"
import Image from "./Image"
import CardBody from "./CardBody";

export default function Cards() {
    return (
        <div className="cards-wrapper">
            <Card image={<Image />} children={<CardBody />} />
            <Card children={<CardBody />} />
        </div>
    )
}
