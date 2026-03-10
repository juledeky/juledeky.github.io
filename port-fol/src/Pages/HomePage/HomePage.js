import './HomePage.css';
import ProfilePic from '../../Resources/img/SelfPortrait2.jpg'

import {NavLink} from 'react-router-dom';


export function Introduction() {
    //Component with text in it as wel as a profile picture
    return (
        <div class="content-column">
            <div class="text-content">
                <h3>Hey! Ik ben Jule.</h3>
                <p>Als een toegewijde softwareontwikkelaar, richt ik mij op het bevorderen 
                    van gendergelijkheid en diversiteit binnen de technologische sector. 
                    Met een passie voor het creëren van inclusieve en rechtvaardige oplossingen, 
                    ben ik vastbesloten om mijn vaardigheden in te zetten om positieve verandering 
                    te bewerkstelligen. Mijn streven is om innovatieve software te ontwikkelen die 
                    niet alleen technologische vooruitgang vertegenwoordigt, maar ook bijdraagt aan 
                    een meer diverse en inclusieve samenleving. (Bedankt ChatGPT) </p>
            </div>
            <div className="homeButtons">
                <NavLink to={"/Projects"} className="nav_link" activeClassName="nav_link--active">
                    <button className='homePageBtn'> Mijn projecten </button>
                </NavLink>
                <NavLink to={"/CurriculumVitae"} className="nav_link" activeClassName="nav_link--active">
                    <button className='homePageBtn'> Mijn CV </button>
                </NavLink>
                <NavLink to={"/Contact"} className="nav_link" activeClassName="nav_link--active">
                    <button className='homePageBtn'> Contacteer mij </button>
                </NavLink>
                
            </div>
        </div>
    );

}

function Profile(){
    return (
            <div class="image-column">
                <img className="ProfilePic" 
                    src={ProfilePic}
                    alt="Picture of me standing on one leg on a path in a forest."
                />
            </div>
    );
}

export default function HomePage() {
    return (
        <div className="HomePage">
            <div className="container">
                <div class="black-block">
                    <div class="firstHalve">
                        <Introduction />
                    </div>
                    <div class="secondHalve">
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    );
}
