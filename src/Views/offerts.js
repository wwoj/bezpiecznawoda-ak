import React ,{useState,useEffect }from "react";
import OffertCard from "../Components/offertCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools,faWater,faTint,faPumpSoap,faBroom } from '@fortawesome/free-solid-svg-icons';
import { Parallax } from 'react-parallax';
import Water6 from "../Pictures/water-pic6.jpg";

const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
const image3 =
  "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const inlineStyle={
    background: '#fff',
    left: '50%',
    top: '50%',
    position:'absolute',
    padding: '20px',
    transform: 'translate(-50%,-50%)'
  
  }
function Offerts(){

    return (
      <div className="page-container">
        <div className="ds-flex-wramp ds-flex-wr-js-sb offerd-cards ">
          <OffertCard type={0} target={0} text="Rozwiązywanie problemów z wodą" />
          <OffertCard type={1} target={1} text="Uzdatnianie wody" />
          <OffertCard type={2} target={2} text="Dezynfekcja wody" />
          <OffertCard
            type={3}
            target={3}
            text="Innowacyjne rozwiązania"
          />
        <OffertCard
            type={4}
            target={4}
            text="Oszczędzanie wody"
          />
        </div>

        <Parallax
          bgImage={Water6}
          strength={-400}
          renderLayer={(precentage) => (
            <div
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: `rgba(30, 46, 56, ${precentage * 0.5})`,
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) scale(${precentage * 5})`,
              }}
            ></div>
          )}
        >
          <div style={{ height: 500 }}>
            <div
              className="logo-back-shadow center-logo"
              style={{ color: "white" }}
            >
              Dostępne usługi
            </div>
          </div>
        </Parallax>
        <div className="offert-list-container box-shadow1" id="offert-table">
          <div id="offert_0" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faTools} size="5x" />
            </div>
            <div className="offert-name">Rozwiązywanie problemów z wodą</div>
            <div className="offert-desc">
              Nie ma takiego problemu z wodą któremu nie stawimy czoła.
              <br />
              Jeżeli masz jakikolwiek problem z wodą lub technologią z nią
              związaną zadzwoń. Na podstawie wieloletniego doświadczenia
              jesteśmy w stanie znaleźć indywidualne rozwiązanie Twojego
              problemu uszyte na miarę.
            </div>
          </div>

          <div id="offert_1" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faTint} size="5x" />
            </div>
            <div className="offert-name">Uzdatnianie wody</div>
            <div className="offert-desc">
              Nasza firma służy w zakresie uzdatniania wody zimnej , ciepłej
              oraz technologicznej. Wykorzystujemy głównie systemy oparte o
              wymianę jonowymienną lub złoża filtracyjne ale także systemy
              odwróconej osmozy dzięki czemu przygotowujemy wodę o odpowiednich
              parametrach wymaganych przez klienta lub stosowane technologie.
            </div>
          </div>
          <div id="offert_2" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faPumpSoap} size="5x" />
            </div>
            <div className="offert-name">Dezynfekcja wody</div>
            <div className="offert-desc">
              Drodzy klienci posiadamy skuteczne rozwiązanie do dezynfekcji wody
              dzięki któremu zwalczamy bakterie typu legionella, escherichia
              coli, ropy błękitnej czy nawet zgorzeli gazowej występujących w
              instalacjach wodnych.
              <br />
              Rozwiązania dopasowujemy do portfela klienta poprzez
              dywersyfikację dostępnych technologii .
            </div>
          </div>
          <div id="offert_3" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faWater} size="3x" />
              {/* <FontAwesomeIcon icon={faBroom} size="3x" /> */}
            </div>
            <div className="offert-name">
              Innowacyjne rozwiązania usuwania osadów <br/>z instalacji
            </div>
            <div className="offert-desc">
              Jeżeli jesteś zainteresowany jak w stosunkowo nie długim czasie
              usunąć osady z instalacji, zabezpieczyć je przed korozją oraz
              zatrzymać proces zarastania rur niskim kosztem i całkowicie
              bezobsługowo na długie lata, skontaktuj się z nami a nasi
              specjaliści dokładnie omówią rozwiązanie i przedstawią ofertę
              cenową indywidualnie dopasowaną do Państwa instalacji.
            </div>
          </div>
          <div id="offert_4" className="ds-flex-wr-js-sb offert-row">
            <div className="offert-icon">
              <FontAwesomeIcon icon={faWater} size="3x" />
              {/* <FontAwesomeIcon icon={faBroom} size="3x" /> */}
            </div>
            <div className="offert-name">
              Oszczędzanie wody <br/>
            </div>
            <div className="offert-desc">
              Jeżeli jesteś zainteresowany jak w stosunkowo nie długim czasie
              usunąć osady z instalacji, zabezpieczyć je przed korozją oraz
              zatrzymać proces zarastania rur niskim kosztem i całkowicie
              bezobsługowo na długie lata, skontaktuj się z nami a nasi
              specjaliści dokładnie omówią rozwiązanie i przedstawią ofertę
              cenową indywidualnie dopasowaną do Państwa instalacji.
            </div>
          </div>
        </div>
      </div>
    );
}
export default Offerts;