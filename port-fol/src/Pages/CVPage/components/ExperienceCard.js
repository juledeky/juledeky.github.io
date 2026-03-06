import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ experience }) {
    return (
        <div className="ExperienceCard">
            <h4>{experience.company}</h4>
            <h5>{experience.workTitle}</h5>
            <h6>{experience.startDate.toLocaleDateString()} - {experience.endDate.toLocaleDateString()}</h6>
            <p>{experience.description}</p>
            <p>Skills: {experience.skills?.join(", ")}</p>
            <p>Technologie: {experience.techs?.join(", ")}</p>
            <button>Meer info</button>
        </div>
    );
}