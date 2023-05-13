import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { projects } from '../../constants/main.constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Projects = () => {

    return (
    <section id="projects">
        <div className="container-fluid">
            <div className="hero min-h-screen bg-gray-50 dark:bg-slate-800 dark:text-gray-50 p-auto md:p-4">
                <div className="hero-content flex-col lg:flex-row-reverse" data-aos="fade-up">
                    <div className="text-base tracking-tight my-20 lg:my-auto">

                        <div className="flex items-center text-3xl pb-4">
                            <FontAwesomeIcon icon={faTerminal} className="inline-block mr-2.5 mt-1 text-2xl" />
                            <h2 className="font-bold my-2">Recent Projects</h2>
                        </div>

                        <p className="mb-5 font-semibold text-md lg:text-lg leading-loose">
                            I&apos;ve done some projects by myself & I&apos;m a Front-End addict and currently learning about Back-End (≧∇≦)ﾉ
                        </p>  

                        <div className="grid grid-rows-1 lg:grid-rows-1 grid-flex-cols lg:grid-cols-3 gap-5 md:gap-10 py-3">
                            {projects.sort((a, b) => a.title.localeCompare(b.title)).map(( { title, description, image, tags, visit }, index) => (
                                <div data-aos="fade-up" className="card w-68 lg:w-96 shadow-xl image-full" key={index}>
                                    <figure>
                                        <img src={image} alt={title} />
                                    </figure>
                                    
                                    <div className="card-body">
                                        <h2 className="card-title">
                                            <div className="tooltip tooltip-right tooltip-primary" data-tip="Click to visit">
                                                <a href={visit} target='_blank' rel='noreferrer'>{title}</a>
                                            </div>
                                            
                                        </h2>
                                        <p className="text-gray-50">{description}</p>

                                        <div className="card-actions justify-end">
                                        {tags.map(( tag, i ) => (
                                            <div className="badge badge-primary badge-lg text-base-100 p-3 border-0 dark:bg-slate-900" key={i}>
                                                {tag}
                                            </div>
                                        ))}
                                        </div>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </section>
  )
}