import React from "react";
import "./index.css";

function ServicesCard({ title, description, image }) {
    let containerClass = "services-card-container";
    if (!image) {
        containerClass = containerClass + " services-card-container-plain";
    }
    return (
        <div className={containerClass}>
            {image && (
                <div className="services-card-image">
                    <img src={image} alt="" />
                </div>
            )}

            {title && <h3>{title}</h3>}

            <p>{description}</p>
        </div>
    );
}

export default ServicesCard;