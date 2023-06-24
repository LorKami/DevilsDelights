import React, { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import '../Monitor/Monitor.css'

import Magic from '../../images/me.png'

import { GiDevilMask, GiEvilBat } from 'react-icons/gi';


const Monitor = () => {
    
    useEffect(() => {
        Aos.init({ duration: 1000 });
      }, []);
      
  return (

    <div>
    
    <div className='Monitor'>
        <div className='HeroSection'>
            <div className='HeroImageLeft'
                        data-aos="fade-right"
                        data-aos-easing="ease-in-out"
                        data-aos-offset="200"
                        data-aos-delay="900"
                        >
                            <div className="HeroSpriteFixPosition">
                                <div className='HeroSprite'></div>
                            </div>
            </div>
            <div className='HeroInfoRight' data-aos="zoom-out" data-aos-delay="1200">
                <h2>Devils Delights</h2>
                <p>Welcome to a dark and mysterious world with supernatural creatures. Explore a world where darkness reigns and power is everything. Be part of our community and unleash your inner demon </p>
                <div className='HeroButton'>
                    <a className="Mintbtn" href='https://magiceden.io/marketplace/devil_delights' target='_blank'><p>TRADE ON &nbsp;<img src={Magic}/></p></a>
                    <a href='/Gallery'><p>GALLERY &nbsp;<GiEvilBat size='1.05em'/></p></a>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Monitor
