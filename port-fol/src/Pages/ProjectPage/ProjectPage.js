import './ProjectPage.css'
import Navigation from '../../Routes'
import {BrowserRouter, NavLink} from 'react-router-dom'
import {Route} from 'react-router-dom'
import React, {useState} from 'react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Descriptions, Dropdown, Space } from 'antd';
import { TwitterOutlined, LinkedinOutlined, FacebookOutlined } from "@ant-design/icons";
import { projects } from '../../Models/Project';




const socialIcons = {
  twitter: <TwitterOutlined />,
  linkedin: <LinkedinOutlined />,
  facebook: <FacebookOutlined />
};




export default function ProjectPage() {

    console.log(projects)
    const [filter, setFilter] = useState(null);

    const types = [...new Set(projects.map(p => p.Type))]
    console.log(types);
    const items = [
        
        {key: 'all', label: "All projects"},
        ...types.map(t => ({key: t, label:`${t} Projects`})),
        console.log(types)
        
    ];


    const handleMenuClick = ({ key }) => {
        console.log("clicked key:", key);
        setFilter(key === "all" ? null : key);
    };

    const filteredProjects = filter
        ? projects.filter((p) => p.Type === filter)
        : projects;

    console.log(types);

    return (


        <div className="ProfilePage">
            <div className="InleidingBox">
                <div className="Inleiding">
                    <p>Verschillende onderwerpen houden mij bezig, en zijn verspreid over twee steeds terugkomende onderwerpen; sofware development en geluidskunst. Hieronder 
                    vind u een overzicht van mijn projecten. 
                    </p>
                </div>
                <div className="Dropdownmenu">
                    <Dropdown menu={{ items, onClick: handleMenuClick }}>
                        <a onClick={e => e.preventDefault()}>
                        <Space>
                            Project kind
                            <DownOutlined />
                        </Space>
                        </a>
                    </Dropdown>
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
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.link !== "" && (project.linkType === "internal" ? (
                                    <NavLink to={project.link} className="nav_link" activeClassName="nav_link--active">
                                    <button className="App-button">Lees meer</button>
                                    </NavLink>
                                ) : (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <button className="App-button">Bezoek de website</button>
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
           
            {/* <div className="Project" id="MCEVERGEM">
                <div className="Beschrijving" id="MCEBeschrijving" >
                    <div className="BeschrijvingInhoud">
                        <h3>MCE Evergem - Service Rapport App</h3>
                        <p>Na het starten met de opleiding Gender en Diversiteit, begon ik als jobstudent te werken bij MCE om een software applicatie te bouwen om hun administratieve lasten te verlichten.
                        </p>
                        <NavLink activeClassName="nav_link--active" className="nav_link" to="/MCEVERGEM"><button className="App-button"  > Lees meer </button></NavLink>
                    </div>
                </div>
                <div className="EmbeddedProject" id="MCEAPI">
                    {/* <iframe className="SpotifyAPI" height="80px" src="https://open.spotify.com/embed/episode/3n6axKJ7O94Q5WUH5D80x7?utm_source=generator&amp;theme=0" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> *
                </div>
            </div>
            <div className="Project" id="HLG">
                <div className="Beschrijving" id="HLGBeschrijving" >
                    <div className="BeschrijvingInhoud">
                        <h3>Hubert Lampo Genootschap</h3>
                        <p>Op vraag van de bestuursleden van het Hubert Lampo Genootschap verfris ik langzaam hun nieuwe website via Wordpress.</p>
                        <a href='https://hubertlampogenootschap.be/'><button className="App-button"  >Bezoek de website</button></a>
                    </div>
                </div>
                <div className="EmbeddedProject" id="HLGAPI">
                    {/* <iframe className="SpotifyAPI" height="80px" src="https://open.spotify.com/embed/episode/3n6axKJ7O94Q5WUH5D80x7?utm_source=generator&amp;theme=0" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> 
                </div>
            </div>
            <div className="Project" id="Podcast">
                <div className="Beschrijving" id="PodcastBeschrijving" >
                    <div className="BeschrijvingInhoud">
                        <h3>On wine podcast</h3>
                        <p>Samen met Wies Ballekens maak ik sporadisch een aflevering van onze podcast On Wine.
                            Wies houdt zich bezig met de inhoudelijke kant, en ik verzorg de technische aspecten.
                            Beluister nu onze meest recente aflevering!</p>
                    </div>
                    <div className='Socials'>
                        <a href="https://www.instagram.com/onwinepodcast/" class="fa fa-instagram"></a>
                    </div>
                </div>
                <div className="EmbeddedProject" id="PodcastAPI">
                    <iframe className="SpotifyAPI" height="80px" src="https://open.spotify.com/embed/episode/3n6axKJ7O94Q5WUH5D80x7?utm_source=generator&amp;theme=0" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
            <div className="Project" id="Soundcloud"> 
                <div className="Beschrijving" id="SoundcloudBeschrijving">
                    <div className="BeschrijvingInhoud">
                        <h3>Ik maak muziek!</h3>
                        <p>Een van mijn vrijetijdsbestedingen is het creëren van muziek, hoewel het niet van professionele kwaliteit is,
                            geniet ik er toch van als vorm van ontspanning. Voel je vrij om mijn nieuwste nummer te beluisteren.</p>
                    </div>
                </div>
                <div className="EmbeddedProject" id="SoundcloudAPI">
                    <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1648218918&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    <div className="SoundCloudLinksDiv">
                        <a className="SoundCloudLinksA" href="https://soundcloud.com/user-432649769" title="JD" target="_blank" >JD</a> ·
                        <a className="SoundCloudLinksA" href="https://soundcloud.com/user-432649769/hardcore-brood" title="Hardcore Brood" target="_blank">Hardcore Brood</a>
                    </div>
                </div>
            </div>
            <div className="Project" id="NexProject">

                <div className="Beschrijving" id="NextProjectBeschrijving">
                    <div className="BeschrijvingInhoud">
                        <h3>Mijn volgend project</h3>
                        <p>Voor mijn aanstaande project zal ik een website ontwikkelen om de kunstwerken van mijn moeder te presenteren.
                            Deze website zal dienen als een portfolio waarin haar diverse creaties worden tentoongesteld.
                        </p>
                    </div>
                </div>
                <div className="EmbeddedProject" id="NextProjectAPI">
                    <p>Komt eraan...</p>
                </div>
            </div> */}
            
        </div>
    );
}

