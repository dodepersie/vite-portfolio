import { Typewriter } from 'react-simple-typewriter'
import profilePic from './../../assets/1.jpg'
import heroBg from './../../assets/heroBg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

export const Home = () => {
  return (
    <section id="hero">
        <div className="container-fluid mx-auto text-gray-50">
            <div className="hero p-auto">
                <div className="hero min-h-screen" style={{ backgroundImage: `url("${heroBg}")`, filter: 'grayscale(50%) contrast(150%)' }}></div>
                <div className="hero-content flex-col lg:flex-row p-auto md:p-14 lg:p-auto">
                    <div data-aos="fade-right">
                        <h1 className="mb-5 text-5xl font-bold">
                            <Typewriter
                            words={
                                ['Hai', 
                                'Hello', 
                                '안녕', 
                                'こんにちは', 
                                '你好', 
                                'Bonjour', 
                                'Hallo',
                                '¡Hola', 
                                'Привет', 
                                'Zdravo', 
                                'Kumusta', 
                                'नमस्ते', 
                                'Szia', 
                                'Ciao', 
                                'ជំរាបសួរ', 
                                'ສະບາຍດີ', 
                                'ဟယ်လို', 
                                'สวัสดี', 
                                'Chào', 
                                'سلام']
                                }
                                loop={999}
                                cursor
                                cursorStyle='!'
                                typeSpeed={100}
                                deleteSpeed={100}
                                delaySpeed={1000}
                            />
                        </h1>

                        <p className="text-lg mb-5 leading-loose">
                            I&apos;m I Dewa Gede Mahadi Saputra. A information system student at ITB STIKOM Bali & HELP University Malaysia who like to code (≧∀≦)ゞ
                        </p>

                        <a href="#projects" className="btn bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50 btn-block border-0 lg:w-40"><FontAwesomeIcon icon={faArrowCircleDown} className="mr-4" />My projects</a>        
                    </div>     

                    <div className="hidden lg:block indicator" data-aos="fade-left">
                        <div className="transition-all hover:scale-105">
                            <label htmlFor="aboutModal" className="indicator-item badge border-none bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50 px-4 py-5 cursor-pointer">More...</label>
                            <img src={profilePic} className="rounded-lg min-w-full shadow-2xl shadow-blue-500/50 dark:shadow-slate-500/50" />
                        </div>
                    </div> 
                </div>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="aboutModal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box bg-blue-800 dark:bg-slate-900">
                        <h3 className="font-bold text-lg pb-5">More about me</h3>
                        <p className="leading-loose">
                        My name is <strong>I Dewa Gede Mahadi Saputra</strong> and people usually called me <strong>Dode Mahadi</strong> or <strong>Mahadi Saputra</strong>. I am from <strong>Tabanan, Bali, Indonesia</strong>. I can work together in a team and complete assignments on time. I have a very big passion in Web Developing ...(*￣０￣)ノ
                        </p>
                        <div className="modal-action">
                            <label htmlFor="aboutModal" className="btn border-0 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 dark:bg-slate-500 dark:hover:bg-slate-600 dark:active:bg-slate-700 text-gray-50">Close</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}