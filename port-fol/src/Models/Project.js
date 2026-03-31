
import SRAScherm1 from '../Resources/img/SRA-Scherm1.png'
import SRAScherm2 from '../Resources/img/SRA-Scherm2.png'
import SRAWord from '../Resources/img/SRA-Word.png'

export class Project{
    constructor({id, title, description, link, linkType, image, imageEmbedLinkFrame, type, socials, context, flowSteps, steps}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.Type = type;
        this.link = link;
        this.linkType = linkType
        this.image = image;
        this.ImageEmbedLinkFrame = imageEmbedLinkFrame;
        this.socials = socials;
        this.flowSteps = flowSteps;
        this.steps = steps;
        this.context= context;
    }


}

export const projects = [
new Project ({
    id:"MCE",
    title: "projects.mce_title",
    description: "projects.mce_description",
    context:"MCE Evergem contacteerde mij via Randstad met de vraag om hun adminstratieve takenlast te verlichten. Ze beschrijven hun activiteit als het verkopen van een klantgerichte oplossing voor alle problemen wat betreft stroomuitval, spannings- variaties, blikseminslag, ….Voor het onderhoud van hun UPS systemen, worden er onderhoudswerken uitgevoerd waar de gegevens van de UPS systemen worden uitgelezen en geanalyseerd. Hiervoor stellen ze een 'Service Rapport' op. Het opstellen van dit formulier nam teveel tijd in beslag.",
    link:"/MCEVERGEM",
    linkType:"internal",
    image:"",
    imageEmbedLinkFrame: {},
    type:"Software",
    socials:"",
    flowSteps: [
        { label: 'Onderhoud machine: Service Rapport nodig' },
        { label: 'Data machine & klant' },
        { label: 'Upload Excel in app' },
        { label: 'Data nakijken & aanvullen' },
        { label: 'Genereer Word of PDF' },
    ],
    steps: [
        {
        title: 'CSV uploaden & machine kiezen',
        description: `Op het beginscherm kan de gebruiker een CSV bestand uploaden
            met de metingen van een machine. Daarna duidt de gebruiker het type
            machine aan (mono- of driefase), waarna het volgende scherm zich aanpast.`,
        imageSrc: SRAScherm1,
        imageAlt: 'Stap 1 — upload scherm',
        },
        {
        title: 'Gegevens nakijken & aanvullen',
        description: `Het volgende scherm toont klantengegevens, MCE-gegevens,
            machinegegevens en metingen. Alle data uit de CSV wordt automatisch
            ingevuld. De gebruiker kan aanvullen en kiezen tussen PDF of Word.`,
        imageSrc: SRAScherm2,
        imageAlt: 'Stap 2 — editor scherm',
        },
        {
        title: 'Word of PDF genereren',
        description: `De applicatie genereert een opgemaakt Word- of PDF-bestand
            met alle gegevens in de juiste layout. Tegelijk wordt een JSON-bestand
            aangemaakt voor eventuele verdere verwerking.`,
        imageSrc: SRAWord,
        imageAlt: 'Stap 3 — gegenereerd rapport',
        }
    ]
}),
new Project({
    id:"HLG",
    title: "companies.hlg_name",
    description: "projects.hlg_description",
    link:"https://hubertlampogenootschap.be",
    linkType:"external",
    image:"",
    imageEmbedLinkFrame:{},
    type:"Software",
    socials:""

}),
new Project({
    id:"Podcast",
    title: "projects.podcast_title",
    description: "projects.podcast_description",
    link:"",
    linkType:"",
    image:"",
    imageEmbedLinkFrame: {__html: '<iframe className="SpotifyAPI" height="80px" "600px" src="https://open.spotify.com/embed/episode/3n6axKJ7O94Q5WUH5D80x7?utm_source=generator&amp;theme=0" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>'},
    type:"Sound",
    socials: {
        type: "instagram", url: "https://www.instagram.com/onwinepodcast/"
    }
}),
new Project({
    id:"SoundcloudMusic",
    title: "projects.sc_title",
    description: "projects.sc_description",
    link:"https://soundcloud.com/user-432649769",
    linkType:"external",
    image:"",
    imageEmbedLinkFrame: {__html: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1648218918&color=ff5500"></iframe><div style="font-size: 10px; color: var(--color-primary);line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-432649769" title="JD" target="_blank" style="color: var(--color-primary); text-decoration: none;">JD</a> · <a href="https://soundcloud.com/user-432649769/hardcore-brood" title="Hardcore Brood" target="_blank" style="color: var(--color-primary); text-decoration: none;">Hardcore Brood</a></div>'},
    type:"Sound",
    socials:""
}),
new Project({
    id:"MusicPerformance",
    title: "projects.mp_title",
    description: "projects.mp_description",
    link:"",
    linkType:"",
    image:"",
    imageEmbedLinkFrame: {},
    type:"Sound",
    socials: {
        type: "instagram", url: "https://www.instagram.com/julemaaktmuziek/"
    }
}),
new Project({
    id:"ComingSoon",
    title: "projects.nextproject_title",
    description: "projects.nextproject_description",
    link:"",
    linkType:"",
    image:"",
    imageEmbedLinkFrame: {},
    type:"Software",
    socials:""
})
]