import React from 'react'
import Header from '../components/Header/Header'
import styles from './contact-us.module.scss'
import contactImg from '../public/assets/contact.png'
import Image from 'next/image';
import Footer from '../components/Footer/Footer';

export default function contact() {
    return (
        <>
            <Header />
            <div className={styles.contactUs}>
                <div className={styles.orangeWrapper}>
                    <h4 className={styles.header}>
                        CONTACT US
                    </h4>
                    <div className={styles.container}>
                        <p className={styles.subText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                </div>
                <div className={styles.imgBox}>
                    <div className={styles.formBox}>
                        <form>
                            <div className={styles.inputWrapper}>
                                <label>Your Name</label>
                                <input type="text"></input>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label>Your Contact</label>
                                <input type="text"></input>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label>Your Email Address</label>
                                <input type="text"></input>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label>Subject</label>
                                <input type="text"></input>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label>How can we help you?</label>
                                <textarea></textarea>
                            </div>
                            <div className={styles.saveBtn}>
                                <button>SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
