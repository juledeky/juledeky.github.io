import './ProjectPage.css';
import {BrowserRouter, NavLink} from 'react-router-dom';
import { TwitterOutlined, LinkedinOutlined, FacebookOutlined } from "@ant-design/icons";
import { projects } from '../../Models/Project';
import { useState } from "react";
import { useTranslation } from 'react-i18next';


const socialIcons = {
  twitter: <TwitterOutlined />,
  linkedin: <LinkedinOutlined />,
  facebook: <FacebookOutlined />
};




export default function ProjectPage() {
    const [filterOpen, setFilterOpen] = useState(false);
    const [filter, setFilter] = useState(null);
    const [selected, setSelected] = useState("Project kind");


    const { t } = useTranslation();

    const handleSelect = (key, label) => {
        setSelected(label);
        setFilterOpen(false);
        setFilter(key === "all" ? null : key);
    };

    const types = [...new Set(projects.map(p => p.Type))]
    

    const filteredProjects = filter ? projects.filter((p) => p.Type === filter) : projects;

    console.log(types);

    return (


        <div className="ProfilePage">
            <div className="InleidingBox">
                <div className="Inleiding">
                    <h1 className="PageTitle">{t("proj_title")}</h1>
                    <p>{t("proj_intro")}
                    </p>
                </div>
                <div className="Dropdownmenu">
                    <button className="filter-toggle" onClick={() => setFilterOpen(!filterOpen)}>
                        {t("proj_filter")}<span className={`arrow ${filterOpen ? "open" : ""}`}>▾</span>
                    </button>
                    <div className={`filter-tabs ${filterOpen ? "visible" : ""}`}>
                        <button className={`filter-tab ${filter === null ? "active" : ""}`} onClick={() => setFilter(null)}>All</button>
                        {types.map(type => (
                        <button key={type} className={`filter-tab ${filter === type ? "active" : ""}`} onClick={() => setFilter(type)}>{type}</button>
                        ))}
                    </div>
                </div>
                
            </div>

            <div>
                {filteredProjects.map((project,index) => 
                    (
                        <div 
                            key={project.id} 
                            className={`Project`} 
                            id={project.id}
                            >
                            <div className="Beschrijving" id={`${project.id}Beschrijving`}>
                                <div className="BeschrijvingInhoud">
                                <h3>{t(project.title)}</h3>
                                <p>{t(project.description)}</p>
                                {project.link !== "" && (project.linkType === "internal" ? (
                                    <NavLink to={project.link} className="nav_link" activeClassName="nav_link--active">
                                    <button className="App-button">{t("read_more")}</button>
                                    </NavLink>
                                ) : (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="App-button"> {t("visit_site")} </button>
                                    </a>
                                )
                            )}
                                </div>
                            </div>

                        <div className="EmbeddedProject" id={`${project.id}API`}>
                            <div className="API" {...(project.ImageEmbedLinkFrame && typeof project.ImageEmbedLinkFrame.__html === "string"
                                ? { dangerouslySetInnerHTML: project.ImageEmbedLinkFrame }
                                : {})} >
                            </div>   
                        </div>
                        {project.socials && project.socials.length > 0 && (
                                <div className='ProjectSocials'>
                                    {project.socials.map((social, i) => (
                                        <a 
                                            key={i} 
                                            href={social.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className={`social-link social-${social.type}`}
                                        >
                                            {socialIcons[social.type] || social.type}
                                        </a>
                                    ))}
                            </div>)}
                        
                        </div>
                    ))
                } 
            </div>
        </div>
    );
}

