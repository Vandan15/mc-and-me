import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import styles from './about-us.module.scss'
import Image from 'next/image';
import about1 from '../public/assets/about-1.png'
import about2 from '../public/assets/about-2.png'
import handShakeImg from '../public/assets/handshake.png'
import phoneImg from '../public/assets/phone.svg'
import Image1 from '../public/assets/Image1.png'

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
              <div className={styles.secoundimg}>
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

      <div className={styles.storyImage}>
        <div className={styles.container}>
          <div className={styles.storybox}>

            <div className={styles.boximagedesign}></div>
            <div className={styles.boxstorybg}>
              <h4> <span>Our</span> Story</h4>
              <p>tever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

          </div>

        <div className={styles.secoundstorybox}>
           <div className={styles.storybox}>

            <div className={styles.boximagedesign}></div>
            <div className={styles.boxstorybg}>
            
              <h4> <span>Who</span>  We Are?</h4>
              <p>tever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

          </div>
        </div>

         
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.teamWrapper}>
          <h4 className={styles.header}>Our Team</h4>
          <div className={styles.teamMember}>
            <div className={styles.cardWrapper}>
              <h4>Jeremy Mare</h4>
              <p>Chief Executive Officer</p>
              <Image src={handShakeImg} />
            </div>
            <div className={styles.cardWrapper}>
              <h4>Jeremy Mare</h4>
              <p>Chief Executive Officer</p>
              <Image src={handShakeImg} />
            </div>
            <div className={styles.cardWrapper}>
              <h4>Jeremy Mare</h4>
              <p>Chief Executive Officer</p>
              <Image src={handShakeImg} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.teamValue}>
          <h4 className={styles.header}>Our Values</h4>
          <div className={styles.teamMember}>
            <div className={styles.cardWrapper}>
              <div>
                <Image src={phoneImg} />
              </div>
              <div className={styles.contentWrap}>
                <h4>Communicate</h4>
                <p>Good communicator as we have large number of good team who constantly support out user</p>
              </div>
            </div>
            <div className={styles.cardWrapper}>
              <div>
                <Image src={phoneImg} />
              </div>
              <div className={styles.contentWrap}>
                <h4>Communicate</h4>
                <p>Good communicator as we have large number of good team who constantly support out user</p>
              </div>
            </div>
            <div className={styles.cardWrapper}>
              <div>
                <Image src={phoneImg} />
              </div>
              <div className={styles.contentWrap}>
                <h4>Communicate</h4>
                <p>Good communicator as we have large number of good team who constantly support out user</p>
              </div>
            </div>
            <div className={styles.cardWrapper}>
              <div>
                <Image src={phoneImg} />
              </div>
              <div className={styles.contentWrap}>
                <h4>Communicate</h4>
                <p>Good communicator as we have large number of good team who constantly support out user</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
