import './ProjectPage.css'

export default function ProjectPage() {
    return (
        <div className="ProfilePage">
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
            </div>
        </div>
    );
}