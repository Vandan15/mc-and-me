import React from 'react'
import styles from './BrowseCourses.module.scss';
import Nopath from '../../public/assets/NoPath.png';
import Image from 'next/image';
import Image1 from '../../public/assets/imgbox2.jpg';



export default function BrowseCourses() {
  return (
    <div className={styles.BrowseCourses}>
       <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.subgrid} > 
            <div className={styles.Browsetext}>
              <div className={styles.textline}>
                <h5>Browse Our Best Courses</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
              </div>
            </div>
          </div>
          <div className={styles.subgrid} > 
            <div className={styles.imgGrid} > 
              <div className={styles.imgsubgrid}>
                <div className={styles.imgbox}>
                  <Image src={Image1}  />
                  <div className={styles.themebackround}>
                    <p>Lear Cyber Security</p>
                    <p>8h 30min - 15 Lesson</p>
                  </div>
                </div>
              </div>  
              <div className={styles.imgsubgrid}>
                <div className={styles.imgbox}>
                  <Image src={Image1}  />
                  <div className={styles.themebackround}>
                    <p>Learn Block Chain Technology</p>
                    <p>8h 30min - 15 Lesson</p>
                  </div>
                </div>
              </div>  
            </div>
          </div>
          </div>   
       </div>
    </div>
  )
}
