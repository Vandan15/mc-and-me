import React from 'react'
import styles from './News.module.scss';
import Nopath from '../../public/assets/news.jpg';
import Image from 'next/image';



export default function News() {
  return (
    <div className={styles.News}>
       <div className={styles.container}>
          <div className={styles.headingnews}>
            <p>NEWSROOM</p>
            <h4>Our Latest News Updates</h4>
          </div>
          <div className={styles.grid}>
            <div className={styles.subGrid}>
              <div className={styles.cartbg}>
                <Image src={Nopath}  />
                <div className={styles.carttext}>
                  <h5>The Legal Conundrum over Regulation of Digital News</h5>
                  <p>Recently, the citizens of India have observed that the international OTT platforms are on a free run to control the content of the people of a sovereign nation.</p>
                </div>
              </div>
            </div>
            <div className={styles.subGrid}>
              <div className={styles.cartbg}>
                <Image src={Nopath}  />
                <div className={styles.carttext}>
                  <h5>An India Israeli Big Expan. Program in UAE</h5>
                  <p>Recently, the citizens of India have observed that the international OTT platforms are on a free run to control the content of the people of a sovereign nation.</p>
                </div>
              </div>
            </div>
            <div className={styles.subGrid}>
              <div className={styles.cartbg}>
                <Image src={Nopath}  />
                <div className={styles.carttext}>
                  <h5>Nations Across The World : India Center</h5>
                  <p>All countries today face a common dilemma: How to best protect critical national assets, in the age of ever more effective cyber warfare?</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.buttonGrop}>
            <button><span>Read More</span><i className='fa fa-angle-right ' ></i> </button>
          </div>
       </div>
    </div>
  )
}
