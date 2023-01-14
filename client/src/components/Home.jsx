import React from 'react'
import '../styles/Home.scss';

import vg from '../assets/2.webp';

import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from 'react-icons/ai';

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
        <main>
            <h1>VJTI Alumni Association</h1>
            <p>Making sure the legacy lives on</p>
        </main>
    </div>


    <div className="home2">
        <img src={vg} alt="Graphics" />
       <div>
          <p>They Say "Never Forget Your Roots"<br>
          </br>
          <br></br>
          Ever lost touch with some of your batchmates and peers? Now reconnect with them and relive your college days! It's never too late to connect with peers who shared the same hunger for excellence as you.   
          </p>
       </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>Once a VJTIan, Always a VJTIan</h1>
            <p>
            <br></br>
            For 4+ years, the VJTI community has nurtured us.<br></br> Don't you think it is our turn now? If not us, who? If not now, when?
            <br></br>
            The Alumni meet is an event for old relationships to be cherished, celebrated, refreshed, and new ones to be formed 
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