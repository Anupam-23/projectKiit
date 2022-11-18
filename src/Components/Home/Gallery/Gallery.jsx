import React from "react";
import "./Gallery.scss";
import "pure-react-carousel/dist/react-carousel.es.css";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "asset/images/Home/ImageSlider/img1.jpeg" },
  { url: "asset/images/Home/ImageSlider/img2.jpeg" },
  { url: "asset/images/Home/ImageSlider/img3.jpeg" },
  { url: "asset/images/Home/ImageSlider/img4.jpeg" },
  { url: "asset/images/Home/ImageSlider/img5.jpeg" },
];

const Gallery = () => {

  return (
    <>
      <div className="gallery">
        <div className="headContainer">
          <h1 className="GalleryHead">Gallery</h1>
        </div>
        <div className="galleryCarousel">
                <SimpleImageSlider
                
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        style={{marginLeft:469}}
      />
        </div>
      </div>
    </>
  );
};

export default Gallery;
