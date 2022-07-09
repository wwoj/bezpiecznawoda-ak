import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools,faWater,faTint,faPumpSoap,faFaucet } from '@fortawesome/free-solid-svg-icons';

function Offerts(){

    return (
      <div className="page-container">
        
        <div className="offert-list-container box-shadow1" id="offert-table">
          <div id="offert_0" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faTools} size="5x" />
            </div>
            <div className="offert-name">Rozwiązywanie problemów z wodą</div>
            <div className="offert-desc">              
              Jeżeli masz jakikolwiek problem z&nbsp;wodą lub technologią z&nbsp;nią
              związaną - zadzwoń. Na podstawie wieloletniego doświadczenia
              jesteśmy w&nbsp;stanie znaleźć indywidualne rozwiązanie Twojego
              problemu.
            </div>
          </div>

          <div id="offert_1" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faTint} size="5x" />
            </div>
            <div className="offert-name">Uzdatnianie wody</div>
            <div className="offert-desc">
            Nasza firma zajmuje się uzdatnianiem wody zimnej, ciepłej oraz technologicznej. Wykorzystujemy wszystkie dostępne technologie aby przygotować wodę o&nbsp;odpowiednich parametrach – stosownie do wymagań klienta.
            </div>
          </div>
          <div id="offert_2" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faPumpSoap} size="5x" />
            </div>
            <div className="offert-name">Dezynfekcja wody</div>
            <div className="offert-desc">
            Posiadamy skuteczne rozwiązania w&nbsp;zakresie dezynfekcji wody, dzięki którym zwalczamy bakterie typu legionella, escherichia coli, ropy błękitnej czy nawet zgorzeli gazowej występujące w&nbsp;instalacjach wodnych. Rozwiązania dopasowujemy do klienta poprzez dywersyfikację dostępnych technologii.
            </div>
          </div>
          <div id="offert_3" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faWater} size="5x" />
              {/* <FontAwesomeIcon icon={faBroom} size="3x" /> */}
            </div>
            <div className="offert-name">
              Innowacyjne rozwiązania usuwania osadów z&nbsp;instalacji
            </div>
            <div className="offert-desc">
            Jeżeli chcesz w&nbsp;stosunkowo nie długim czasie:<br/>
- usunąć osady z&nbsp;instalacji<br/>
- zabezpieczyć instalacje przed korozją<br/>
- zatrzymać proces zarastania rur<br/>
To wszystko uzyskasz niskim kosztem i&nbsp;całkowicie bezobsługowo na długie lata!<br/>
 Skontaktuj się z&nbsp;nami, a&nbsp;nasi specjaliści dokładnie omówią rozwiązanie i&nbsp;przedstawią ofertę cenową dopasowaną indywidualnie do Twojej instalacji.    
            </div>
          </div>
          <div id="offert_4" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faFaucet} size="5x" />
              {/* <FontAwesomeIcon icon={faBroom} size="3x" /> */}
            </div>
            <div className="offert-name">
              Oszczędzanie wody <br />
            </div>
            <div className="offert-desc">Nasza firma zajmuje sie także oszczędzaniem wody. Jesteśmy w&nbsp;stanie zaoszczędzić około 30 procent na rachunku. Koszt inwestycji szybko sie zwraca zapewniając stałe zyski z&nbsp;oszczędności.</div>
          </div>
        </div>
      </div>
    );
}
export default Offerts;