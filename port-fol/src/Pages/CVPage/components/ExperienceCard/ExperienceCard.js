import React from "react";
import "./ExperienceCard.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ExperienceCard({ experience }) {

    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div layout className={`ExperienceCard ${expanded ? "expanded" : ""}`}>
            <div className="HeadOfCard">
                <div className="Titles">
                    <p className="ExperienceWorkTitle">{t(experience.workTitle)}</p>
                    <p className="ExperienceCompany">{t(experience.company)}</p>
                </div>
                <div className="Dates">
                    <p className="ExperienceDate">{experience.startDate.toLocaleDateString()} <br></br>{experience.endDate.toLocaleDateString()}</p>
                </div>
            </div>
            <div className={`BodyOfCard ${expanded ? "open" : ""}`}>
                <ul className="ExperienceDescription">
                    {t(experience.description).split(",").map((u, k) => <li key={k}>{u}</li>)}
                </ul>
            </div>
            <div className="BottomOfCard">
                <ul className="ExperienceSkills"> {experience.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
                <ul className="ExperienceTechs">{experience.techs.map((t, j) => <li key={j}>{t}</li>)}</ul>
            </div>
            <button className="ExperienceBtn" onClick={() => setExpanded(!expanded)}> {expanded ? t("less_info"): t("more_info")}</button>
        </motion.div>
    );
}