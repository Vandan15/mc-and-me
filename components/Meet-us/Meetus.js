import React from 'react'
import styles from './Meetus.module.scss';
import RepeatGrid from '../../public/assets/RepeatGrid.png'
import Image from 'next/image';


export default function Meetus() {
  return (
    <div className={styles.Meetusmain}>
      <div className={styles.container}>
        <div className={styles.Meetus}>
          <div className={styles.innerbox}>
            <h3>Meet Us At</h3>
            <p>international ICT Exhibition & Conference - INDIASOFT'22 Organizes to Promote Works & exports of Indian Software Development Companies</p>
            <p>Date: 23rd - 25th March'22</p>
            <p>Location: Pragati Maidan, New Delhi, INDIA</p>
            <div className={styles.buttongrop}>
              <button>
                <span>Contact Us</span>
                <i className='fa fa-angle-right'></i>
              </button>
            </div>
          </div>
          <div className={styles.imgpostion} > 
            <Image src={RepeatGrid}  />
            <div className={styles.imgtow}>
            <Image src={RepeatGrid}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
