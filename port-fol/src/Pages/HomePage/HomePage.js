import './HomePage.css';
import ProfilePic from '../../Resources/img/SelfPortrait2.jpg'
import { useTranslation } from 'react-i18next';
import {NavLink} from 'react-router-dom';

export function Introduction() {
    
    const { t } = useTranslation();

    //Component with text in it as wel as a profile picture
    return (
        <div class="content-column">
            <div class="text-content">
                <h3>{t("home_title")}</h3>
                <p>{t("home_intro")}</p>
            </div>
            <div className="homeButtons">
                <NavLink to={"/Projects"} className="nav_link" activeClassName="nav_link--active">
                    <button className='homePageBtn'> {t("nav_projects")} </button>
                </NavLink>
                <NavLink to={"/CurriculumVitae"} className="nav_link" activeClassName="nav_link--active">
                    <button className='homePageBtn'> {t("nav_cv")} </button>
                </NavLink>
                <NavLink to={"/Contact"} className="nav_link" activeClassName="nav_link--active">
                    <button className='homePageBtn'> {t("nav_contact")} </button>
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
