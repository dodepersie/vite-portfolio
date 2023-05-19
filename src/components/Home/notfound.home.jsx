import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { NotFoundAnimated } from "../../assets/lottie/notFoundAnimation/notFoundAnimation";

export const NotFound = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <section id="main">
      <div className="container-fluid mx-auto text-gray-50">
        <div className="hero min-h-screen p-auto bg-gray-50 text-black dark:bg-slate-800 dark:text-gray-50">
          <div className="hero-content flex-col-reverse lg:flex-row p-auto md:p-14 lg:p-auto gap-10">
            <div
              className="w-full md:w-1/2 text-center md:text-left"
              data-aos="fade-right"
            >
              <h1 className="mb-5 text-5xl font-bold">404</h1>

              <p className="text-lg mb-5 leading-loose">Oops! Not Found!</p>

              <a
                onClick={handleGoBack}
                className="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50 btn-block border-0 lg:w-40"
              >
                <FontAwesomeIcon icon={faArrowCircleLeft} className="mr-4" />
                Go back
              </a>
            </div>

            <div className="w-2/3 md:w-1/2" data-aos="zoom-in">
              <NotFoundAnimated />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
