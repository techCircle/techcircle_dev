import styles from '../assets/css/HomePageStyles.module.css'
import techCircleImg from '../images/techCircleImg01.png'
import mern from '../images/mernStack.png'
import python from '../images/pythonStack.png'
import java from '../images/javaStack.png'
import javaMobile from '../images/javaStackMobile.jpg'
import mernMobile from '../images/mernStackMobile.jpg'
import pythonMobile from '../images/pythonStackMobile.jpg'




const HomePage = () => {
  return (
    <div className={`container-fluid  ${styles.homePageContainer}`}>
        <div className={`row  ${styles.mainImg}`}>
            <span>
                <h1>Invest In Your Career Today</h1>
                <h4>TechCircle IT Bootcamp</h4>
            </span>
        </div>
        <div className="container">
            <div className="row">
                <div className={`col-12 ${styles.stackInfoContainer}`} id="carouselExampleDarkDesktop">
                    <h1>Discover Our Full-Stack Classes</h1>
                    
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={mern} className="d-block w-100" alt="MERN Stack"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={python} className="d-block w-100" alt="Python Stack"/>
                            </div>
                            <div className="carousel-item">
                                <img src={java} className="d-block w-100" alt="Java Stack"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                </div>
                

                <div id="carouselExampleAutoplaying" data-bs-ride="carousel" className={`carousel slide col-12 ${styles.stackInfoContainerMobile}`}>
                    <h1>Discover Our Full-Stack Classes</h1>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={mernMobile} className="d-block w-100" alt="MERN Stack"/>
                        </div>
                        <div class="carousel-item">
                            <img src={pythonMobile} className="d-block w-100" alt="Python Stack"/>
                        </div>
                        <div class="carousel-item">
                            <img src={javaMobile} className="d-block w-100" alt="Java Stack"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="row">
                <div className={`${styles.programInfoContainer}`}>
                    <span>
                        <h1>Our Programs</h1>
                        <h3>Monday - Thursday</h3>
                    </span>

                    <div className={`${styles.programContainer}`}>
                        <div className={`col-lg-5 col-10 ${styles.program}`}>
                            <h4>Web Development</h4>
                            <div className={`${styles.programInfo}`}>
                                <i class="fa-regular fa-clock"></i>
                                <span>
                                    <h4>Online</h4>
                                    <p>32 WEEKS</p>
                                    <p>Learn three full stacks with live, immersive instruction.</p>
                                </span>
                            </div>
                        </div>
                        <div className={`col-lg-5 col-10 ${styles.program}`}>
                            <h4>SDET</h4>
                            <div className={`${styles.programInfo}`}>
                                <i class="fa-regular fa-clock"></i>
                                <span>
                                    <h4>Online</h4>
                                    <p>26 WEEKS</p>
                                    <p>Learn three full stacks with live, immersive instruction.</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage