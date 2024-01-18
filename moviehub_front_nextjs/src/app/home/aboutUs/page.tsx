import Link from 'next/link'
import React from 'react'
import styles from '../home.module.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const AboutUs = () => {
    return (
        <section className={styles.centerDivContainer}>
            <h2 className={styles.movieTitle}>About me</h2>

            <div className={styles.glass}>

                <div className={styles.halfContainer}>
                    <h1>ENRIC BROTO HERNANDEZ</h1>
                    <h2>Fullstack developer</h2>
                    <div>
                        <Link href="https://github.com/ebroto7"><FaGithub /></Link>
                        <Link href="www.linkedin.com/in/ebroto"><FaLinkedin /></Link>
                        <Link href="https://www.instagram.com/ebroto7/"><FaInstagram /></Link>


                    </div>
                    <Link className={styles.mainButton} href="/home">Return Home</Link>
                </div>
            </div>
        </section>
    )
}

export default AboutUs

