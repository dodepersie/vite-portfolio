import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import { FaPaperPlane, FaRegMessage } from "react-icons/fa6";
import { ContactAnimate } from "./../../assets/lottie/contactAnimation/contactAnimation";
import { errorSwal, successSwal } from "../Utilities/swal.utilities";

const serviceKey = import.meta.env.VITE_SERVICE_KEY;
const templateKey = import.meta.env.VITE_TEMPLATE_KEY;
const apiKey = import.meta.env.VITE_EMAILJS_API_KEY;
const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

export const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [message, setMessage] = useState("");
  const recaptchaRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const token = recaptchaRef.current.getValue();
    if (!token) {
      errorSwal("Please verify you are not a robot.");
      return;
    }

    // Basic validation
    const nameTrimmed = userName.trim();
    const emailTrimmed = userEmail.trim();
    const messageTrimmed = message.trim();

    if (!nameTrimmed || !emailTrimmed || !messageTrimmed) {
      errorSwal("Please fill the form!");
      return;
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userEmail)) {
      errorSwal("Please enter a valid email address.");
      return;
    }

    setIsSending(true);

    const templateParams = {
      user_name: nameTrimmed,
      user_email: emailTrimmed,
      message: messageTrimmed,
    };

    emailjs
      .send(serviceKey, templateKey, templateParams, apiKey)
      .then(
        (result) => {
          successSwal("Message sent successfully!");
          setUserName("");
          setUserEmail("");
          setMessage("");
          recaptchaRef.current.reset();
        },
        (error) => {
          errorSwal("Error sending message. Try again later!");
          recaptchaRef.current.reset();
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  const isButtonDisabled = isSending || !userName || !userEmail || !message;

  return (
    <section id="contact">
      <div className="hero min-h-screen bg-gradient-to-br from-blue-500 via-blue-400 to-blue-500 dark:from-slate-900 dark:via-slate-700 dark:to-slate-800 dark:text-gray-50 transition-colors duration-50">
        <div className="hero-content flex-col md:flex-row w-full text-gray-50 pt-0 pb-16 px-7">
          <div className="hidden md:block w-2/5" data-aos="zoom-in">
            <ContactAnimate />
          </div>

          <div className="text-base text-left w-full" data-aos="fade-right">
            <div className="flex flex-row items-center gap-3 text-4xl mb-5">
              <FaRegMessage />
              <div className="my-3">
                <p className="font-semibold">Contact me</p>
              </div>
            </div>

            <form onSubmit={sendEmail}>
              <div className="form-control w-full">
                <input
                  type="text"
                  name="user_name"
                  className="input caret-pink-500 bg-gray-100 text-black"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your name.."
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-control w-full">
                <input
                  type="email"
                  name="user_email"
                  className="input caret-pink-500 bg-gray-100 text-black mt-5"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  placeholder="Your email.."
                  autoComplete="off"
                  required
                />
              </div>

              <div className="form-control w-full">
                <textarea
                  className="textarea caret-pink-500 bg-gray-100 resize-none text-black mt-5"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message.."
                  required
                ></textarea>
              </div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                className="mt-5"
              />

              <button
                className="btn btn-block border-0 mt-5 bg-blue-500 hover:bg-blue-600 active:bg-blue-900 dark:bg-slate-800 dark:hover:bg-slate-800/50 text-gray-50 disabled:text-white disabled:cursor-not-allowed disabled:opacity-50"
                type="submit"
                disabled={isButtonDisabled}
              >
                <FaPaperPlane className="mr-2" />
                {isSending ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
