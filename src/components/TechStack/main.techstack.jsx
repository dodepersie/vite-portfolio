import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { techStack } from '../../constants/main.constants';

export const TechStack = () => {
    return (
        <section id="tech-stack">
            <div className="container-fluid" data-theme="cyberpunk">
                <div className="hero min-h-screen bg-white dark:bg-slate-900 dark:text-gray-50 p-auto md:p-4">
                    <div className="hero-content flex-row gap-x-20">
                        <div className="text-base">
                            <h1 className="mb-5 text-3xl font-bold" data-aos="fade-up">
                                <FontAwesomeIcon icon={faDollarSign} /> tech_stack
                            </h1>

                            <p className="mb-5 font-semibold text-md lg:text-lg leading-loose" data-aos="fade-up">
                                Here you can see what I&apos;ve learning. I am learning day by day φ(゜▽゜*)♪
                            </p>    
                            
                            <div className="flex flex-col justify-start items-start">
                                {techStack.map(( item, index ) => (
                                    <div data-aos="fade-up" className="py-4" key={index}>
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={item.logo} className="inline-block mr-2 -my-1" />
                                            <h2 className="font-bold text-xl my-2">{item.name}</h2>
                                        </div>
                                
                                        <p className="my-1">
                                            {item.dec}
                                        </p>
                                    </div>
                                ))}
                            </div>  
                        </div> 
                        <div className="hidden lg:block" data-aos="fade-left">
                            <div className="mockup-code bg-gray-100 dark:bg-slate-700 shadow-2xl dark:shadow-slate-700/50 rounded-xl">
                                <pre data-prefix="$" className='text-black dark:text-gray-50'><code>npm create vite@latest myPortfolio</code></pre> 
                                <pre data-prefix=">" className="text-yellow-600 dark:text-warning"><code>Creating...</code></pre> 
                                <pre data-prefix="$" className='text-black dark:text-gray-50'><code>cd myPortfolio</code></pre> 
                                <pre data-prefix="$" className='text-black dark:text-gray-50'><code>npm run dev</code></pre>
                            </div>
                        </div>   
                    </div>
                </div>
            </div>
        </section>
    )
}