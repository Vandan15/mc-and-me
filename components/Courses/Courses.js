import React from 'react'
import styles from './Courses.module.scss';
import Nopath from '../../public/assets/NoPath.png';
import Image from 'next/image';
import Image1 from '../../public/assets/img1.png';
import CourseSlider from '../Slider/CourseSlider';



export default function Courses() {
  return (
    <div className={styles.Courses}>
       <div className={styles.container}>
          <div className={styles.headingnews}>
            <p>COURSES</p>
            <h4>Our All Courses</h4>
          </div>
          <CourseSlider/>
       </div>
    </div>
  )
}
