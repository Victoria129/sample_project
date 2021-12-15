import React from 'react'
import "../css/details.css";
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import {CardMedia} from '@material-ui/core'
import {CardActionArea} from '@material-ui/core'
import SimpleImageSlider from "react-simple-image-slider"

function Details() {
    const images=[  { url: "images/1.jpg" },
    { url: "https://pictures-uganda.jijistatic.com/4654554_7cfae9a3-d471-4469-93f4-4962e3435a25_1600x1200.webp" },
    { url: "https://pictures-uganda.jijistatic.com/4654554_7cfae9a3-d471-4469-93f4-4962e3435a25_1600x1200.webp" },
    { url: "https://pictures-uganda.jijistatic.com/4654554_7cfae9a3-d471-4469-93f4-4962e3435a25_1600x1200.webp" },
    { url: "https://pictures-uganda.jijistatic.com/4654554_7cfae9a3-d471-4469-93f4-4962e3435a25_1600x1200.webp" },
    { url: "https://pictures-uganda.jijistatic.com/4654554_7cfae9a3-d471-4469-93f4-4962e3435a25_1600x1200.webp" },
    { url: "https://pictures-uganda.jijistatic.com/4654554_7cfae9a3-d471-4469-93f4-4962e3435a25_1600x1200.webp" }]
    return (
        <div>
            <section class="product">
                <Card padding>
                <div>
      <SimpleImageSlider
        width={996}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
     
    
  </Card>

	<div class="product__info">
		<div class="title">
			<h1>Toyota Kigege Ready for Work</h1>
			<span>COD: 45999</span>
		</div>
		<div class="price">
			UGX <span>500000000</span>
		</div>
		<div class="variant">
			<h3>Description</h3>
			
		</div>
		<div class="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>Apples are nutricious</li>
				<li>Apples may be good for weight loss</li>
				<li>Apples may be good for bone health</li>
				<li>They're linked to a lowest risk of diabetes</li>
			</ul>
		</div>
        
	
	</div>


</section>


        </div>
    )
}

export default Details
