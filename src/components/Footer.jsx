import styles from '../assets/css/FooterStyles.module.css'

const Footer = () => {
  return (
    <section className={`container-fluid  ${styles.footerContainer}`}>

      <footer className="text-dark pt-5 pb-4 mt-5">
        <div className="container text-center text-md-left">
          <div className="row text-center text-md-left">
            <div className="col-md-4 col-lg-5 col-xl-5 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">TechCircle</h5>
              <p>TechCircle wants to be the source of others success. We are opening doors to people from all walks of life, who are seeking their second chance. Yes, we are the HOPE for those who have no IT background.</p>
            </div>
            <div className="col-md-8 col-lg-5 col-xl-5 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
              <p className='text-start'>
                <i className="fas fa-envelope mr-3"></i> Email: techcircle@techcirclesolutions.org
              </p>
              <p className='text-start'>
                <i className="fas fa-phone mr-3"></i> Phone: 703.852.0800
              </p>
            </div>
          </div>
          <hr className="mb-4" />
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-6">
              <p>&copy;2024 TechCircle, LLC
              </p>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline" style={{ marginBottom: '0px' }}>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/techcircle.o/" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}><i className="fab fa-instagram"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/techcircleschool" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}><i className="fab fa-facebook"></i></a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.linkedin.com/company/techcircle-solutions/" className="btn-floating btn-sm text-dark" style={{ fontSize: '23px' }}><i className="fab fa-linkedin-in"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
