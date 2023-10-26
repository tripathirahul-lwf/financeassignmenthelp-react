import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './review.css'

const Review = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <section id="testimonials" class="testimonial-section">
                <div class="container">
                    <div class="section-title text-center">
                        <h2 class="mb-70">What our customers says</h2>
                    </div>
                    <div class="testimonial-active">
                        <Slider {...settings}>
                            <div class="single-testimonial">
                                    <div class="quote">
                                        <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <div class="content-wrapper">
                                    <div class="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                        </p>
                                    </div>
                                    <div class="info">
                                        <h4>Jonathon Smith</h4>
                                        <p>Developer and Youtuber</p>
                                    </div>
                                </div>
                            </div>                          
                            <div class="single-testimonial">
                                    <div class="quote">
                                        <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <div class="content-wrapper">
                                    <div class="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                        </p>
                                    </div>
                                    <div class="info">
                                        <h4>Jonathon Smith</h4>
                                        <p>Developer and Youtuber</p>
                                    </div>
                                </div>
                            </div>                          
                            <div class="single-testimonial">
                                    <div class="quote">
                                        <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <div class="content-wrapper">
                                    <div class="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                        </p>
                                    </div>
                                    <div class="info">
                                        <h4>Jonathon Smith</h4>
                                        <p>Developer and Youtuber</p>
                                    </div>
                                </div>
                            </div>                          
                            <div class="single-testimonial">
                                    <div class="quote">
                                        <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <div class="content-wrapper">
                                    <div class="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                        </p>
                                    </div>
                                    <div class="info">
                                        <h4>Jonathon Smith</h4>
                                        <p>Developer and Youtuber</p>
                                    </div>
                                </div>
                            </div>                          
                            <div class="single-testimonial">
                                    <div class="quote">
                                        <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <div class="content-wrapper">
                                    <div class="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                        </p>
                                    </div>
                                    <div class="info">
                                        <h4>Jonathon Smith</h4>
                                        <p>Developer and Youtuber</p>
                                    </div>
                                </div>
                            </div>                          
                            <div class="single-testimonial">
                                    <div class="quote">
                                        <i class="fa-solid fa-quote-left"></i>
                                </div>
                                <div class="content-wrapper">
                                    <div class="content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                            sed dinonumy eirmod tempor invidunt ut labore et dolore
                                            magna aliquyam erat, sed diam voluptua. At vero eos et
                                            accusam et justo duo dolores et ea rebum. Stet clita
                                            kasd gubergren, no sea takimata sanctus est Lorem.
                                        </p>
                                    </div>
                                    <div class="info">
                                        <h4>Jonathon Smith</h4>
                                        <p>Developer and Youtuber</p>
                                    </div>
                                </div>
                            </div>                          
                        </Slider>
                    </div>
                </div>
            </section >

        </>
    )
}

export default Review
