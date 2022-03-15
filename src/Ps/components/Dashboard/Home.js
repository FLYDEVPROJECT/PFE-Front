import React from "react";
import { Link } from "react-router-dom";
import loadable from "@loadable/component";

// Images
import DrAlexandro from "../../../images/doctors/5.jpg";
import DrSamantha from "../../../images/doctors/1.jpg";
import DrAliandro from "../../../images/doctors/2.jpg";
import DrSamuel from "../../../images/doctors/4.jpg";
import DrMelinda from "../../../images/doctors/3.jpg";
import widget01 from "../../../images/widget/1.jpg";
import widget02 from "../../../images/widget/2.jpg";
import widget03 from "../../../images/widget/3.jpg";
import widget05 from "../../../images/widget/5.jpg";
import { Dropdown, Tab, Nav } from "react-bootstrap";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

const ApexBar3 = loadable(() => import("../charts/apexcharts/Bar3"));
const ApexLine5 = loadable(() => import("../charts/apexcharts/Line5"));

const Home = () => {
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
      slidesToShow: 5,
      slidesToScroll: 1,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
         {
            breakpoint: 1600,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },

         {
            breakpoint: 1200,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 991,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 767,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 1,
            },
         },
         {
            breakpoint: 575,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
            },
         },
      ],
   };

   return (
      <div>
         <div className="form-head d-flex mb-3 mb-md-4 align-items-start">
            <div className="mr-auto d-none d-lg-block">
               <h3 className="text-black font-w600">Bienvenue dans HC!</h3>
               <p className="mb-0 fs-18">Health care ! </p>
            </div>
            <div className="input-group search-area ml-auto d-inline-flex">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Search here"
               />
               <div className="input-group-append">
                  <button type="button" className="input-group-text">
                     <i className="flaticon-381-search-2" />
                  </button>
               </div>
            </div>
            <Link to="/" className="settings-icon  ml-3">
               <i className="flaticon-381-settings-2 mr-0" />
            </Link>
         </div>
       
        
      </div>
   );
};

export default Home;
