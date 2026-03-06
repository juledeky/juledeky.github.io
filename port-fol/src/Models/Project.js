export class Project{
    constructor({id, title, description, link, linkType, image, imageEmbedLinkFrame, type, socials}) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.Type = type;
        this.link = link;
        this.linkType = linkType
        this.image = image;
        this.ImageEmbedLinkFrame = imageEmbedLinkFrame;
        this.socials = socials;
    }


}

export const projects = [
new Project ({
    id:"MCE",
    title: "MCE Evergem - Service Rapport App",
    description: "Na het starten met de opleiding Gender en Diversiteit, begon ik als jobstudent te werken bij MCE om een software applicatie te bouwen om hun administratieve lasten te verlichten.",
    link:"/MCEVERGEM",
    linkType:"internal",
    image:"",
    imageEmbedLinkFrame: {},
    type:"Software",
    socials:""
}),
new Project({
    id:"HLG",
    title: "Hubert Lampo Genootschap",
    description: "Op vraag van de bestuursleden van het Hubert Lampo Genootschap verfris ik langzaam hun nieuwe website via Wordpress.",
    link:"https://hubertlampogenootschap.be",
    linkType:"external",
    image:"",
    imageEmbedLinkFrame:{},
    type:"Software",
    socials:""

}),
new Project({
    id:"Podcast",
    title: "On Wine Podcast",
    description: "Samen met Wies Ballekens maak ik sporadisch een aflevering van onze podcast On Wine. Wies houdt zich bezig met de inhoudelijke kant, en ik verzorg de technische aspecten. Beluister nu onze meest recente aflevering!",
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
    title: "Muzikale creaties",
    description: "Een van mijn vrijetijdsbestedingen is het creëren van muziek, hoewel het niet van professionele kwaliteit is, geniet ik er toch van als vorm van ontspanning. Voel je vrij om mijn nieuwste nummer te beluisteren.",
    link:"https://soundcloud.com/user-432649769",
    linkType:"external",
    image:"",
    imageEmbedLinkFrame: {__html: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1648218918&color=ff5500"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/user-432649769" title="JD" target="_blank" style="color: #cccccc; text-decoration: none;">JD</a> · <a href="https://soundcloud.com/user-432649769/hardcore-brood" title="Hardcore Brood" target="_blank" style="color: #cccccc; text-decoration: none;">Hardcore Brood</a></div>'},
    type:"Sound",
    socials:""
}),
new Project({
    id:"MusicPerformance",
    title: "Muzikale optredens",
    description: "Naast het opnemen en creëren van muziek, treed ik af en toe ook op.",
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
    title: "Mijn volgend project",
    description: "Voor mijn aanstaande project zal ik een website ontwikkelen om de kunstwerken van mijn moeder te presenteren. Deze website zal dienen als een portfolio waarin haar diverse creaties worden tentoongesteld.",
    link:"",
    linkType:"",
    image:"",
    imageEmbedLinkFrame: {},
    type:"Software",
    socials:""
})
]