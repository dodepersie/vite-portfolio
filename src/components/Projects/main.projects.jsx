import { projects } from '../../constants/main.constants'

const Projects = () => {
  return (
    <section id="projects">
        <div className="container-fluid" data-theme="cmyk">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-base tracking-tight my-20 lg:my-auto">
                        <h1 className="mb-5 text-3xl font-bold font-sans" data-aos="fade-up">
                            Projects
                        </h1>

                        <div className="grid grid-rows-1 lg:grid-rows-1 grid-flex-cols lg:grid-cols-3 gap-5">
                            {projects.map(( item, index ) => (
                                <div data-aos="fade-up" className="card w-68 lg:w-96 bg-base-100 shadow-xl image-full" key={index}>
                                    <figure>
                                        <img src={item.image} alt={item.title} />
                                    </figure>
                                    
                                    <div className="card-body">
                                        <h2 className="card-title">{item.title}</h2>
                                        <p className="text-white">{item.description}</p>
                                        <div className="card-actions justify-end">
                                            <a href={item.source} target="_blank" rel="noreferrer" className="btn btn-primary text-white">Github</a>
                                            <a href={item.visit} target="_blank" rel="noreferrer" className="btn btn-primary text-white">Visit</a>
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
