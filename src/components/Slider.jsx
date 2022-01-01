import React from 'react'
import Carousel from 'framer-motion-carousel'
import SimpleImageSlider from "react-simple-image-slider";
import Styled from "styled-components"


const Wrapper=Styled.div`
max-Width:100%;
height:400px;
max-height:700px;
`

function Slider() {
  
    const images = [
        { url: "https://pictures-uganda.jijistatic.com/3123432_fb-img-1594340546929_1_720x960.webp" },
        { url: "https://pictures-uganda.jijistatic.com/3123432_fb-img-1594340546929_1_720x960.webp" },
        { url: "https://pictures-uganda.jijistatic.com/3123432_fb-img-1594340546929_1_720x960.webp" },
        { url: "https://pictures-uganda.jijistatic.com/3123432_fb-img-1594340546929_1_720x960.webp" },
        { url: "https://pictures-uganda.jijistatic.com/3123432_fb-img-1594340546929_1_720x960.webp" },
        { url: "https://pictures-uganda.jijistatic.com/3123432_fb-img-1594340546929_1_720x960.webp" },
   
      ];

    return (
        <div>
    <Wrapper>   
    <SimpleImageSlider
        justifyContent="center"
       width="80%"
       height="50%"
        images={images}
        showBullets={true}
        showNavs={true}
      />
     </Wrapper>
        </div>
    )
}

export default Slider
