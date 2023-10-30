import React, { useEffect, useState } from 'react'
import './head.css'
import logo from '../../img/logo/logo.svg'

const Head = () => {

    const [isSticky , setisSticky] = useState(false);

    useEffect(() =>{
        const handleScroll = () =>{
            if (window.scrollY > 50){
                setisSticky(true)
            }
            else{
                setisSticky(false)
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () =>{
            window.removeEventListener('scroll',handleScroll);
        }

    },[])

    return (
        <>
            <header className="header">
                <div className={`navbar-area ${isSticky ? 'sticky' : 'header'}`}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12">
                                <nav className="navbar navbar-expand-lg">
                                    <a className="navbar-brand" href="index-2.html">
                                        <img src={logo} alt="Logo" />
                                       
                                    </a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                        <span className="toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                                        <ul id="nav" className="navbar-nav ms-auto">
                                            <li className="nav-item">
                                                <a className="page-scroll active" href="#home">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#services">Services</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#review">Review</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#faq">FAQs</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="page-scroll" href="#contact">Contact us</a>
                                            </li>
                                        </ul>
                                    </div>

                                </nav>

                            </div>
                        </div>

                    </div>

                </div>

            </header>
        </>
    )
}

export default Head
