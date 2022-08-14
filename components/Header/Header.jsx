import React, { useState } from 'react'
import styles from './Header.module.scss';
import Logo from '../../public/assets/Logo.png'
import Image from 'next/image';

export default function Header() {

  const [show, setShow] = useState(false)

  return (
    <div className={styles.header}>
      <div className={styles.container} >
        <div className={styles.grid}>
          <div className={styles.subgrid}>
            <a>
              <Image src={Logo} />
            </a>
          </div>
          <div className={styles.subgrid}>
            <div className={styles.menuline}>
              <ul>
                <li><a>HOME</a></li>
                <li><a>COURSES</a></li>
                <li><a>FACULTIES</a></li>
                <li><a>ABOUT</a></li>
                <li><a>MY ACCOUNT</a></li>
              </ul>
              <div className={styles.buttonheader}>
                <button>Login</button>
                <button>Register</button>
              </div>
            </div>
            <div className={styles.barIcon}>
              <i onClick={() => setShow(!show)} className='fa fa-bars' ></i>
            </div>

            {
              show && <div className={styles.phonemenu}>
                <div className={styles.innermenu}>
                  <div className={styles.headerDesign} >
                    <Image src={Logo} />
                    <i onClick={() => setShow(!show)} className='fa fa-close'></i>
                  </div>
                  <div className={styles.phonemenuline}>
                    <ul>
                      <li><a>HOME</a></li>
                      <li><a>COURSES</a></li>
                      <li><a>FACULTIES</a></li>
                      <li><a>ABOUT</a></li>
                      <li><a>MY ACCOUNT</a></li>
                    </ul>
                    <div className={styles.buttonheader}>
                      <button>Login</button>
                      <button>Register</button>
                    </div>
                  </div>
                </div>
              </div>
            }



          </div>
        </div>
      </div>
    </div>
  )
}
