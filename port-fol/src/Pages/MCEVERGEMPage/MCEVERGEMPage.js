import './MCEVERGEMPage.css'
import { projects } from '../../Models/Project';
import { useTranslation } from 'react-i18next';

import UitgebreideUitlegImage from '../../Resources/img/FCUitgebreidMCE.png'
import SRAScherm1 from '../../Resources/img/SRA-Scherm1.png'
import SRAScherm2 from '../../Resources/img/SRA-Scherm2.png'
import SRAWord from '../../Resources/img/SRA-Word.png'
import FCMCEBefore from '../../Resources/img/FlowchartMCEBefore.png'
import FCMCEAfter from '../../Resources/img/FlowchartMCEAfter.png'
import VSIcon from '../../Resources/Icons/Visual_Studio_Icon_2022.svg'
import GithubIcon from '../../Resources/Icons/GitHub_Invertocat_Black.svg'
/*
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
*/



function FlowDiagram({ steps }) {

  console.log(steps);
  const BOX_W = 140;
  const BOX_H = 48;
  const GAP   = 40;
  const ARROW = 14;
  const PAD   = 24;
  const totalW = steps.length * BOX_W + (steps.length - 1) * GAP + PAD * 2;
  const totalH = BOX_H + PAD * 2;
  const cy = totalH / 2;
 
  return (
    <svg
      viewBox={`0 0 ${totalW} ${totalH}`}
      className="flow-svg"
      aria-label="Procesdiagram"
    >
      {steps.map((step, i) => {
        const x = PAD + i * (BOX_W + GAP);
        const isFirst = i === 0;
        const isLast  = i === steps.length - 1;
        return (
          <g key={i}>
            {/* Arrow from previous box */}
            {i > 0 && (
              <g>
                <line
                  x1={x - GAP}
                  y1={cy}
                  x2={x - ARROW}
                  y2={cy}
                  stroke="#2a9d72"
                  strokeWidth="1.5"
                />
                <polygon
                  points={`${x - ARROW},${cy - 5} ${x},${cy} ${x - ARROW},${cy + 5}`}
                  fill="#2a9d72"
                />
              </g>
            )}
            {/* Box */}
            <rect
              x={x}
              y={cy - BOX_H / 2}
              width={BOX_W}
              height={BOX_H}
              rx="6"
              fill={isFirst || isLast ? '#2a9d72' : '#1a1a1a'}
              stroke="#2a9d72"
              strokeWidth="1"
            />
            {/* Label — wrap long text */}
            <foreignObject x={x + 6} y={cy - BOX_H / 2} width={BOX_W - 12} height={BOX_H}>
              <div xmlns="http://www.w3.org/1999/xhtml" className="flow-label"
                style={{ color: isFirst || isLast ? '#000' : '#f0ece4' }}>
                {step.label}
              </div>
            </foreignObject>
          </g>
        );
      })}
    </svg>
  );
}
 
// ── Step card ────────────────────────────────────────────────────────────────
function StepCard({ number, title, description, imageSrc, imageAlt }) {
  
  const { t } = useTranslation();

  const isEven = number % 2 === 0;
  console.log(imageSrc);
  return (
    <div className={`step-card ${isEven ? 'step-card--reverse' : ''}`}>
      <div className="step-card__text">
        <div className="step-number">
          <span>{String(number).padStart(2, '0')}</span>
        </div>
        <h3 className="step-title">{t(title)}</h3>
        <p className="step-desc">{description}</p>
      </div>
      {imageSrc && (
        <div className="step-card__visual">
          <div className="app-window">
            <img src={imageSrc} alt={imageAlt || title} />
          </div>
        </div>
      )}
    </div>
  );
}
 //<img src={imageSrc} alt={imageAlt || title} />
// ── Main component ───────────────────────────────────────────────────────────
export default function MCEVERGEMPage({ project }) {

  
  const { t } = useTranslation();

  if (!project) {
    project = projects.find(project => project.id==="MCE");
  } 

 console.log(project);
  const {
    title,
    description,
    tags = [],
    context,
    links = [],
    flowSteps = [],
    steps = [],
  } = project;
 
  const titleTrimmed=t(project.title).split('-')[0].trim();
  const subtitleTrimmed=t(project.title).split('-')[1].trim();

  return (
    <div className="pd-page">
 
      {/* ── Hero ── */}
      <header className="pd-hero">
        <div className="pd-hero__inner">
          <div className="pd-hero__tags">
            {tags.map((tag) => (
              <span key={tag.label} className="pd-tag">
                {tag.icon && <img src={tag.icon} alt="" />}
                {tag.label}
              </span>
            ))}
          </div>
          <h1 className="pd-title">{titleTrimmed}</h1>
          {subtitleTrimmed && <h3 className="pd-subtitle">{subtitleTrimmed}</h3>}
          <div className="pd-links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="pd-link-btn"
              >
                {link.icon && (
                  <img src={link.icon} alt="" className="pd-link-btn__icon" />
                )}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>
 
      {/* ── Context ── */}
      {context && (
        <section className="pd-section pd-context">
          <div className="pd-section__inner pd-section__inner--prose">
            <p className="section-label">Context</p>
            <hr className="section-divider" />
            <p className="pd-body">{context}</p>
          </div>
        </section>
      )}
 
      {/* ── Flow diagram ── */}
      {flowSteps.length > 0 && (
        <section className="pd-section pd-flow">
          <div className="pd-section__inner">
            <p className="section-label">Procesflow</p>
            <hr className="section-divider" />
            <div className="flow-scroll">
              <FlowDiagram steps={flowSteps} />
            </div>
          </div>
        </section>
      )}
 
      {/* ── Steps ── */}
      {steps.length > 0 && (
        <section className="pd-section pd-steps">
          <div className="pd-section__inner">
            <p className="section-label">Uitgebreide uitleg</p>
            <hr className="section-divider" />
            <div className="steps-list">
              {steps.map((step, i) => (
                <StepCard key={i} number={i + 1} {...step} />
              ))}
            </div>
          </div>
        </section>
      )}
 
    </div>
  );
}

