import React from 'react'
import '../Gallery/Gallery.css'

import image1 from '../../images/Gallery/d1.webp';
import image2 from '../../images/Gallery/d2.webp';
import image3 from '../../images/Gallery/d3.webp';
import image4 from '../../images/Gallery/d4.webp';
import image5 from '../../images/Gallery/d5.webp';
import image6 from '../../images/Gallery/d6.webp';
import image7 from '../../images/Gallery/d7.webp';
import image8 from '../../images/Gallery/d8.webp';
import image9 from '../../images/Gallery/d9.webp';
import image10 from '../../images/Gallery/d10.webp';
import image11 from '../../images/Gallery/d11.webp';
import image12 from '../../images/Gallery/d12.webp';

const Gallery = () => {

    const images = [
        image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12
      ];

  return (
    <div>

        <div className='GalleryMonitor'>
            <div className='GalleryBox'>

            <div className="gallery">
{images.map((image, index) => {{
  return <img key={index} className="gallery-image" src={image} alt={`Image ${index + 1}`} />;
}})}
</div>

            </div>
        </div>
        

    </div>
  )
}

export default Gallery