import './CVPage.css';
import CV from '../../Resources/CV-2024.pdf'
import { experiences } from '../../Models/Experience'
import ExperienceCard from "./components/ExperienceCard";

export default function CVPage() {
  
  console.log(experiences)
  const workExperiences = experiences.filter((e) => e.type === "work");
  console.log(workExperiences);
  const schoolExperiences = experiences.filter((e) => e.type==="study");
  const volunteeringExperiences = experiences.filter((e) => e.type === "volunteering");

   return (
    <div className="CVPage">

      <div className="Kop">
        <h1>JULE DEKYVERE</h1>
        <h2>Software Developer</h2>
      </div>
      <div className="Information"> 
        <p>Woonplaats: Gent 9000, België</p>
        <p>Email: juledekyvere@protonmail.com</p>
        <p>Gsm-nummer: op aanvraag</p>
        <p>Geboortedatum: 12/10/2000</p>
      </div>

      <div className="Ervaring">
        <h2>Ervaring</h2>

        <div className="Lijst">
        
          {workExperiences.map((exp, index) => (
              <ExperienceCard key={exp.id} experience={exp} />
            )
          )}


        </div>
      </div>

      <div className="Opleidingen">
        <h3>Opleidingen</h3>
        <div className="Lijst">
          {schoolExperiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>

      <div className="Vrijwilligerswerk">
        <h3>Vrijwilligerswerk</h3>
        <div className="Lijst">
          {volunteeringExperiences.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
      
    </div>
   );
}