export const NotFound = () => {
  return (
    <section id="header">
        <div className="container-fluid mx-auto" data-theme="cyberpunk">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row text-center">
                    <div data-aos="fade-right">
                        <h1 className="mb-5 text-5xl font-bold">
                            404 Not Found
                        </h1>

                        <p className="text-lg mb-5 leading-loose">
                            You are trying to access page that is not exist on this site (￣ ‘i ￣;)
                        </p>

                        <a href="/" className="btn btn-primary btn-block rounded-none lg:w-28">Go to home</a>        
                    </div>     

                </div>
            </div>
        </div>
    </section>
  )
}