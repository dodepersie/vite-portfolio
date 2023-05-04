import { faTerminal } from '@fortawesome/free-solid-svg-icons'
import { projects } from '../../constants/main.constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Projects = () => {

    return (
    <section id="projects">
        <div className="container-fluid" data-theme="light">
            <div className="hero min-h-screen bg-base-200 dark:bg-slate-800">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-base tracking-tight my-20 lg:my-auto dark:text-white">

                        <div className="flex items-center text-3xl" data-aos="fade-up">
                            <FontAwesomeIcon icon={faTerminal} className="inline-block mr-2.5 mt-1 text-2xl dark:text-white" />
                            <h2 className="text-gray-700 font-bold my-2 dark:text-white">Projects</h2>
                        </div>

                        <p className="mb-5 font-semibold text-md lg:text-lg leading-loose" data-aos="fade-up">
                            I&apos;ve done some projects by myself & I'm a Front-End addict and currently learning about Back-End (≧∇≦)ﾉ
                        </p>  

                        <div className="grid grid-rows-1 lg:grid-rows-1 grid-flex-cols lg:grid-cols-3 gap-5">
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
                                        <p className="text-white">{description}</p>

                                        <div className="card-actions justify-end">
                                        {tags.map(( tag, i ) => (
                                            <div className="badge badge-info badge-lg text-base-100 p-3 dark:badge-primary" key={i}>
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

export default Projects;
