import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import '../Courses/Courses.module.scss';
import styles from './Banner.module.scss';
import Header from '../Header/Header'
import Bannerimg from '../../public/assets/bannerimg.png';


function UncontrolledExample() {
    return (
        <>
        <div className='bannermains'>
            <div className={styles.bannerMain}  >
                <div className={styles.bannerbgline} >
                    <Header />
                    <div className={styles.container} >
                        <Carousel>
                            <Carousel.Item>
                                <div className={styles.bannerbox}>
                                    <div className={styles.grid} >
                                        <div className={styles.subgrid} >
                                            <div className={styles.bannerTextbox}>
                                              <h5>Chase Perfection, Achieve Excellence!</h5>
                                              <h4>Join us for future Skills</h4>
                                              <p>95% of cyber security breaches are caused by human error.</p>
                                              <div className={styles.buttongrop}>
                                                <button><span>Apply Now</span></button>
                                                <button><span>Know More</span> <i className='fa fa-angle-right ' ></i> </button>
                                              </div>
                                            </div>  
                                           
                                        </div>
                                        <div className={styles.subgrid} >
                                            <div className={styles.imgboxline} >
                                            <Image src={Bannerimg} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={styles.bannerbox}>
                                    <div className={styles.grid} >
                                        <div className={styles.subgrid} >
                                            <div className={styles.bannerTextbox}>
                                              <h5>Chase Perfection, Achieve Excellence!</h5>
                                              <h4>Join us for future Skills</h4>
                                              <p>95% of cyber security breaches are caused by human error.</p>
                                              <div className={styles.buttongrop}>
                                                <button><span>Apply Now</span></button>
                                                <button><span>Know More</span> <i className='fa fa-angle-right ' ></i> </button>
                                              </div>
                                            </div>  
                                           
                                        </div>
                                        <div className={styles.subgrid} >
                                            <div className={styles.imgboxline} >
                                            <Image src={Bannerimg} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div className={styles.bannerbox}>
                                    <div className={styles.grid} >
                                        <div className={styles.subgrid} >
                                            <div className={styles.bannerTextbox}>
                                              <h5>Chase Perfection, Achieve Excellence!</h5>
                                              <h4>Join us for future Skills</h4>
                                              <p>95% of cyber security breaches are caused by human error.</p>
                                              <div className={styles.buttongrop}>
                                                <button><span>Apply Now</span></button>
                                                <button><span>Know More</span> <i className='fa fa-angle-right ' ></i> </button>
                                              </div>
                                            </div>  
                                           
                                        </div>
                                        <div className={styles.subgrid} >
                                            <div className={styles.imgboxline} >
                                            <Image src={Bannerimg} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>

            </div>
            </div>
        </>

    );
}

export default UncontrolledExample;