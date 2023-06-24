import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import '../Navbar/Navbar.css'

import Magic from '../../images/me.png'

import { SiTwitter, SiNodemon, SiDiscord } from 'react-icons/si';
import { GiDevilMask, GiEvilBat } from 'react-icons/gi';

const Navbar = () => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>

        <div className='Navbar' data-aos="fade-right" data-aos-delay="2500">
            <div className='Socials'>
                <a className='buttonHome' href='/'><SiNodemon size='2.5rem'/><span className="tooltip-home">HOME</span></a>
                <a className='buttonHome' href='/Gallery'><GiEvilBat size='2.5rem'/><span className="tooltip-home">GALLERY</span></a>
                <a className='buttontwitter' href='https://twitter.com/devil_delights' target='_blank'><SiTwitter size='2.5rem'/><span className="tooltip-twitter">TWITTER</span></a>
                {/* <a className='buttondiscord' href='#' target='_blank'><SiDiscord size='2.5rem'/><span className="tooltip-discord">DISCORD</span></a> */}
                <a className='buttonmint' href='https://magiceden.io/marketplace/devil_delights'><img src={Magic}/><span className="tooltip-mint">TRADE</span></a>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
