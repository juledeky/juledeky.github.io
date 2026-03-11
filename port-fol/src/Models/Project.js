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
    title: "projects.mce_title",
    description: "projects.mce_description",
    link:"/MCEVERGEM",
    linkType:"internal",
    image:"",
    imageEmbedLinkFrame: {},
    type:"Software",
    socials:""
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