import './MCEVERGEMPage.css'
import UitgebreideUitlegImage from '../../Resources/img/FCUitgebreidMCE.png'
import SRAScherm1 from '../../Resources/img/SRA-Scherm1.png'
import SRAScherm2 from '../../Resources/img/SRA-Scherm2.png'
import SRAWord from '../../Resources/img/SRA-Word.png'
import FCMCEBefore from '../../Resources/img/FlowchartMCEBefore.png'
import FCMCEAfter from '../../Resources/img/FlowchartMCEAfter.png'
import VSIcon from '../../Resources/Icons/Visual_Studio_Icon_2022.svg'
import GithubIcon from '../../Resources/Icons/GitHub_Invertocat_Black.svg'

export default function MCEvergemPage() {

    return (
       <div className="MCEVERGEMPage">
        <div class='Title'>
            <h1>SERVICE RAPPORT APP - MCE EVERGEM</h1>
        </div>
        <div class='ProjectLinks'>
             <div><a className='IconGh' href="https://github.com/JULDEK/ServiceRapportApp" alt="Logo of github"><img src={GithubIcon} ></img></a></div>
             <div className='IconBg'><img src={VSIcon} ></img></div>
        </div>

        <div className='Container'>
            <div className="EmbeddedProject">
                <p>MCE Evergem contacteerde mij via Randstad met de vraag om hun adminstratieve takenlast te verlichten. 
                    Ze beschrijven hun activiteit als "het verkopen van een klantgerichte oplossing voor alle problemen wat betreft stroomuitval, spannings- variaties, 
                    blikseminslag, …".</p>
                <p>Voor het onderhoud van hun UPS systemen, worden er onderhoudswerken uitgevoerd waar de gegevens van de UPS systemen worden uitgelezen en geanalyseerd. Hiervoor
                    stellen ze een 'Service Rapport' op. Het opstellen van dit formulier nam teveel tijd in beslag. </p>
            </div>
            <div className="Beschrijving" id="FlowchartMCEBefore">
                <img src={FCMCEBefore}></img>
            </div>
        </div>
        <div className='Container'>
            <div className='EmbeddedProject' id="FlowchartMCEAfter">
            <img src={FCMCEAfter}></img>
            </div>
            <div className='Beschrijving'>
                <p>Na een korte analyse van hun werking, stelde ik een simpele oplossing voor. Het creëren van een applicatie die hun taken zou automatiseren.</p>
            </div>
        </div>


        <div className='Uitbreiding'>
            <div className='UitbreidingFlowchart'>
                <h2>Uitgebreide uitleg.</h2>
                <img src={UitgebreideUitlegImage} ></img>
            </div>
            <div className='UitgebreideUitleg'>
                <div className='Stap'>
                    <div id='Uitleg'>
                        <h3>Stap 1</h3>
                        <p>Op het beginscherm van de applicatie kan de gebruiker een CSV bestand uploaden met daarin de metingen van een machine. Daarna moet de gebruiker de juiste 
                            soort machine aanduiden, aangezien dit niet altijd te vinden is in het CSV bestand. De driefase of monofase past het volgende scherm aan, meer gegevens of minder gegevens.
                        </p>
                        <p>
                            De gebruiker kan ook een excelfiche van de klant uploaden, hieruit wordt de algemene info van de klant gehaald.
                        </p>
                    </div>
                    <div id='Image'>
                        <img src={SRAScherm1}></img>
                    </div>
                </div>
                <div className='Stap'>
                    <div id='Uitleg'>
                        <h3>Stap 2</h3>
                        <p>Het volgende scherm wordt ingedeeld in klantengegevens, MCE en prestatie gegevens, machinegegevens, en de metingen.</p>
                        <p>Alle mogelijke data die uit de CSV bestanden kan gehaald worden, wordt hier automatisch ingevuld. Daarna kan de gebruiker de gegevens nakijken en
                            verder aanvullen, onder andere ook de uren en dagen van de prestatie en zijn eigen naam. Wanneer alles in orde is, kan de gebruiker kiezen tussen het 
                            downloaden van een PDF en een Word bestand.
                        </p>

                        <p>
                            Wanneer de gebruiker een PDF of Word bestand genereert, wordt een JSON file aangemaakt met de gegevens van de klant en metingen. Door tijd en geldgebrek 
                            ben ik er niet toegekomen om een databank toe te voegen. Dit zou de administratie verder optimaliseren door het uploaden van klantenfiches
                            overbodig te maken.
                        </p>
                    </div>
                    <div id='Image'>
                        <img src={SRAScherm2}></img>
                    </div>
                </div>
                <div className='Stap'>
                    <div id='Uitleg'>
                        <h3>Stap 3</h3>
                        <p>De applicatie creëert een Wordbestand waarin alle gegevens in de layout zijn gezet. </p>
                    </div>
                    <div id='Image'>
                        <img src={SRAWord}></img>
                    </div>
                </div>
            </div>
        </div>
       </div>


    );
}

