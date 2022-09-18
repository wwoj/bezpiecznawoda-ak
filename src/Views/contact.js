import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faPhone,
  faEnvelope,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Components/modal";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_prwpw39",
        "template_1mdz2w7",
        e.target,
        "user_tkAMXhYpiBWbtyiXwqcFB"
      )
      .then(
        (result) => {
          setStatus(true);
          onClose(true);
        },
        (error) => {
          setStatus(false);
          onClose(true);
        }
      );
    e.target.reset();
  };
  const [open, onClose] = useState(false);
  const [status, setStatus] = useState(false);

  return (
    <>
      <div className="page-container">
        <div className="ds-flex-wr-js-sb">
          <div className="form-sides">
            <h2>Informacje</h2>
            <p>
              Skontaktuj się z&nbsp;nami aby uzyskać szczegółowe informacje
              o&nbsp;naszych usługach, którymi jesteś zainteresowany. Nasz
              zespół przekaże Ci wszystkie potrzebne informacje.
            </p>
            {/* <p> <FontAwesomeIcon icon={faPaperPlane} size="1x" /> <span>ul. Testowa 1X,31-30X Kraków</span></p> */}
            <p>
              {" "}
              <FontAwesomeIcon icon={faPhone} size="1x" />
              <span>+48-574-231-257</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} size="1x" />
              <span>biuro@bezpiecznawoda.com</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faIdBadge} size="1x" />
              <span>NIP: </span>
              <span>9452063386</span>
            </p>

            {/* <p> <FontAwesomeIcon icon={faClock} size="1x" /><span>Pon-Pt 8.00 - 18.00</span></p> */}
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
                    // onChange={textUpdating}
                  ></textarea>
                </div>

                <div className="width-100">
                  <button
                    type="submit"
                    form="contactForm"
                    value="Submit"
                    className="submit-button"
                  >
                    <div>
                      <FontAwesomeIcon icon={faPaperPlane} size="1x" />
                    </div>
                    <div>Wyślij wiadomość</div>
                  </button>
                  {/* <button onClick={onClose(true)}>Send mail Test</button> */}
                </div>
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={onClose}
        status={status}
        setStatus={setStatus}
      />
    </>
  );
}
export default Contact;
