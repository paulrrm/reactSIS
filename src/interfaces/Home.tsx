

const Home = () => {
    return (
        <>
            <div id="hero" className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden bg-gradient-to-r from-blue-500 to-green-500 to-yellow-500 rounded-lg p-8">

                <div className="mx-4 md:mx-8 mt-0 md:mt-4 ">
                    <h1 className="text-6xl font-bold text-gray-900 line-height-2">
                        <span className="font-light block">Innovación y excelencia</span>
                        en la educación superior
                    </h1>
                    
                
                </div>
           <div>
           <div className="flex">
                    <p className="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Nuestro compromiso es proporcionar una educación de calidad que prepare a nuestros estudiantes para un futuro brillante.</p>
                    <div className="flex justify-content-center md:justify-content-end">
                    <img src="/img/Instituto1.png" alt="Hero Image" className="w-9 md:w-auto" />
                </div>
                </div>
                
           </div>
            </div>
            <div className="py-4 px-3 mx-0 mt-8 lg:mx-8">
                <div className="grid justify-content-between">
                    <div className="col-12 md:col-2 mt-0">
                        <a className="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">

                            <h4 className="font-medium text-3xl text-900">ISI</h4>
                        </a>
                    </div>

                    <div className="col-12 md:col-10 lg:col-7">
                        <div className="grid text-center md:text-left">
                            <div className="col-12 md:col-3">
                                <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Empresa</h4>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">ISI</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Admisiones</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Bienestar estudiantil</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Ambiente virtual</a>
                                <a className="line-height-3 text-xl block cursor-pointer text-700">Blog</a>
                            </div>

                            <div className="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Enlaces</h4>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Campus Vitual</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Becas</a>
                                <a className="line-height-3 text-xl block cursor-pointer text-700">Prácticas</a>
                                <a className="line-height-3 text-xl block cursor-pointer text-700">Titulación</a>
                                <a className="line-height-3 text-xl block cursor-pointer text-700">Contactos</a>
                            </div>

                            <div className="col-12 md:col-6 mt-4 md:mt-0">
                                <h4 className="font-medium text-2xl line-height-3 mb-3 text-900">Publicaciones</h4>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Investigación e Innovación</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Producción Técnica Docente</a>
                                <a className="line-height-3 text-xl block cursor-pointer mb-2 text-700">Revista Académica Élite</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home