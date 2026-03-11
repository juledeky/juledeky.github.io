import { Mail, Phone, MapPin, Cake } from "lucide-react";
import "./BusinessCard.css";
import { useTranslation } from "react-i18next";


const BusinessCard = () => {

  const {t} = useTranslation();

  const fields = [
    [Mail, "jule.dekyvere@protonmail.com"],
    [Phone, t("on_request")],
    [MapPin, "Gent, BE"],
    [Cake, t("dateofbirth")],
  ];

  return(
  <div className="BusinessCard">
    <div className="BusinessCard-accent" />
    <div className="BusinessCard-body">
      <h2 className="BusinessCard-name">Jule Dekyvere</h2>
      <p className="BusinessCard-title">Software Developer</p>
      <div className="BusinessCard-details">
        {fields.map(([Icon, text]) => (
          <div key={text} className="BusinessCard-field">
            <Icon size={14} className="BusinessCard-icon" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
};

export default BusinessCard;