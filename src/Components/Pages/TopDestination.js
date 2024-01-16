import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { hiddenNumber } from "../GlobalData/GlobalMetaData";

function TopDestination() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      // Handle calling 
      function handleCall(){
        window.location.href=hiddenNumber
      }
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <p className="h1">
              <sup>
                <i
                  className="icofont-rounded-left-up prim-color"
                  data-aos="fade"
                />
              </sup>
              Top Destinations
              <sub>
                <i
                  className="icofont-rounded-right-down prim-color"
                  data-aos="fade"
                  data-aos-delay={100}
                />
              </sub>
            </p>
            <p className="text-white-1">Its 1:04 AM and I am high af so...</p>
          </div>
          {/* <div className="flights-slider"> */}
          {/* <Slider {...settings} className="flights-slider"> */}
          <Carousel
            responsive={responsive}
            autoPlay={true}
            infinite={true}
            showDots={true}
            showArrows={false}
          >
            <div className="slider-content" onClick={()=>handleCall()}>
            
                <div className="flights-slider-img">
                  <img src={require("../assets/img/city/atlanta.webp")} alt="top destination" width={"183"} height={"183"}  />
                </div>
                <div className="flights-slider-text">
                  {/* <p className="h5">Zephyr</p> */}
                  <p>Atlanta</p>
                </div>
             
            </div>
            <div className="slider-content" onClick={()=>handleCall()}>
          
                <div className="flights-slider-img">
                  <img src={require("../assets/img/city/austin.webp")} alt="top destination" width={"183"} height={"183"}  />
                </div>
                <div className="flights-slider-text">
                  {/* <p className="h5">Zephyr</p> */}
                  <p>Austin</p>
                </div>
        
            </div>
            <div className="slider-content" onClick={()=>handleCall()}>
            
                <div className="flights-slider-img">
                  <img src={require("../assets/img/city/chicago.webp")} alt="top destination" width={"183"} height={"183"}  />
                </div>
                <div className="flights-slider-text">
                  {/* <p className="h5">Zephyr</p> */}
                  <p>Chicago</p>
                </div>
        
            </div>
            <div className="slider-content" onClick={()=>handleCall()}>
            
                <div className="flights-slider-img">
                  <img src={require("../assets/img/city/denver.webp")} alt="top destination" width={"183"} height={"183"} />
                </div>
                <div className="flights-slider-text">
                  {/* <p className="h5">Zephyr</p> */}
                  <p>Denver</p>
                </div>
      
            </div>
            <div className="slider-content" onClick={()=>handleCall()}>
              
                <div className="flights-slider-img">
                  <img src={require("../assets/img/city/lasvegas.webp")} alt="top destination" width={"183"} height={"183"}  />
                </div>
                <div className="flights-slider-text">
                  {/* <p className="h5">Zephyr</p> */}
                  <p>Las Vegas</p>
                </div>
     
            </div>
            <div className="slider-content" onClick={()=>handleCall()}>
              
                <div className="flights-slider-img">
                  <img src={require("../assets/img/city/los_angeles.webp")} alt="top destination" width={"183"} height={"183"}  />
                </div>
                <div className="flights-slider-text">
                  {/* <p className="h5">Zephyr</p> */}
                  <p>Los Angeles</p>
                </div>
            
            </div>
            <div className="slider-content" onClick={()=>handleCall()}>
             
                <div className="flights-slider-img">
                  <img src={require("../assets/img/city/newyork.webp")} alt="top destination" width={"183"} height={"183"}  />
                </div>
                <div className="flights-slider-text">
                  {/* <p className="h5">Zephyr</p> */}
                  <p>New York</p>
                </div>
           
            </div>
            <div className="slider-content" onClick={()=>handleCall()}>
            
                <div className="flights-slider-img">
                  <img src={require("../assets/img/city/orlando.webp")} alt="top destination" width={"183"} height={"183"}  />
                </div>
                <div className="flights-slider-text">
                  {/* <p className="h5">Zephyr</p> */}
                  <p>Orlando</p>
                </div>
              
            </div>
            <div className="slider-content" onClick={()=>handleCall()}>
              
                <div className="flights-slider-img">
                  <img src={require("../assets/img/city/sanfrancisco.webp")} alt="top destination" width={"183"} height={"183"}  />
                </div>
                <div className="flights-slider-text">
                  {/* <p className="h5">Zephyr</p> */}
                  <p>San Francisco</p>
                </div>
              
            </div>
          </Carousel>
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default TopDestination;
