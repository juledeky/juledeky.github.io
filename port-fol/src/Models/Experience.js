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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
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
        description: "",
        skills: [],
        techs: [],
        startDate: new Date(2022, 6),
        endDate: new Date(2025, 7)
    }),
    new Experience ({
        id:"INTRA",
        type: "work",
        company: "Intratuin",
        workTitle: "Polyvalente Jobstudent",
        description: "",
        skills: [],
        techs: [],
        startDate: new Date(2021, 2),
        endDate: new Date(2021, 7)
    }),
    new Experience ({
        id:"KIQUE",
        type: "volunteering",
        company: "Kique, Minus One, etc",
        workTitle: "Sfeerbeheerder",
        description: "",
        skills: ["Conflict"],
        techs:[],
        startDate: new Date(2025, 4),
        endDate: new Date(2025, 8)
    }),
    new Experience ({
        id:"ZWVTD",
        type: "volunteering",
        company: "Ten Dries Jongerenzorg ZWV",
        workTitle: "Vorming Genderdiversiteit",
        description: "",
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
        description: "",
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
        description: "",
        skills: [],
        techs: [],
        startDate: new Date(2018, 8),
        endDate: new Date(2023, 1)
    })
]