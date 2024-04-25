import './CVPage.css';
import CV from '../../Resources/CV-2024.pdf'

export default function CVPage() {
   return (
       <div className="CVPage">
         <div className="EmbeddedPDF"></div>
         <object class="pdf" data={CV} width="80%" height="500px"></object>
       </div>
   );
}