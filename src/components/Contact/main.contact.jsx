import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";

const serviceKey = import.meta.env.VITE_SERVICE_KEY;
const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
const apiKey = import.meta.env.VITE_EMAILJS_API_KEY;

function AlertMessage(props) {
    const { message } = props;
    return (
        <div className="alert alert-success shadow-lg mt-5">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{message}</span>
            </div>
        </div>
    );
  }

export const Contact = () => {

    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            serviceKey,
            templateKey,
            form.current,
            apiKey
          )
          .then(
            (result) => {
                setShowAlert(true);
                e.target.reset();
                setAlertMessage("Message sent successfully!");
            },
            (error) => {
                setShowAlert(true);
                setAlertMessage("Error sending message. Try again later!");
            }
        );
    };

    return (
        <section id="contact">
            <div className="container-fluid mx-auto">
                <div className="hero min-h-screen bg-gray-50 dark:bg-slate-800 p-auto md:p-4">
                    <div className="text-left flex-col lg:flex-row w-full max-w-2xl p-3">
                        <div data-aos="fade-right">
                            <div className="text-center dark:text-gray-50">
                                <h1 className="mb-5 text-4xl font-bold">
                                    <FontAwesomeIcon icon={faContactCard} className="mr-4" />
                                    Contact me
                                </h1>

                                <p className="text-lg mb-5 leading-loose">
                                    Don&apos;t be shy, friends! (o゜▽゜)o☆
                                </p>
                            </div>

                            <form ref={form} onSubmit={sendEmail} action="/" className="grid grid-rows-1 ">
                                <div className="form-control w-full">
                                    <input type="text" name="user_name" className="input border border-black focus:input-secondary w-full" placeholder="Your name.." required />
                                </div>

                                <div className="form-control w-full">
                                    <input type="email" name="user_email" className="input border border-black focus:input-secondary w-full mt-5"  placeholder="Your email.." required />
                                </div>

                                <div className="form-control w-full">
                                    <textarea className="textarea border border-black focus:textarea-secondary resize-none mt-5" name="message" placeholder="Your message.." required></textarea>
                                </div>

                                <button className="btn border-none mt-5 bg-blue-500 hover:bg-blue-600 active:bg-blue-900 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50" type="submit">Send</button>

                            </form>

                            {showAlert && <AlertMessage message={alertMessage} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}