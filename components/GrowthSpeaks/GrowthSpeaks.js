import React from 'react'
import styles from './GrowthSpeaks.module.scss';
import Image from 'next/image';
import Img3 from '../../public/assets/img-3.png'



export default function BanneGrowthSpeaks() {

  return (
    <div className={styles.GrowthSpeaks}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.subgrid}>
            <div className={styles.Iamge}>
              <Image src={Img3} />
            </div>
          </div>
          <div className={styles.subgrid}>
            <div className={styles.textbox} >
                <h3>Growth Speaks...</h3>
                <p>Bright minds are being recognized in the world as the “Youth Power”. Young men and women are floating their Start Up organizations and harnessing the human beings with their latest concepts, systems, innovations and inventions, thus , facilitating the human activity being defined today as the “5th Generation World”. Ms. Pallavi Mehta post graduated from Westminster University, London specializing in International Finance has started the MC&ME Techserve, company registered in India as per the Indian Companies Act.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
