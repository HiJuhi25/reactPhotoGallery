import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name="Saha";
const img1 ="https://www.w3schools.com/css/img_lights.jpg";
const img2 ="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
const img3 ="https://imgv3.fotor.com/images/blog-cover-image/part-blurry-image.jpg";
const img4 ="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg";
const img5 = "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg";
const img6 = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";

ReactDOM.render(
  <>
  <h1>Welcome To Photo Gallery</h1>
  <div class="grid-container">
    <div class="grid-item"><img src={img1} alt=""/></div>
    <div class="grid-item"><img src={img2} alt=""/></div>
    <div class="grid-item"><img src={img3} alt=""/></div>
    <div class="grid-item"><img src={img4} alt=""/></div>
    <div class="grid-item"><img src={img5} alt=""/></div>
    <div class="grid-item"><img src={img6} alt=""/></div>

  </div>
  </>
, document.getElementById('root'))
