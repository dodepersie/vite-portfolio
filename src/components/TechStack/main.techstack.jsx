import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { techStack } from '../../constants/main.constants';
import { TechStackAnimated } from '../../assets/lottie/techStackAnimation/techStackAnimation';

export const TechStack = () => {
    return (
        <section id="tech-stack">
            <div className="container-fluid font-mono">
                <div className="hero min-h-screen bg-gray-50 dark:bg-slate-800 dark:text-gray-50">
                    <div className="hero-content flex-row gap-14 w-full">
                        <div className="text-base w-full md:w-3/5 p-auto md:p-4 lg:p-auto">
                            <h1 className="mb-5 text-3xl font-semibold" data-aos="fade-up">
                                <FontAwesomeIcon icon={faDollarSign} /> tech_stack
                            </h1>

                            <p className="mb-5 font-normal text-md lg:text-lg leading-loose" data-aos="fade-up">
                                Here you can see what I&apos;ve learning. I am learning day by day φ(゜▽゜*)♪
                            </p>    
                            
                            <div className="flex flex-col justify-start items-start">
                                {techStack.map(( item, index ) => (
                                    <div data-aos="fade-up" className="py-4" key={index}>
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={item.logo} className="inline-block mr-2 -my-1" />
                                            <h2 className="font-semibold text-xl my-2">{item.name}</h2>
                                        </div>
                                
                                        <p className="my-1 leading-loose">
                                            {item.dec}
                                        </p>
                                    </div>
                                ))}
                            </div>  
                        </div> 
                        <div className="hidden md:block md:w-2/5" data-aos="zoom-in">
                            <TechStackAnimated />
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    )
}