import { projects } from '../../constants/main.constants'

const Projects = () => {

    return (
    <section id="projects">
        <div className="container-fluid" data-theme="light">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-base tracking-tight my-20 lg:my-auto">
                        <h1 className="mb-5 text-3xl font-bold font-sans" data-aos="fade-up">
                            Projects
                        </h1>

                        <div className="grid grid-rows-1 lg:grid-rows-1 grid-flex-cols lg:grid-cols-3 gap-5">
                            {projects.map(( { title, description, image, tags, visit }, index) => (
                                <div data-aos="fade-up" className="card w-68 lg:w-96 bg-base-100 shadow-xl image-full" key={index}>
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
                                            <div className="badge badge-info badge-lg text-base-100 p-3" key={i}>
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
