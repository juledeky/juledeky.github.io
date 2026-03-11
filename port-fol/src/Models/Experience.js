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
        company: "companies.hlg_name",
        workTitle: "experiences.HLG_workTitle",
        description: "experiences.HLG_description",
        skills: [, "Business Analysis", "Social Skills", "Client skills", "Teamwork"],
        techs: ["Wordpress"],
        startDate: new Date(2025, 4),
        endDate: new Date(2025, 8)
    }),
    new Experience({
        id:"UA",
        type: "work",
        company: "companies.UA_name",
        workTitle: "experiences.UA_workTitle",
        description: "experiences.UA_description",
        skills: ["Canva", "Teamwork", "Schrijven", "Beleid", "Onderzoek"],
        techs: ["Canva"],
        startDate: new Date(2024, 9),
        endDate: new Date(2025, 0)
    }),
    new Experience ({
        id:"MCE",
        type: "work",
        company: "companies.mce_name",
        workTitle: "experiences.MCE_workTitle",
        description: "experiences.MCE_description",
        skills: ["Client Skills", "Business Analysis"],
        techs: ["Visual Studio", "C#"],
        startDate: new Date(2024, 1),
        endDate: new Date(2024, 8)
    }),
    new Experience ({
        id:"CODIT",
        type: "work",
        company: "Codit",
        workTitle: "experiences.CODIT_workTitle",
        description: "experiences.CODIT_description",
        skills: [],
        techs: ["Visual Studio", "C#", "Azure", "SQL", "SMSS"],
        startDate: new Date(2021, 8),
        endDate: new Date(2022, 2)
    }),
    new Experience ({
        id:"CD",
        type: "work",
        company: "Cartamundi Digital",
        workTitle: "experiences.CD_workTitle",
        description: "experiences.CD_description",
        skills: ["Client Skills", "Business Analysis"],
        techs: ["Spring", "Java", "IntelliJ"],
        startDate: new Date(2021, 2),
        endDate: new Date(2021, 5)
    }),
    new Experience ({
        id:"HOGENT",
        type: "work",
        company: "companies.UG_name",
        workTitle: "experiences.HOGENT_work_workTitle",
        description: "experiences.HOGENT_work_description",
        skills: ["Kwalitative Research"],
        techs: ["Word"],
        startDate: new Date(2021, 1),
        endDate: new Date(2025, 8)
    }),
    new Experience ({
        id:"WAREM",
        type: "work",
        company: "Restaurant Warempel",
        workTitle: "experiences.WAREM_workTitle",
        description: "experiences.WAREM_description",
        skills: ["Teamwork", "Stressbestendigheid"],
        techs: [],
        startDate: new Date(2022, 6),
        endDate: new Date(2025, 7)
    }),
    new Experience ({
        id:"INTRA",
        type: "work",
        company: "Intratuin",
        workTitle: "experiences.INTRA_workTitle",
        description: "experiences.INTRA_description",
        skills: ["Klantvriendelijkheid"],
        techs: [],
        startDate: new Date(2021, 2),
        endDate: new Date(2021, 7)
    }),
    new Experience ({
        id:"KIQUE",
        type: "volunteering",
        company: "Kique, Minus One, etc",
        workTitle: "experiences.KIQUE_workTitle",
        description: "experiences.KIQUE_description",
        skills: ["Conflictmanagement"],
        techs:[],
        startDate: new Date(2025, 4),
        endDate: new Date(2025, 8)
    }),
    new Experience ({
        id:"ZWVTD",
        type: "volunteering",
        company: "companies.ZWVTD_name",
        workTitle: "experiences.ZWVTD_workTitle",
        description: "experiences.ZWVTD_description",
        skills: [],
        techs:[],
        startDate: new Date(2023, 0),
        endDate: new Date(2023, 0)
    }),
    new Experience ({
        id:"HOGENT",
        type: "study",
        company: "companies.HOGENT_name",
        workTitle: "experiences.HOGENT_study_workTitle",
        description: "experiences.HOGENT_study_description",
        skills: [],
        techs:[],
        startDate: new Date(2018, 8),
        endDate: new Date(2023, 1)
    }),
    new Experience ({
        id:"UGENT",
        type: "study",
        company: "companies.UG_name",
        workTitle: "experiences.UGENT_workTitle",
        description: "experiences.UGENT_description",
        skills: [],
        techs: [],
        startDate: new Date(2018, 8),
        endDate: new Date(2023, 1)
    })
]