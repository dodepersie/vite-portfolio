import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

export const Experience = () => {
  return (
    <section id="experience">
        <div className="container-fluid">
            <div className="hero min-h-screen bg-gray-50 dark:bg-slate-800 dark:text-gray-50 p-auto md:p-4">
                <div className="hero-content flex-row">
                    <div className="text-base">
                        <h1 className="pt-5 pb-5 text-3xl font-bold" data-aos="fade-up">
                            <FontAwesomeIcon icon={faCheck} /> Experience
                        </h1>
                        
                        <div className="flex flex-col lg:flex-row justify-start items-start py-4 gap-5">
                            <div data-aos="fade-right">
                                <p className="leading-loose pb-5">I started to create my first blog using <strong>Blogspot</strong> in 2011, then I started learning <strong>Wordpress</strong> in 2012 and also learning <strong>cPanel</strong> and <strong>mySQL</strong>. In 2013 I learned <strong>PHP</strong> and also the <strong>Twitter API</strong> and I created a website to <strong>exchange Twitter followers</strong> and also provided the Admin Panel. I build the Admin Panel using <strong>Bootstrap</strong> and <strong>PHP</strong>.</p>

                                <p className="leading-loose">Before that, In 2012 i have won <strong>First place</strong> in a <strong>Primary School Level Computer Competition</strong> at <strong>Kabupaten Tabanan</strong>. And one more in 2015, i have got <strong>Second place</strong> in a <strong>Junior High School Computer Logic-Office (Log-Off) Competition</strong> at <strong>Kabupaten Tabanan</strong> held by <strong>SMA N 1 Tabanan</strong>.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
  )
}