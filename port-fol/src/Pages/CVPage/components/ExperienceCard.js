import React from "react";
import "./ExperienceCard.css";

export default function ExperienceCard({ experience }) {


    return (
        <div className="ExperienceCard">
            <div className="HeadOfCard">
                <div className="Titles">
                    <p className="ExperienceWorkTitle">{experience.workTitle}</p>
                    <p className="ExperienceCompany">{experience.company}</p>
                </div>
                <div className="Dates">
                    <p className="ExperienceDate">{experience.startDate.toLocaleDateString()} {experience.endDate.toLocaleDateString()}</p>
                </div>
            </div>
            <div className="BodyOfCard">
                <p className="ExperienceDescription">{experience.description}</p>
                <ul className="ExperienceSkills"> {experience.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
                <ul className="ExperienceTechs">{experience.techs.map((t, j) => <li key={j}>{t}</li>)}</ul>
            </div>
            <button className="ExperienceBtn">Meer info</button>
        </div>
    );
}