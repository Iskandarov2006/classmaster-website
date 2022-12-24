// import './lib/animate/animate.min.css'
import './lib/lightbox/css/lightbox.min.css'
import './lib/owlcarousel/assets/owl.carousel.min.css'
import './css/bootstrap.min.css'
import './css/style.css'






import profile from './img/profile.png'
import about1 from './img/about-1.jpg'
import about2 from './img/about-2.jpg'
import project from './img/project-1.jpg'
import project2 from './img/project-2.jpg'
import project3 from './img/project-3.jpg'
import project4 from './img/project-4.jpg'
import project5 from './img/project-5.jpg'
import project6 from './img/project-6.jpg'
import team1 from './img/team-1.jpg'
import team2 from './img/team-2.jpg'
import team3 from './img/team-3.jpg'
import testimonial1 from './img/testimonial-1.jpg'
import testimonial2 from './img/testimonial-2.jpg'
import testimonial3 from './img/testimonial-3.jpg'
import { useEffect, useState } from 'react'

function Index() {
    const [mentor, setMentor] = useState([]);
    useEffect(() => {
        fetch("https://classmasteradmin.herokuapp.com/api/teachers/")
            .then((res) => res.json())
            .then((data) => setMentor(data.data))
            .catch((error) => console.log(error));
    }, []);
    const [course, setCourse] = useState([]);
    useEffect(() => {
        fetch("https://classmasteradmin.herokuapp.com/api/course/")
            .then((res) => res.json())
            .then((data) => setCourse(data.data))
            .catch((error) => console.log(error));
    }, []);

    console.log(mentor)
    return (
        <div>

            <body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="51">

                
                <div className="container-fluid bg-light my-6 mt-0" id="home">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                                <h3 className="text-primary mb-3">Temur Makhmudov</h3>
                                <h1 className="display-3 mb-3">ClassMaster</h1>
                                <h2 className="typed-text-output d-inline"></h2>
                                {/* <div className="typed-text d-none">Kimyo fani , Matematika fani , Ingiliz tili , Tarix  , Geagrafiya</div> */}
                                <h3 className="text-dark" style={{ margin: '15px 0' }}>o'quv markazining <br /> rasmi  web saytiga xush kelibsiz!</h3>
                                <div className="d-flex align-items-center pt-5">
                                    <a href="tel: +998335325500" className="btn btn-primary py-3 px-4 me-5"><i className="fa fa-phone-alt" style={{ margin: '0 10px' }} aria-hidden="true"></i> Call</a>
                                    <button type="button" className="btn-play" data-bs-toggle="modal"
                                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                        <span></span>
                                    </button>
                                    <h5 className="ms-4 mb-0 d-none d-sm-block">Play Video</h5>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img className="img-fluid" src={profile} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal modal-video fade" id="videoModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h3 className="modal-title" id="exampleModalLabel">Youtube Video</h3>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="ratio ratio-16x9">
                                    {/* <iframe className="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                            allow="autoplay"></iframe> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xxl py-6" id="about">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="d-flex align-items-center mb-5">
                                    <div className="years flex-shrink-0 text-center me-4">
                                        <h1 className="display-1 mb-0">CM</h1>
                                        {/* <h5 className="mb-0">o'quv markazi</h5> */}
                                    </div>
                                    <h3 className="lh-base mb-0">o'quv markazi haqida</h3>
                                </div>
                                <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>Afordable Prices</p>
                                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>High Quality Product</p>
                                <p className="mb-3"><i className="far fa-check-circle text-primary me-3"></i>On Time Project Delivery</p>
                                <a className="btn btn-primary py-3 px-5 mt-3" href="">Read More</a>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="row g-3 mb-4">
                                    <img className="img-fluid rounded" src={about1} alt="" />
                                    <div className="col-sm-6">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid bg-light my-5 py-6" id="service">
                    <div className="container">
                        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="col-lg-6">
                                <h1 className="display-5 mb-0">My Services</h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <a className="btn btn-primary py-3 px-5" href="tel: +998335325500"> <i class="fa fa-phone-alt" aria-hidden="true"> </i> call</a>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                    <div className="bg-icon flex-shrink-0 mb-3">
                                        <i className="fa fa-crop-alt fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-sm-4">
                                        <h4 className="mb-3">Creative Design</h4>
                                        <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                        <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                    <div className="bg-icon flex-shrink-0 mb-3">
                                        <i className="fa fa-code-branch fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-sm-4">
                                        <h4 className="mb-3">Graphic Design</h4>
                                        <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                        <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                    <div className="bg-icon flex-shrink-0 mb-3">
                                        <i className="fa fa-code fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-sm-4">
                                        <h4 className="mb-3">Web Design</h4>
                                        <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                        <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                    <div className="bg-icon flex-shrink-0 mb-3">
                                        <i className="fa fa-laptop-code fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-sm-4">
                                        <h4 className="mb-3">UI/UX Design</h4>
                                        <h6 className="mb-3">Start from <span className="text-primary">$199</span></h6>
                                        <span>Stet lorem dolor diam amet vero eos. No stet est diam amet diam ipsum. Clita dolor duo clita sit sed sit dolor eos.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-xxl py-6 pt-5" id="project">
                    <div className="container">
                        <div className="row g-5 mb-5 align-items-center wow fadeInUp" data-wow-delay="0.1s">
                            <div className="col-lg-6">
                                <h1 className="display-5 mb-0">KURSLAR</h1>
                            </div>
                            {/* <div className="col-lg-6 text-lg-end">
                    <ul className="list-inline mx-n3 mb-0" id="portfolio-flters">
                        <li className="mx-3 active" data-filter="*">All Projects</li>
                        <li className="mx-3" data-filter=".first">UI/UX Design</li>
                        <li className="mx-3" data-filter=".second">Graphic Design</li>
                    </ul>
                </div> */}
                        </div>
                        <div className="row g-4 portfolio-container wow fadeInUp" data-wow-delay="0.1s">
                            {
                                course ? (
                                    course.map(i => (
                                        <div className="col-lg-4 col-md-6 portfolio-item first">
                                            <div className="portfolio-img rounded overflow-hidden">
                                                <img className="img-fluid" src={i.img} alt="" />
                                                <div className="portfolio-btn">
                                                    <div style={{ color: 'white !important' }}>
                                                        <h4 style={{ color: 'white', textTransform: 'lowercase' }}>{i.name} kursi</h4>
                                                        <h4 style={{ color: 'white', textTransform: 'lowercase' }}>narxi: {i.price} so'm</h4>
                                                        <a href="tel: +998335325500" className='btn btn-lg-square btn-outline-secondary border-2 w-100'>Qo'shilish</a>
                                                    </div>
                                                    {/* <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href={project} data-lightbox="portfolio"><i className="fa fa-eye"></i></a> */}
                                                    {/* <a className="btn btn-lg-square btn-outline-secondary border-2 mx-1" href=""><i className="fa fa-link"></i></a> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div id="app">
                                    <svg class="loading-svg">
                                      <circle cx="50%" cy="50%" r="25" class="loading-circle"></circle>
                                    </svg>
                                    <p class="circle-total-length"></p>
                                  </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="container-xxl py-6 pb-5" id="team">
                    <div className="container">
                        <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="col-lg-6">
                                <h1 className="display-5 mb-0">Team Members</h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <a className="btn btn-primary py-3 px-5" href="tel: +998335325500">Contact Us</a>
                            </div>
                        </div>
                        <div className="row g-4">
                            {
                                mentor.map(i => (
                                    <div key={i.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="team-item position-relative">
                                            <img className="img-fluid rounded" src={i.img} alt="" />
                                            <div className="team-text bg-white rounded-end p-4">
                                                <div>
                                                    <h5>{i.name}</h5>
                                                    <span>{i.science}</span>
                                                </div>
                                                <a href={`tel:${i.phone}`}><i className="fa fa-phone-alt fa-2x text-primary"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>





                <div className="container-xxl pb-5" id="contact">



                    <div className="container-xxl pt-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container-xxl pt-5 px-0">
                            <div className="bg-dark">
                                {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameborder="0" style="width: 100%; height: 450px; border:0;" allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe> */}
                            </div>
                        </div>
                    </div>



                </div>


                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

            </body>

        </div>
    )
}

export default Index