import './CVPage.css';
import CV from '../../Resources/CV-2024.pdf'
import { experiences } from '../../Models/Experience'
import ExperienceCard from "./components/ExperienceCard/ExperienceCard";
import { motion, LayoutGroup } from "framer-motion";
import BusinessCard from './components/BusinessCard/BusinessCard';
import { useTranslation } from 'react-i18next';

export default function CVPage() {
  
  const {t} = useTranslation();

  console.log(experiences)
  const workExperiences = experiences.filter((e) => e.type === "work");
  console.log(workExperiences);
  const schoolExperiences = experiences.filter((e) => e.type==="study");
  const volunteeringExperiences = experiences.filter((e) => e.type === "volunteering");

   return (
    <div className="CVPage">
      <div className="Page">
        <div className="Kop">
        <BusinessCard></BusinessCard>
        </div>
        <div className="Ervaring">
          <h2>{t("cv_experience")}</h2>

          <div className="Lijst">
            <LayoutGroup>
              {workExperiences.map((exp, index) => (
                    <ExperienceCard key={exp.id} experience={exp} />
                )
              )}
            </LayoutGroup>

          </div>
        </div>

        <div className="Opleidingen">
          <h3>{t("cv_education")}</h3>
          <div className="Lijst">
            <LayoutGroup>
            {schoolExperiences.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} />
            ))}
            </LayoutGroup>
          </div>
        </div>

        <div className="Vrijwilligerswerk">
          <h3>{t("cv_volunteering")}</h3>
          <div className="Lijst">
            <LayoutGroup>
            {volunteeringExperiences.map((exp, index) => (
                <ExperienceCard key={exp.id} experience={exp} />
            ))}
            </LayoutGroup>
          </div>
        </div>
      </div>
      <a href="./Curriculum_Vitae_2026-Website.pdf" download="DekyvereJule_CV.pdf" className="cv-download-btn">
        ↓ Download CV
      </a>
    </div>
   );
}
