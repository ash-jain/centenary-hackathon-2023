import React from 'react'
import '../styles/Home.scss';

import vg from '../assets/2.webp';

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>TechyStar</h1>
            <p>Solution to all your problems</p>
        </main>
    </div>


    <div className="home2">
        <img src={vg} alt="Graphics" />
       <div>
          <p>We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.</p>
       </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Who we are?</h1>
            <p>
            Tech problems are a common occurrence in today's world, where we rely heavily on technology in almost every aspect of our lives. From our smartphones and laptops to our home appliances and security systems, it seems like there is always some sort of tech problem lurking around the corner. These problems can range from simple issues like a slow internet connection or a glitchy app, to more serious problems like hardware failures or data breaches. No matter what the issue is, tech problems can be frustrating and time-consuming to resolve, and they can often disrupt our daily routines and productivity.
            </p>
        </div>
    </div>

    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle />
                    <p>Google</p>
                </div>

                <div style={{animationDelay:"0.5s"}}>
                    <AiFillAmazonCircle />
                    <p>Amazon</p>
                </div>

                <div style={{animationDelay:"0.7s"}}>
                    <AiFillYoutube />
                    <p>Youtube</p>
                </div>

                <div style={{animationDelay:"0.3s"}}>
                    <AiFillInstagram />
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}
export default Home