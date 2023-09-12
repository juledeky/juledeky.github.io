import './HomePage.css';



export function Introduction() {
    //Component with text in it as wel as a profile picture
    return (
        <div>
            <div className="Introduction">
                <h1>Hello and welcome to my Website.</h1>
            </div>
            <div className="Profile">
                <Profile />
                <p>It is currently still under construction.</p>
            </div>
        </div>
       
    );

}

function Profile(){
    return (
        <img className="ProfilePic" 
            src="https://art.pixilart.com/sr24f9edfb668aws3.png"
            alt="Self Portrait in Pixel Art"
        />
    );
}

export default function HomePage() {
    return (
        <div className="HomePage">
            <Introduction />
        </div>
    );
}
