import './ProjectPage.css'

export default function ProjectPage() {
    return(
        <div className="ProfilePage">
            <h3>This page is under construction</h3>
            <div className="Podcast">
                <div className="PodcastBeschr" >
                    <h3>Ik maak een podcast</h3>
                    <p>Beluister nu de laatste aflevering</p>
                </div>
                <div className="PodcastSPAPI">
                    <iframe className="SpotifyAPI" src="https://open.spotify.com/embed/episode/3n6axKJ7O94Q5WUH5D80x7?utm_source=generator&amp;theme=0" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}