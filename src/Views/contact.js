import React ,{useState,useEffect }from "react";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane,faLocationDot,faPhone,faEnvelope,faClock} from '@fortawesome/free-solid-svg-icons';


function Contact(){
    const [count, setCount] = useState(0);
    const [emailAddress, setEmail] = useState("");
    const [textMessage, setMessage] = useState("");
    const [customerName, SetCustomer] = useState("");
    const [contactObject,SetContactObject] = useState({
      'email':"wojcik.wojtek@yahoo.pl",
      'customerMessage':'Hello World!!!',
      'customerName':"Wojciech Wójcik"
    })



    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: "Learn Hooks" }]);
    function testMe(){
        setCount(count + 1);
        console.log("TestMe",count)
    }

    useEffect(() => {
        // Zaktualizuj tytuł dokumentu, korzystając z interfejsu API przeglądarki
        // document.title = `Naciśnięto ${count} razy`;
      });
    const textUpdating = (event)=>{
      let objectId = event.target.id;
      let objectValue=event.target.value;
      switch(objectId)
      {
        case "customerEmail":
          setEmail(objectValue);
          break;
        case "messageArea":
          setMessage(objectValue);
          break;
        case "customerName":
          SetCustomer(objectValue);
          break;
      }
  setEmail(event.target.value);
    }
   
    
    const sendEmail = (e) => {
      e.preventDefault();
      console.log("Send email")
      console.log("Object:",e.target)

      emailjs.sendForm('service_xu3exsx', 'template_1mdz2w7', e.target, 'user_tkAMXhYpiBWbtyiXwqcFB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
      <div className="page-container">
        <div className="ds-flex-wr-js-sb">
          <div className="form-sides">
            <h2>Informacje</h2>
            <p>
              Skontaktuj się znami aby złożyć zamowienie, uzyskać szczegółowe
              informacje o naszych usłygach którymi jesteś zainteresowany. Nasz
              zespół przekaże ci wszystkie informajce jakie będziesz
              potrzebował.
            </p>
            <p> <FontAwesomeIcon icon={faPaperPlane} size="1x" /> <span>ul. Testowa 1X,31-30X Kraków</span></p>
            <p> <FontAwesomeIcon icon={faPhone} size="1x" /><span>+48-XXX-XXX-XXX</span></p>
            <p><FontAwesomeIcon icon={faEnvelope} size="1x" /><span>xxxx.xxx@xxx.xxx</span></p>
            <p> <FontAwesomeIcon icon={faClock} size="1x" /><span>Pon-Pt 8.00 - 18.00</span></p>
          </div>
          <div className="form-sides">
            <h2>Formularz kontaktowy</h2>
            <form
              id="contactForm"
              className="form-padding"
              onSubmit={sendEmail}
              style={{ width: "100%" }}
            >
              <div className="box-shadow1">
                <div className="width-100">
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    placeholder="imię i nazwisko"
                    // onChange={textUpdating}
                    className="form-inputs"
                    required
                  />
                </div>
                <div className="width-100">
                  <input
                    type="email"
                    id="osztyciulujebany"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                    placeholder="email@address.com"
                    // onChange={textUpdating}
                    className="form-inputs"
                    required
                  />
                </div>
                <div className="width-100">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    // onChange={textUpdating}
                    placeholder="nr telefonu"
                    className="form-inputs"
                    required
                  />
                </div>
                <div className="width-100">
                  <textarea
                    id="messageArea"
                    rows="4"
                    // cols="75"
                    form="contactForm"
                    name="customerMessage"
                    required
                    style={{ resize: "none" }}
                    className="form-inputs"
                    onChange={textUpdating}
                  ></textarea>
                </div>

                <div className="width-100">
                  <button type="submit" form="contactForm" value="Submit" className="submit-button">
                    <div>
                      <FontAwesomeIcon icon={faPaperPlane} size="1x" />
                    </div>
                    <div>Wyślij wiadomość</div>
                  </button>
                </div>
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}
export default Contact;