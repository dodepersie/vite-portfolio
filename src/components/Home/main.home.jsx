import { Typewriter } from 'react-simple-typewriter'
import profilePic from './../../assets/1.jpg'

const Home = () => {
  return (
    <section id="header">
        <div className="container-fluid mx-auto" data-theme="synthwave">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
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
                            Here I come again! My name is I Dewa Gede Mahadi Saputra. A information system student at ITB STIKOM Bali & HELP University Malaysia who like to code (≧∀≦)ゞ
                        </p>

                        <a href="#projects" className="btn btn-outline btn-info btn-block rounded-none lg:w-28">See more</a>        
                    </div>     

                    <div className="divider divider-horizontal"></div> 

                    <div className="hidden lg:block" data-aos="fade-left">
                        <img src={profilePic} className="transition duration-300 ease-in-out transform hover:scale-110 rounded-lg min-w-full shadow-2xl shadow-blue-500/50" />
                    </div>   

                </div>
            </div>
        </div>
    </section>
  )
}

export default Home;
