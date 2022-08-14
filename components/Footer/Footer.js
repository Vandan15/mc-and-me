import React from 'react'
import styles from './Footer.module.scss';
import Image from 'next/image';
import FooterLogo from '../../public/assets/footer-logo.png'

export default function Footer() {
  return (
    <div className={styles.footerbg}>
      <div className={styles.container}>
        <div className={styles.grid} >
          <div className={styles.subgrid}>
            <Image src={FooterLogo} />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <ul className={styles.iconfooter} >
              <li>
                <a><i className='fa fa-facebook' ></i></a>
              </li>
              <li>
                <a><i className='fa fa-twitter' ></i></a>
              </li>
              <li>
                <a><i className='fa fa-instagram' ></i></a>
              </li>
              <li>
                <a><i className='fa fa-linkedin ' ></i></a>
              </li>
            </ul>
          </div>
          <div className={styles.subgrid}>

            <div className={styles.onebox}>
              <div className={styles.innerbox}>
                <h4>Quick Links</h4>
                <ul>
                  <li><a>About Us</a></li>
                  <li><a>FAQ's</a></li>
                  <li><a>Company</a></li>
                  <li><a>Services</a></li>
                  <li><a>Contact Us</a></li>
                </ul>
              </div>
              <div className={styles.innerbox}>
                <h4>Our Courses</h4>
                <ul>
                  <li><a>Cyber Security</a></li>
                  <li><a>Blockchain Technology</a></li>
                  <li><a>Executive</a></li>
                  <li><a>Masterclass</a></li>
         
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.subgrid}>
            <h4>Our Location</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224091.901753478!2d76.80583719517251!3d28.646662180318764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1660485159167!5m2!1sen!2sin" width="320" height="200" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>  
        </div>
      </div>
    </div>
  )
}
