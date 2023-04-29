import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { techStack } from '../../constants/main.constants';

const TechStack = () => {
    return (
        <section id="tech-stack">
            <div className="container-fluid" data-theme="cyberpunk">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col-reverse lg:flex-row">
                        <div className="text-base">
                            <h1 className="mb-5 text-3xl font-bold" data-aos="fade-up">
                                $tech_stack
                            </h1>

                            <p className="mb-5 font-semibold text-md lg:text-lg leading-loose" data-aos="fade-up">
                                I've done some projects by myself & I'm a Front-End addict and currently learning about Back-End (‾◡◝)
                            </p>    

                            <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                                {techStack.map(( item, index ) => (
                                    <div data-aos="fade-up" className="py-4" key={index}>
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={item.logo} className="inline-block mr-2 -my-1" />
                                            <h2 className="text-gray-700 font-bold text-xl my-2">{item.name}</h2>
                                        </div>
                                
                                        <p className="my-1">
                                            {item.dec}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>  

                        <div className="hidden lg:block" data-aos="fade-left">
                            <div className="mockup-code shadow-2xl rounded-xl">
                                <pre data-prefix="$" className='text-white'><code>yarn create vite myPortfolio</code></pre> 
                                <pre data-prefix="$" className='text-white'><code>yarn</code></pre> 
                                <pre data-prefix="$" className='text-white'><code>yarn dev</code></pre>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechStack;
