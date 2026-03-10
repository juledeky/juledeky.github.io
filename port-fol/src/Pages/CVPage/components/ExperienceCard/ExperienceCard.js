import React from "react";
import "./ExperienceCard.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ExperienceCard({ experience }) {

    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div layout className={`ExperienceCard ${expanded ? "expanded" : ""}`}>
            <div className="HeadOfCard">
                <div className="Titles">
                    <p className="ExperienceWorkTitle">{experience.workTitle}</p>
                    <p className="ExperienceCompany">{experience.company}</p>
                </div>
                <div className="Dates">
                    <p className="ExperienceDate">{experience.startDate.toLocaleDateString()} <br></br>{experience.endDate.toLocaleDateString()}</p>
                </div>
            </div>
            <div className={`BodyOfCard ${expanded ? "open" : ""}`}>
                <ul className="ExperienceDescription">
                    {experience.description.split(",").map((u, k) => <li key={k}>{u}</li>)}
                </ul>
            </div>
            <div className="BottomOfCard">
                <ul className="ExperienceSkills"> {experience.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
                <ul className="ExperienceTechs">{experience.techs.map((t, j) => <li key={j}>{t}</li>)}</ul>
            </div>
            <button className="ExperienceBtn" onClick={() => setExpanded(!expanded)}> {expanded ? "Minder info": "Meer info"}</button>
        </motion.div>
    );
}