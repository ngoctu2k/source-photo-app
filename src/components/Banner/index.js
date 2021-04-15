import React from "react";
import { useStyles } from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Container } from "@material-ui/core";

function Banner(props) {
  const { title, backgroundUrl } = props;
  const classes = useStyles();
  const backgroundSlide = backgroundUrl
    ? [
      ...backgroundUrl
    ]
      
    : [ " https://i.pinimg.com/564x/8a/a7/f3/8aa7f39e153dc80ca16855071320063c.jpg"," https://i.pinimg.com/236x/15/02/3f/15023fd9bc55470260779f01b48faa04.jpg"];

  const settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        {backgroundSlide.map((x) => {
          return (
            <div>
              <section className={classes.banner} style={{background:`url(${x})`}}>
                <h1 className={classes.title}>{title}</h1>
              </section>
            </div>
       
          );
        })}
       
            
      </Slider>
    </>
  );
}

export default Banner;
