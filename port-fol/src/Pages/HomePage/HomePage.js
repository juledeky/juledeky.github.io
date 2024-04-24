import './HomePage.css';
import ProfilePic from '../../Resources/img/SelfPortrait2.jpg'



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
            src={ProfilePic}
            alt="Picture of me standing on one leg on a path in a forest."
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
