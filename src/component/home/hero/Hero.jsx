import React from 'react'
import './hero.css'
import Embedform from '../../embedForm/Embedform'

const Hero = () => {
    return (
        <>
            <section id="home" className="hero-section">
                <div className="container">
                    <div className="row align-items-center position-relative">
                        <div className="col-lg-6">
                            <div className="hero-content">
                                <h1 className="wow fadeInUp" data-wow-delay=".4s">
                                    Launch Your SaaS Website in Minutes!
                                </h1>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                    aliquyam erat, sed diam voluptua.
                                </p>
                                <a href="/" className="main-btn border-btn btn-hover wow fadeInUp" data-wow-delay=".6s">Get
                                    Started</a>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-5">
                            <div className="banner_form">                              
                                {/* <div formsappId="65117e3a5e2b7cb187f19c02"></div> */}
                                <Embedform />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
