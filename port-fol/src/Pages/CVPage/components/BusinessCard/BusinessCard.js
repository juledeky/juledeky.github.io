import { Mail, Phone, MapPin, Cake } from "lucide-react";
import "./BusinessCard.css";

const fields = [
  [Mail, "jule.dekyvere@protonmail.com"],
  [Phone, "Op aanvraag"],
  [MapPin, "Gent, BE"],
  [Cake, "12 Oktober 2000"],
];

const BusinessCard = () => (
  <div className="card">
    <div className="card-accent" />
    <div className="card-body">
      <h2 className="card-name">Jule Dekyvere</h2>
      <p className="card-title">Software Developer</p>
      <div className="card-details">
        {fields.map(([Icon, text]) => (
          <div key={text} className="card-field">
            <Icon size={14} className="card-icon" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default BusinessCard;