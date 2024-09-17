import styles from '../assets/css/ClassStyles.module.css'
import img1 from '../images/codingClasses.png'
import courses from '../images/courses.png'
import { Link } from 'react-router-dom'


const Classes = () => {
  return (
    <>
        <div className={`container-fluid  ${styles.classesContainer}`}>
            <div className={`row  ${styles.infoContainer}`}>
                <div className={`col-lg-6 col-sm-12 col-md-6 ${styles.info}`}>
                    <h1 className='col-lg-5 col-sm-12'>Full Stack<br/>Web Development</h1>
                    <ul className='col-lg-5 col-sm-12'>
                        <li><i className="fa-regular fa-clock"></i>32 Weeks</li>
                        <li><i className="fa-regular fa-calendar"></i>Monday - Thursday Lecture days</li>
                        <li><i className="fa-solid fa-globe"></i>Online Attendance</li>
                        <li><i className="fa-regular fa-star"></i>Beginner Friendly!</li>
                    </ul>
                </div>
                <div className="col-lg-6 col-6">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
        <section id="curriculum_overview" className={`container-fluid ${styles.curriculumContainer}`}>
                
            <h1>Curriculum Overview</h1>
            <div id="section_block" className={`row ${styles.curriculum}`}>
                <div id="overview_list" className={`col-lg-2 col-sm-6 nav flex-column nav-pills ${styles.durationContainer}`} role="tablist" aria-orientation="vertical">
                                <button className={`nav-link lazy-background visible active ${styles.btn}`} data-bs-toggle="pill" data-bs-target="#data_science" type="button" role="tab" aria-selected="true" >Week One to Two</button>
                                <button className="nav-link lazy-background visible" data-bs-toggle="pill" data-bs-target="#intro_machine_learning" type="button" role="tab" aria-selected="false" tabindex="-1">Weeks Three to Six</button>
                                <button className="nav-link lazy-background visible" data-bs-toggle="pill" data-bs-target="#data_enrichment" type="button" role="tab" aria-selected="false" tabindex="-1">Weeks Seven to Fourteen</button>
                                <button className="nav-link lazy-background visible" data-bs-toggle="pill" data-bs-target="#data_visualization" type="button" role="tab" aria-selected="false" tabindex="-1">Weeks Fifteen to Twenty-Two</button>
                                <button className="nav-link lazy-background visible" data-bs-toggle="pill" data-bs-target="#intermediate_machine_learning" type="button" role="tab" aria-selected="false" tabindex="-1">Weeks Twenty-Three to Thirty</button>
                </div>
                {/* Desktop */}
                <div className={`col-lg-4 col-sm-6 tab-content overview_list_contents desktop ${styles.programInfoContainer}`}>
                                <div id="data_science" className="tab-pane fade active show" role="tabpanel">
                                    <h3>Week One to Two</h3>
                                    <h4>Programming Basics</h4>
                                    <p>To kick off the program, you’ll explore habits, computer basics, and fundamental programming concepts and skills necessary to be successful in your bootcamp!</p>
                                    <h5>What you'll focus on</h5>
                                    <ul className="focus_list">
                                        <li className="lazy-background visible">Basic computer literacy</li>
                                        <li className="lazy-background visible">Algorithmic foundations</li>
                                        <li className="lazy-background visible">Learning stamina</li>
                                    </ul>
                                </div>
                                <div id="intro_machine_learning" className="tab-pane fade" role="tabpanel">
                                    <h3>Weeks Three to Six</h3>
                                    <h4>Web Fundamentals</h4>
                                    <p>During Web Fundamentals, you’ll be introduced to HTML, CSS, and JavaScript along with other common tools in the industry. At the end of this three week course, students should be able to build out static web pages with JavaScript interactivity.</p>
                                    <h5>What you'll focus on</h5>
                                    <ul className="focus_list">
                                        <li className="lazy-background visible">HTML, CSS, &amp; JavaScript</li>
                                        <li className="lazy-background visible">Git/Github</li>
                                        <li className="lazy-background visible">HTTP Request Response</li>
                                        <li className="lazy-background visible">Optional: jQuery &amp; Wireframing</li>
                                    </ul>
                                </div>
                                <div id="data_enrichment" className="tab-pane fade" role="tabpanel">
                                    <h3>Weeks Seven to Fourteen</h3>
                                    <h4>Full-Stack Python</h4>
                                    <p>Dive into the first full-stack language: Python. Beginning with small projects, you’ll work your way up to designing a full framework project alongside your classNamemates and instructor.</p>
                                    <h5>What you'll focus on</h5>
                                    <ul className="focus_list">
                                        <li className="lazy-background">Python Fundamentals &amp; OOP</li>
                                        <li className="lazy-background">MySQL</li>
                                        <li className="lazy-background">Flask</li>
                                        <li className="lazy-background">MVC Framework&nbsp;</li>
                                        <li className="lazy-background">ERD / Database Design</li>
                                        <li className="lazy-background">Web Security Basics</li>
                                        <li className="lazy-background">Object Relational Mapper</li>
                                    </ul>
                                </div>
                                <div id="data_visualization" className="tab-pane fade" role="tabpanel">
                                    <h3>Weeks Fifteen to Twenty-Two</h3>
                                    <h4>Full-Stack Javascript</h4>
                                    <p>Mid-program, explore your second full-stack language: JavaScript. Studying a wide-range of applicable formats, students can obtain familiarity with building web applications using common industry technologies like MongoDB, Express, React, and NodeJS.</p>
                                    <h5>What you'll focus on</h5>
                                    <ul className="focus_list">
                                        <li className="lazy-background visible">JavaScript Fundamentals &amp; OOP</li>
                                        <li className="lazy-background visible">Node.JS</li>
                                        <li className="lazy-background visible">Express.JS</li>
                                        <li className="lazy-background visible">Socket.io</li>
                                        <li className="lazy-background visible">MongoDB</li>
                                        <li className="lazy-background visible">React</li>
                                    </ul>
                                </div>
                                <div id="intermediate_machine_learning" className="tab-pane fade" role="tabpanel">
                                    <h3>Weeks Twenty-Three to Thirty</h3>
                                    <h4>Full-Stack Java</h4>
                                    <p>For your last full-stack language, students will select Java in the last 4 weeks of their course.</p>
                                    <div className="java_block">
                                        <h5>Java</h5>
                                        <p>Study procedural programming in Java using popular frameworks and build and manipulate databases in programs like MySQL.</p>
                                        <h5>What You’ll Focus On:</h5>
                                        <ul className="focus_list">
                                            <li className="lazy-background visible">Java Fundamentals &amp; OOP</li>
                                            <li className="lazy-background visible">Java Web Development</li>
                                            <li className="lazy-background visible">Java Spring MVC, Boot, Security</li>
                                            <li className="lazy-background visible">(JPA Hibernate)</li>
                                            <li className="lazy-background visible">ThymeLeaf</li>
                                            <li className="lazy-background visible">Tomcat</li>
                                            <li className="lazy-background">Deployment</li>
                                        </ul>
                                    </div>
                                </div>
                </div>

                {/* Mobile */}
                <div id="overview_carousel" className={`carousel slide overview_list_contents ${styles.mobileCurriculumContainer}`}>
                    <div className={`carousel-indicators bottom_indicators ${styles.carouselIndicators}`}>
                                    <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="0" className="active">
                                    </button>
                                    <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="1">
                                    </button>
                                    <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="2">
                                    </button>
                                    <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="3">
                                    </button>
                                    <button type="button" data-bs-target="#overview_carousel" data-bs-slide-to="4">
                                    </button>
                    </div>
                    <div className={`carousel-inner ${styles.programInfoMobileContainer}`}>
                                    <div className="carousel-item active">
                                        <h3>Week One to Two</h3>
                                        <h4>Programming Basics</h4>
                                        <p>To kick off the program, you’ll explore habits, computer basics, and fundamental programming concepts and skills necessary to be successful in your bootcamp!</p>
                                        <h5>What you'll focus on</h5>
                                        <ul className="focus_list">
                                            <li className="lazy-background">Basic computer literacy</li>
                                            <li className="lazy-background">Algorithmic foundations</li>
                                            <li className="lazy-background">Learning stamina</li>
                                        </ul>
                                    </div>
                                    <div className="carousel-item">
                                        <h3>Weeks Three to Six</h3>
                                        <h4>Web Fundamentals</h4>
                                        <p>During Web Fundamentals, you’ll be introduced to HTML, CSS, and JavaScript along with other common tools in the industry. At the end of this three week course, students should be able to build out static web pages with JavaScript interactivity.</p>
                                        <h5>What you'll focus on</h5>
                                        <ul className="focus_list">
                                            <li className="lazy-background">HTML, CSS, &amp; JavaScript</li>
                                            <li className="lazy-background">Git/Github</li>
                                            <li className="lazy-background">HTTP Request Response</li>
                                            <li className="lazy-background">Optional: jQuery &amp; Wireframing</li>
                                        </ul>
                                    </div>
                                    <div className="carousel-item">
                                        <h3>Weeks Seven to Fourteen</h3>
                                        <h4>Full-Stack Python</h4>
                                        <p>Dive into the first full-stack language: Python. Beginning with small projects, you’ll work your way up to designing a full framework project alongside your classmates and instructor.</p>
                                        <h5>What you'll focus on</h5>
                                        <ul className="focus_list">
                                            <li className="lazy-background">Python Fundamentals &amp; OOP</li>
                                            <li className="lazy-background">MySQL</li>
                                            <li className="lazy-background">Flask</li>
                                            <li className="lazy-background">MVC Framework&nbsp;</li>
                                            <li className="lazy-background">ERD / Database Design</li>
                                            <li className="lazy-background">Web Security Basics</li>
                                            <li className="lazy-background">Object Relational Mapper</li>
                                        </ul>
                                    </div>
                                    <div className="carousel-item">
                                        <h3>Weeks Fifteen to Twenty-Two</h3>
                                        <h4>Full-Stack Javascript</h4>
                                        <p>Mid-program, explore your second full-stack language: JavaScript. Studying a wide-range of applicable formats, students can obtain familiarity with building web applications using common industry technologies like MongoDB, Express, React, and NodeJS.</p>
                                        <h5>What you'll focus on</h5>
                                        <ul className="focus_list">
                                            <li className="lazy-background">JavaScript Fundamentals &amp; OOP</li>
                                            <li className="lazy-background">Node.JS</li>
                                            <li className="lazy-background">Express.JS</li>
                                            <li className="lazy-background">Socket.io</li>
                                            <li className="lazy-background">MongoDB</li>
                                            <li className="lazy-background">React</li>
                                        </ul>
                                    </div>
                                    <div className="carousel-item">
                                        <h3>Weeks Twenty-Three to Thirty</h3>
                                        <h4>Full-Stack Java</h4>
                                        <p>For your last full-stack language, students will select Java in the last 4 weeks of their course.</p>
                                        <div className="java_block">
                                            <h5>Java</h5>
                                            <p>Study procedural programming in Java using popular frameworks and build and manipulate databases in programs like MySQL.</p>
                                            <h5>What You’ll Focus On:</h5>
                                            <ul className="focus_list">
                                                <li className="lazy-background">Java Fundamentals &amp; OOP</li>
                                                <li className="lazy-background">Java Web Development</li>
                                                <li className="lazy-background">Java Spring MVC, Boot, Security</li>
                                                <li className="lazy-background">(JPA Hibernate)</li>
                                                <li className="lazy-background">ThymeLeaf</li>
                                                <li className="lazy-background">Tomcat</li>
                                                <li className="lazy-background">Deployment</li>
                                            </ul>
                                        </div>
                                    </div>
                    </div>
                </div>
            </div>
        </section>
        <section id='courses' className={`container ${styles.unitsContainer}`}>
            <h1>Courses</h1>
            {/* Desktop */}
            <div className={`row ${styles.courseContainer}`}>
                <div className={`col-2 card ${styles.course}`}>
                    <img src={courses} className="card-img-top" alt="Course logo"/>
                    <div className="card-body" >
                        <h5 className="card-title">Programming Basics</h5>
                        <Link to='https://github.com/techCircle/programming_basic.git' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                    </div>
                </div>
                <div className={`col-2 card ${styles.course}`}>
                    <img src={courses} className="card-img-top" alt="Course logo"/>
                    <div className="card-body">
                        <h5 className="card-title">Web Fundamentals</h5>
                        <Link to='/techcircle_dev/classes/web_funds' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}}>Learn</Link>
                    </div>
                </div>
                <div className={`col-2 card ${styles.course}`}>
                    <img src={courses} className="card-img-top" alt="Course logo"/>
                    <div className="card-body">
                        <h5 className="card-title">Java Stack</h5>
                        <Link to='/techcircle_dev/classes/java_stack' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}}>Learn</Link>
                    </div>
                </div>
                <div className={`col-2 card ${styles.course}`}>
                    <img src={courses} className="card-img-top" alt="Course logo"/>
                    <div className="card-body">
                        <h5 className="card-title">MERN Stack</h5>
                        <Link to='/techcircle_dev/classes/mern_stack' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}}>Learn</Link>
                    </div>
                </div>
                <div className={`col-2 card ${styles.course}`}>
                    <img src={courses} className="card-img-top" alt="Course logo"/>
                    <div className="card-body">
                        <h5 className="card-title">Python Stack</h5>
                        <Link to='/techcircle_dev/classes/python_stack' className='btn btn-warning' style={{'backgroundColor' : '#fdd05a'}}>Learn</Link>
                    </div>
                </div>

            </div>
            {/* Mobile */}
            <div className={`${styles.courseMobileContainer}`}>
                <div className="row">
                    <div className="col-sm-6 mb-3 mb-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Programming Basics</h5>
                                <Link to='https://github.com/techCircle/programming_basic.git' className='btn' style={{'backgroundColor' : '#fdd05a'}} target='_blank'>Learn</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Web Fundamentals</h5>
                                <Link to='/techcircle_dev/classes/web_funds' className='btn' style={{'backgroundColor' : '#fdd05a'}} >Learn</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Java Stack</h5>
                                <Link to='/techcircle_dev/classes/java_stack' className='btn' style={{'backgroundColor' : '#fdd05a'}}>Learn</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">MERN Stack</h5>
                                <Link to='/techcircle_dev/classes/mern_stack' className='btn' style={{'backgroundColor' : '#fdd05a'}}>Learn</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mb-3 mb-sm-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Python Stack</h5>
                                <Link to='/techcircle_dev/classes/python_stack' className='btn' style={{'backgroundColor' : '#fdd05a'}}>Learn</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Classes