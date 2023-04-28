import { Typewriter } from 'react-simple-typewriter'
import profilePic from './../../assets/2.jpg'

const Home = () => {
  return (
    <section id="header">
        <div className="container-fluid mx-auto" data-theme="synthwave">
            <div className="hero bg-base-200" style={{ minHeight: '100vh' }}>
                <div className="hero-content flex-col lg:flex-row">
                    <div data-aos="fade-right">
                        <h1 className="mb-5 text-3xl font-bold">
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
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h1>

                        <p className="text-lg mb-5 tracking-tight">
                            Here I come again! My name is I Dewa Gede Mahadi Saputra. A information system student at ITB STIKOM Bali & HELP University Malaysia who like to code (≧∀≦)ゞ
                        </p>

                        <a href="#projects" className="btn btn-secondary btn-block lg:w-28">See more</a>        
                    </div>     

                    <div className="divider divider-horizontal"></div> 

                    <div className="hidden lg:block" data-aos="fade-left">
                        <img src={profilePic} className="rounded min-w-full shadow-2xl" />
                    </div>   

                </div>
            </div>
        </div>
    </section>
  )
}

export default Home;
