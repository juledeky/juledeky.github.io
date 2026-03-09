import React from "react";
import { Component } from "react";

export class Experience{
    constructor({id, type, company, workTitle, description, skills, techs, startDate, endDate}) {
        this.id = id;
        this.type = type;//Work, Study, Volunteering
        this.company = company;
        this.workTitle = workTitle;
        this.description = description;
        this.skills = skills;
        this.techs = techs;
        this.startDate = startDate;
        this.endDate = endDate;

    }
}

export const experiences = [
    new Experience({
        id:"HLG",
        type: "work",
        company: "Hubert Lampo Genootschap",
        workTitle: "Student Developer",
        description: "Herwerking en professionalisering van een bestaande WordPress-website, Verbetering van gebruiksvriendelijkheid, structuur en visuele uitstraling, Afstemming met de klant rond noden en verwachtingen, Ondersteuning en uitleg zodat de klant de website zelfstandig verder kon beheren",
        skills: [, "Business Analysis", "Social Skills", "Client skills", "Teamwork"],
        techs: ["Wordpress"],
        startDate: new Date(2025, 4),
        endDate: new Date(2025, 8)
    }),
    new Experience({
        id:"UA",
        type: "work",
        company: "Universiteit Antwerpen",
        workTitle: "Stagiair Team Diversiteit en Inclusie",
        description: "Medewerking aan een onderzoeksproject rond de ervaringen van werknemers met een functiebeperking, Opstellen en afname van interviews en verwerking van kwalitatieve input, Schrijven van interne en externe teksten op maat van verschillende doelgroepen, Samenwerking met diverse SPOC’s en stakeholders binnen de universiteit",
        skills: ["Canva", "Teamwork", "Schrijven", "Beleid", "Onderzoek"],
        techs: ["Canva"],
        startDate: new Date(2024, 9),
        endDate: new Date(2025, 0)
    }),
    new Experience ({
        id:"MCE",
        type: "work",
        company: "MCE Evergem",
        workTitle: "Student C# Developer",
        description: "Ontwikkeling van een WPF-applicatie voor administratief beheer, Analyse van gebruikersnoden en vertaling naar functionele software-oplossingen, Samenwerking met opdrachtgever",
        skills: ["Client Skills", "Business Analysis"],
        techs: ["Visual Studio", "C#"],
        startDate: new Date(2024, 1),
        endDate: new Date(2024, 8)
    }),
    new Experience ({
        id:"CODIT",
        type: "work",
        company: "Codit",
        workTitle: "Junior C# Developer",
        description: "Ontwikkeling en aanpassing van softwarecomponenten in C# binnen een consultancycontext, Werken met Azure-technologieën in een professionele ontwikkelomgeving, Kennismaking met best practices rond codekwaliteit, testing en documentatie, Samenwerking binnen een team van developers aan klantprojecten",
        skills: [],
        techs: ["Visual Studio", "C#", "Azure", "SQL", "SMSS"],
        startDate: new Date(2021, 8),
        endDate: new Date(2022, 2)
    }),
    new Experience ({
        id:"CD",
        type: "work",
        company: "Cartamundi Digital",
        workTitle: "Stagiair Java Developer",
        description: "Analyse en optimalisatie van een bestaand algoritme voor het inpakken van bordspellen, Vergelijking van performantie voor en na optimalisatie, Rapportering van bevindingen aan het ontwikkelteam",
        skills: ["Client Skills", "Business Analysis"],
        techs: ["Spring", "Java", "IntelliJ"],
        startDate: new Date(2021, 2),
        endDate: new Date(2021, 5)
    }),
    new Experience ({
        id:"HOGENT",
        type: "work",
        company: "Hogeschool Gent",
        workTitle: "Transcribent/Onderzoeksassistent",
        description: "Deelname aan kwalitatieve onderzoeksprojecten, Bijwonen en transcriberen van diepte-interviews, Verwerking van vertrouwelijke onderzoeksdata",
        skills: ["Kwalitative Research"],
        techs: ["Word"],
        startDate: new Date(2021, 1),
        endDate: new Date(2025, 8)
    }),
    new Experience ({
        id:"WAREM",
        type: "work",
        company: "Restaurant Warempel",
        workTitle: "Afwasser/Keukenhulp",
        description: "Studentenjob in een drukke horecaomgeving, Efficiënt en zelfstandig werken onder tijdsdruk, Samenwerking binnen een team met aandacht voor kwaliteit en hygiëne",
        skills: ["Teamwork", "Stressbestendigheid"],
        techs: [],
        startDate: new Date(2022, 6),
        endDate: new Date(2025, 7)
    }),
    new Experience ({
        id:"INTRA",
        type: "work",
        company: "Intratuin",
        workTitle: "Polyvalente Jobstudent",
        description: "Ondersteuning van dagelijkse winkelactiviteiten; kassa en vakkenvullen, Klanten helpen en zorgen voor een verzorgde winkelomgeving, Verantwoordelijkheid opnemen tijdens piekmomenten",
        skills: ["Klantvriendelijkheid"],
        techs: [],
        startDate: new Date(2021, 2),
        endDate: new Date(2021, 7)
    }),
    new Experience ({
        id:"KIQUE",
        type: "volunteering",
        company: "Kique, Minus One, etc",
        workTitle: "Sfeerbeheerder",
        description: " Instaan voor veiligheid, rust en inclusieve sfeer tijdens evenementen, Aanspreekpunt bij spanningen of incidenten, Samenwerking binnen een divers team",
        skills: ["Conflictmanagement"],
        techs:[],
        startDate: new Date(2025, 4),
        endDate: new Date(2025, 8)
    }),
    new Experience ({
        id:"ZWVTD",
        type: "volunteering",
        company: "Ten Dries Jongerenzorg ZWV",
        workTitle: "Vorming Genderdiversiteit",
        description: " Ontwikkeling en begeleiding van een workshop voor hulpverleners, Vertaling van academische kennis naar praktijk, Sensitieve en doelgroepgerichte communicatie",
        skills: [],
        techs:[],
        startDate: new Date(2023, 0),
        endDate: new Date(2023, 0)
    }),
    new Experience ({
        id:"HOGENT",
        type: "study",
        company: "Hogeschool Gent",
        workTitle: "Bachelor in Toegepaste Informatica",
        description: "Masterproef: Toegankelijkheid van de digitale infrastructuur van universitaire bibliotheken in Vlaanderen voor gebruikers met een functiebeperking.",
        skills: [],
        techs:[],
        startDate: new Date(2018, 8),
        endDate: new Date(2023, 1)
    }),
    new Experience ({
        id:"UGENT",
        type: "study",
        company: "Universiteit Gent",
        workTitle: "Master in Gender en Diversiteit",
        description: "Afstudeerrichting web- en mobiele applicaties, Bachelorproef: Digitale toegankelijkheid van Vlaamse mobiele (overheids)applicaties voor gebruikers met een visuele beperking.",
        skills: [],
        techs: [],
        startDate: new Date(2018, 8),
        endDate: new Date(2023, 1)
    })
]