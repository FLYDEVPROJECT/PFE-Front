import React from "react";
import { Link } from "react-router-dom";

//Image

import widget1 from "../../../images/widget/1.jpg";
import widget5 from "../../../images/widget/5.jpg";
import widget6 from "../../../images/widget/6.jpg";
import widget7 from "../../../images/widget/7.jpg";
import widget8 from "../../../images/widget/8.jpg";
import avater1 from "../../../images/avatar/1.jpg";
import doctors6 from "../../../images/doctors/6.jpg";
import doctors7 from "../../../images/doctors/7.jpg";
import doctors8 from "../../../images/doctors/8.jpg";
import map from "../../../images/svg/map.svg";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Reponse = () => {
   function SampleNextArrow(props) {
      const { onClick } = props;
      return (
         <div className="owl-next" onClick={onClick} style={{ zIndex: 99 }}>
            <i className="fa fa-caret-right" />
         </div>
      );
   }

   function SamplePrevArrow(props) {
      const { onClick } = props;
      return (
         <div
            className="owl-prev disabled"
            onClick={onClick}
            style={{ zIndex: 99 }}
         >
            <i className="fa fa-caret-left" />
         </div>
      );
   }

   const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
         {
            breakpoint: 990,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <>

         <div className="row">
            <div className="col-xl-3 col-lg-4 col-xxl-4">
               <div className="card">
                
                  <div className="card-body pt-4">
                     <PerfectScrollbar
                        id="DZ_W_Todo2"
                        className="widget-media dz-scroll ps ps--active-y height370"
                     >
                    
                     </PerfectScrollbar>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-xxl-8 col-lg-8">
               <div className="card">
                  <div className="card-body">
                   
                  
                  </div>
               </div>
            </div>
           
           
         </div>
      </>
   );
};

export default Reponse;
