import React from 'react'
import Header from '../components/Header/Header'
import styles from './about-us.module.scss'
import Image from 'next/image';
import about1 from '../public/assets/about-1.png'
import about2 from '../public/assets/about-2.png'


export default function aboutus() {
  return (
    <div className={styles.aboutmain}>
      <Header />
      <div className={styles.titlebg}>
        <h4>ABOUT US</h4>
      </div>
      <div className={styles.bannerbg}>
        <div className={styles.container}>
          <div className={styles.textabout}>
            <h5>Chase Perfection, Achieve Excellence!</h5>
            <h4>Join us for future Skills</h4>
          </div>


        </div>
      </div>
      <div className={styles.aboutboximg}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.subgrid}>
              <div className={styles.Firstimg}> 
                <Image src={about1} />
              </div>
            </div>

            <div className={styles.subgrid}>
              <div className={styles.secoundimg}>
                <Image src={about2} />
               
              </div>
              <div  className={styles.secoundimg}>
              <Image src={about2} />
              </div>
            </div>

            <div className={styles.subgrid}>
              <div className={styles.Firstimg}>
                <Image src={about1} />
              </div>
            </div>

          </div>
        </div>
      </div>

    <div>
      
    </div>

    </div>
  )
}
