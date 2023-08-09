import React from "react";

export default function Card(props) {
    const { image, children } = props;
    const cardBody = React.Children.map(children, (child) => child);
    return (
        <div className="card" style={{ width: 18 + 'rem' }}>
            {image}
            <div className="card-body">
                {cardBody}
            </div>
        </div>
    )
}
