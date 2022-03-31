import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert" ;

/// Scroll
//Images
import avater02 from "../../../images/avatar/2.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import map from "../../../images/svg/map.svg";


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
                  <div className="media d-sm-flex text-sm-left d-block text-center">

                        <img
                           alt=""
                           className="rounded mr-sm-2 mr-0 mb-5 mb-sm-5"
                           width={120}
                           src={avater02}
                        />
                        <div className="media-body">
                           <h3 className="fs-22 text-black font-w600">
                              Dr. Maroua BEN SALEM
                           </h3><br></br>
                           <p className="text-primary">Psychologue</p>
                           <div className="social-media mb-sm-0 mb-3 justify-content-sm-start justify-content-center">
                              <Link to="/patient-details">
                                 <i className="lab la-instagram ml-0" />
                              </Link>
                              <Link to="https://www.facebook.com/">
                                 <i className="lab la-facebook-f" />
                              </Link>
                              <Link to="/patient-details">
                                 <i className="lab la-twitter" />
                              </Link>
                           </div>
                        </div>
                      
                     </div>
                  </div>
            
               </div>
               
            </div>
            <div className="col-xl-6 col-xxl-8 col-lg-8">
               <div className="card">
                  <div className="card-body">
                   
                  <div className="row">
                        <div className="col-lg-6 mb-3">
                           <div className="media">
                              <span className="p-3 border border-primary-light rounded-circle mr-3">
                                 <svg
                                    width={22}
                                    height={22}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <g clipPath="url(#clip0)">
                                       <path
                                          d="M27.5716 13.4285C27.5716 22.4285 16.0001 30.1428 16.0001 30.1428C16.0001 30.1428 4.42871 22.4285 4.42871 13.4285C4.42871 10.3596 5.64784 7.41637 7.8179 5.24631C9.98797 3.07625 12.9312 1.85712 16.0001 1.85712C19.0691 1.85712 22.0123 3.07625 24.1824 5.24631C26.3524 7.41637 27.5716 10.3596 27.5716 13.4285Z"
                                          stroke="#2BC155"
                                          strokeWidth={3}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                       />
                                       <path
                                          d="M16.0002 17.2857C18.1305 17.2857 19.8574 15.5588 19.8574 13.4286C19.8574 11.2983 18.1305 9.57141 16.0002 9.57141C13.87 9.57141 12.1431 11.2983 12.1431 13.4286C12.1431 15.5588 13.87 17.2857 16.0002 17.2857Z"
                                          stroke="#2BC155"
                                          strokeWidth={3}
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                       />
                                    </g>
                                    <defs>
                                       <clipPath id="clip0">
                                          <rect
                                             width="30.8571"
                                             height="30.8571"
                                             fill="white"
                                             transform="translate(0.571533 0.571411)"
                                          />
                                       </clipPath>
                                    </defs>
                                 </svg>
                              </span>
                              <div className="media-body">
                                 <span className="d-block text-light mb-2">
                                    Addresse
                                 </span>
                                 <p className="fs-18 text-dark">
                                    Avenue habib borguiba 47 salema478,{" "}
                                    <strong>TUNIS 94107</strong>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="map-bx mb-3">
                              <img src={map} alt="" />
                              <Link to="/doctor-details" className="map-button">
                                 voir
                              </Link>
                              <Link className="map-marker" to="#">
                                 <i className="las la-map-marker-alt" />
                              </Link>
                           </div>
                        </div>
                        <div className="col-lg-6 mb-lg-0 mb-3">
                           <div className="media">
                              <span className="p-3 border border-primary-light rounded-circle mr-3">
                                 <svg
                                    width={22}
                                    height={22}
                                    viewBox="0 0 31 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M28.2884 21.7563V25.6138C28.2898 25.9719 28.2165 26.3264 28.073 26.6545C27.9296 26.9826 27.7191 27.2771 27.4553 27.5192C27.1914 27.7613 26.8798 27.9456 26.5406 28.0604C26.2014 28.1751 25.8419 28.2177 25.4853 28.1855C21.5285 27.7555 17.7278 26.4035 14.3885 24.238C11.2817 22.2638 8.64771 19.6297 6.67352 16.523C4.50043 13.1685 3.14808 9.34928 2.72601 5.37477C2.69388 5.0192 2.73614 4.66083 2.8501 4.32248C2.96405 3.98413 3.14721 3.67322 3.38792 3.40953C3.62862 3.14585 3.92159 2.93517 4.24817 2.79092C4.57475 2.64667 4.9278 2.57199 5.28482 2.57166H9.14232C9.76634 2.56552 10.3713 2.78649 10.8445 3.1934C11.3176 3.60031 11.6267 4.16538 11.714 4.78329C11.8768 6.01778 12.1788 7.22988 12.6141 8.39648C12.7871 8.85671 12.8245 9.35689 12.722 9.83775C12.6194 10.3186 12.3812 10.76 12.0354 11.1096L10.4024 12.7426C12.2329 15.9617 14.8983 18.6271 18.1174 20.4576L19.7504 18.8246C20.1001 18.4789 20.5414 18.2406 21.0223 18.1381C21.5031 18.0355 22.0033 18.073 22.4636 18.246C23.6302 18.6813 24.8423 18.9832 26.0767 19.1461C26.7014 19.2342 27.2718 19.5488 27.6796 20.0301C28.0874 20.5113 28.304 21.1257 28.2884 21.7563Z"
                                       stroke="#2BC155"
                                       strokeWidth={3}
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    />
                                 </svg>
                              </span>
                              <div className="media-body">
                                 <span className="d-block text-light mb-2">
                                    télephone
                                 </span>
                                 <p className="fs-18 text-dark font-w600 mb-0">
                                    +216 53 478 952
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="media">
                              <span className="p-3 border border-primary-light rounded-circle mr-3">
                                 <svg
                                    width={22}
                                    height={22}
                                    viewBox="0 0 31 31"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M5.14344 5.14331H25.7168C27.1312 5.14331 28.2884 6.30056 28.2884 7.71498V23.145C28.2884 24.5594 27.1312 25.7166 25.7168 25.7166H5.14344C3.72903 25.7166 2.57178 24.5594 2.57178 23.145V7.71498C2.57178 6.30056 3.72903 5.14331 5.14344 5.14331Z"
                                       stroke="#2BC155"
                                       strokeWidth={3}
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    />
                                    <path
                                       d="M28.2884 7.71503L15.4301 16.7159L2.57178 7.71503"
                                       stroke="#2BC155"
                                       strokeWidth={3}
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    />
                                 </svg>
                              </span>
                              <div className="media-body">
                                 <span className="d-block text-light mb-2">
                                    Email
                                 </span>
                                 <p className="fs-18 text-dark font-w600 mb-0">
                                    Maroua.bensalem@<p>gmail.com</p>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div></div></div>
               <div className="col-xl-3 col-xxl-12">
               <div className="card abilities-chart">
                  <div className="card-header border-1 pb-0">
                     <h4 className="fs-20 font-w600">Présentation</h4>
                  </div>
                  <div className="card-header border-0 pb-0">
                     <h6 >Spécialités</h6>
                  </div>
                  <div class="container">
    <div class="col">  <button type="button" class="btn btn-outline-primary btn-xs">
Médecin Esthétique</button>  </div>

  </div>
  <div className="card-header border-0 pb-0" >
                     <h6 style={{color: "black"}}>Qualification professionnelle</h6>
                     
                  </div>
                  <div class="container">
    <div class="col">Diplômée de l'Université de Versailles Saint-Quentin en Dermatologie et Laser Esthétique</div>

  </div>
  <div className="card-header border-0 pb-0">
                     <h6 >Langues parlées</h6>
                     
                  </div>
                  <div class="container">
    <div class="col">  <button type="button" class="btn btn-outline-primary btn-xs">
Médecin Esthétique</button>  </div>

  </div>

                  <div className="card-body">
                     <div className="d-flex justify-content-center">
                     
                     </div>
                     <div className="chart-point">
                        <div>
                           <span className="a" />
                           <span className="text-ov px-1 fs-15">Operation</span>
                        </div>
                        <div>
                           <span className="b" />
                           <span className="text-ov px-1 fs-15">Theraphy</span>
                        </div>
                        <div>
                           <span className="c" />
                           <span className="text-ov px-1 fs-15">Mediation</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>




            <div className="row">
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Confirm</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swal({
                                    title: "Are you sure?",
                                    text:
                                       "Once deleted, you will not be able to recover this imaginary file!",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                 }).then((willDelete) => {
                                    if (willDelete) {
                                       swal(
                                          "Poof! Your imaginary file has been deleted!",
                                          {
                                             icon: "success",
                                          }
                                       );
                                    } else {
                                       swal("Your imaginary file is safe!");
                                    }
                                 })
                              }
                              className="btn btn-warning btn sweet-confirm"
                           >
                              Sweet Confirm
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-3">
               <div className="card">
                  <div className="card-body">
                     <h4 className="card-title">Sweet Confirm Or Cancel</h4>
                     <div className="card-content">
                        <div className="sweetalert mt-5">
                           <button
                              onClick={() =>
                                 swal({
                                    title: "Are you sure?",
                                    text:
                                       "Once deleted, you will not be able to recover this imaginary file!",
                                    icon: "warning",
                                    buttons: true,
                                    dangerMode: true,
                                 }).then((willDelete) => {
                                    if (willDelete) {
                                       swal(
                                          "Poof! Your imaginary file has been deleted!",
                                          {
                                             icon: "success",
                                          }
                                       );
                                    } else {
                                       swal("Your imaginary file is safe!");
                                    }
                                 })
                              }
                              className="btn btn-warning btn sweet-success-cancel"
                           >
                              Sweet Confirm Or Cancel
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div></div>


           
           
      </>
   );
};

export default Reponse;