import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/// Scroll
const Home = () => {

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
          
         </div>

         <div className="col-xl-3 col-xxl-6 col-sm-6">
               <div className="card gradient-bx text-white bg-danger rounded">
                  <div className="card-body">
                     <div className="media align-items-center">
                        <div className="media-body">
                           <p className="mb-1">Total Patient</p>
                           <div className="d-flex flex-wrap">
                              <h2 className="fs-40 font-w600 text-white mb-0 mr-3">
                                 783k
                              </h2>
                              <div>
                                 <svg
                                    width={28}
                                    height={19}
                                    viewBox="0 0 28 19"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M8.56244 9.25C6.35869 11.6256 2.26214 16.0091 0.999939 17.5H26.4374V1L16.8124 13.375L8.56244 9.25Z"
                                       fill="url(#paint0_linear4)"
                                    />
                                    <path
                                       d="M0.999939 17.5C2.26214 16.0091 6.35869 11.6256 8.56244 9.25L16.8124 13.375L26.4374 1"
                                       stroke="white"
                                       strokeWidth={2}
                                    />
                                    <defs>
                                       <linearGradient
                                          id="paint0_linear4"
                                          x1="13.7187"
                                          y1="3.0625"
                                          x2="14.7499"
                                          y2="17.5"
                                          gradientUnits="userSpaceOnUse"
                                       >
                                          <stop
                                             stopColor="white"
                                             stopOpacity="0.73"
                                             offset="0.1"
                                          />
                                          <stop
                                             offset={1}
                                             stopColor="white"
                                             stopOpacity={0}
                                          />
                                       </linearGradient>
                                    </defs>
                                 </svg>
                              </div>
                           </div>
                        </div>
                        <span className="border rounded-circle p-4">
                           <svg
                              width={34}
                              height={34}
                              viewBox="0 0 34 34"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                           >
                              <path
                                 d="M23.6667 0.333311C21.1963 0.264777 18.7993 1.17744 17 2.87164C15.2008 1.17744 12.8038 0.264777 10.3334 0.333311C8.9341 0.337244 7.55292 0.649469 6.28803 1.24778C5.02315 1.84608 3.90564 2.71577 3.01502 3.79498C-0.039984 7.45998 -0.261651 13.3333 1.19668 17.5966C1.21002 17.6266 1.22002 17.6566 1.23335 17.6866C3.91168 25.3333 15.2717 33.6666 17 33.6666C18.6983 33.6666 30.025 25.5166 32.7667 17.6866C32.78 17.6566 32.79 17.6266 32.8034 17.5966C34.2417 13.4016 34.0867 7.51498 30.985 3.79498C30.0944 2.71577 28.9769 1.84608 27.712 1.24778C26.4471 0.649469 25.0659 0.337244 23.6667 0.333311ZM17 30.03C14.6817 28.5233 8.23168 24 5.30335 18.6666H12C12.2743 18.6667 12.5444 18.599 12.7863 18.4696C13.0282 18.3403 13.2344 18.1532 13.3867 17.925L14.83 15.7583L17.0867 22.525C17.1854 22.8207 17.3651 23.0829 17.6054 23.2816C17.8456 23.4803 18.1368 23.6076 18.4458 23.6491C18.7548 23.6906 19.0693 23.6446 19.3535 23.5163C19.6376 23.388 19.8801 23.1825 20.0533 22.9233L22.8917 18.6666H28.6984C25.7684 24 19.3183 28.5233 17 30.03ZM29.975 15.3333H22C21.7257 15.3333 21.4556 15.4009 21.2137 15.5303C20.9718 15.6597 20.7656 15.8468 20.6133 16.075L19.17 18.2416L16.9133 11.475C16.8146 11.1792 16.6349 10.9171 16.3947 10.7184C16.1544 10.5196 15.8632 10.3923 15.5542 10.3508C15.2452 10.3093 14.9307 10.3553 14.6466 10.4837C14.3624 10.612 14.1199 10.8174 13.9467 11.0766L11.1084 15.3333H4.02502C3.35835 12.1816 3.50502 8.41164 5.57668 5.92831C6.151 5.22081 6.87614 4.65057 7.69911 4.25927C8.52209 3.86797 9.42209 3.6655 10.3334 3.66664C15.445 3.66664 14.9117 7.16664 16.9817 7.18664H17C19.0733 7.18664 18.5483 3.66664 23.6667 3.66664C24.5785 3.665 25.4792 3.86723 26.3027 4.25855C27.1263 4.64987 27.852 5.22037 28.4267 5.92831C30.4867 8.40331 30.6467 12.1666 29.975 15.3333Z"
                                 fill="white"
                              />
                           </svg>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
       
        
      </div>
   );
};

export default Home;
