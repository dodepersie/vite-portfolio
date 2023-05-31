import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faContactCard } from "@fortawesome/free-solid-svg-icons";
import { ContactAnimate } from "./../../assets/lottie/contactAnimation/contactAnimation";

const serviceKey = import.meta.env.VITE_SERVICE_KEY;
const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
const apiKey = import.meta.env.VITE_EMAILJS_API_KEY;

function AlertMessage(props) {
  const { message, isSuccess } = props;
  const alertClass = isSuccess
    ? "bg-blue-500 text-gray-50 dark:bg-slate-700 rounded-lg"
    : "bg-red-500 text-gray-50";

  return (
    <div className={`alert ${alertClass} mb-5`}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
}

export const Contact = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceKey, templateKey, form.current, apiKey).then(
      (result) => {
        setShowAlert(true);
        e.target.reset();
        setAlertMessage("Message sent successfully!");
        setIsSuccess(true);
      },
      (error) => {
        setShowAlert(true);
        setAlertMessage("Error sending message. Try again later!");
        setIsSuccess(false);
      }
    );
  };

  return (
    <section id="contact">
      <div className="container-fluid mx-auto">
        <div className="hero min-h-screen bg-gray-50 dark:bg-slate-800 transition-colors duration-50">
          <div className="hero-content flex-col md:flex-row w-full text-black dark:text-gray-50">
            <div className="hidden md:block w-2/5" data-aos="zoom-in">
              <ContactAnimate />
            </div>

            <div
              className="text-base text-left w-full"
              data-aos="fade-right"
            >
              <div className="flex flex-row justify-center md:justify-start items-center text-4xl">
                <div className="block md:hidden w-6/12">
                  <ContactAnimate />
                </div>
                <div>
                  <p className="font-semibold">Contact me</p>
                  <p className="text-sm md:text-lg my-3">
                    Don&apos;t be shy, friends! (o゜▽゜)o☆
                  </p>
                </div>
              </div>

              {showAlert && (
                <AlertMessage message={alertMessage} isSuccess={isSuccess} />
              )}

              <form ref={form} onSubmit={sendEmail} action="/">
                <div className="form-control w-full">
                  <input
                    type="text"
                    name="user_name"
                    className="input border caret-pink-500 bg-gray-100"
                    placeholder="Your name.."
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <input
                    type="email"
                    name="user_email"
                    className="input border caret-pink-500 bg-gray-100 mt-5"
                    placeholder="Your email.."
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <textarea
                    className="textarea caret-pink-500 bg-gray-100 resize-none mt-5"
                    name="message"
                    placeholder="Your message.."
                    required
                  ></textarea>
                </div>

                <button
                  className="btn btn-block border-0 mt-5 bg-blue-500 hover:bg-blue-600 active:bg-blue-900 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50"
                  type="submit"
                >
                  Send
                </button>
              </form>

              <p className="text-xs text-left mb-5 mt-5 leading-loose">
                *If you want to contact me on my social media, please see the
                footer!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
