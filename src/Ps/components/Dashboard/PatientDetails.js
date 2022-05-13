import React, { useState} from 'react';
import { Link } from "react-router-dom";
import user from './../../../images/task/user.jpg';
//Images
import avater from "../../../images/avatar/1.jpg";
import avater02 from "../../../images/avatar/2.jpg";
import mapSvg from "../../../images/svg/map.svg";

import { Dropdown } from "react-bootstrap";

import DoughnutChart from "../charts/Chartjs/donught";

const PatientDetails = () => {
   const [file, setFile] = React.useState(null)
   const fileHandler = (e) => {
       setFile(e.target.files[0]);
     setTimeout(function(){
        var src = document.getElementById("saveImageFile").getAttribute("src");
        addFormData.image = src; 
     }, 200);
   }
   const [addFormData, setAddFormData ] = useState({
      Cust_Id:'',
      Date_Join:'',
      Cust_Name:'',
      Location:'',
    image:'',
  }); 
   return (
      <>
         <div className="page-titles">
            
         </div>
         <div className="d-md-flex d-block mb-3 align-items-center">
            <div className="widget-timeline-icon py-3 py-md-2 px-1 overflow-auto">
               <ul className="timeline">
                  <li>
                     <div className="icon bg-warning" />
                     <Link
                        className="timeline-panel text-muted"
                        to="/ajout-patient"
                     >
                        <h4 className="mb-8 mt-0 text-warning fs-45 font-w1800">
                           Saisie des données
                        </h4>
                        <p className="fs-14 mb-0 "></p>
                     </Link>
                  </li>
                  <li className="border-info">
                     <div className="icon bg-info" />
                     <Link
                        className="timeline-panel text-muted"
                        to="/ajout-patient"
                     >
                         <h4 className="mb-2 mt-0 text-warning fs-16 font-w600">
                         
                        </h4>
                        <p className="fs-14 mb-0 "></p>
                     </Link>
                  </li>
                  <li>
                     <div className="icon bg-primary" />
                     <Link
                        className="timeline-panel text-muted"
                        to="/ajout-patient"
                     >
                        <h4 className="mb-2 text-primary mt-0 fs-16 font-w600">
                        Vérification
                        </h4>
                        <p className="fs-14 mb-0 "></p>
                     </Link>
                  </li>
               </ul>
            </div>
            <Dropdown className="dropdown d-inline-block ml-auto mr-2">
            <div className="image-placeholder">	
											
                  <i className="las la-check-circle scale5 mr-3" />
                  
              </div>
       
            </Dropdown>
           
         </div>
         <div className="row">
            <div className="col-xl-6 col-xxl-8">
               <div className="card">
                  <div className="card-body">
                     <div className="media d-sm-flex d-block text-center text-sm-left pb-4 mb-4 border-bottom">
                     <div className="avatar-preview">
													<div id="imagePreview">
														<img id="saveImageFile" src={file? URL.createObjectURL(file) : user} 
															alt={file? file.name : null}
                                           
														/>
                                          
													</div>
                                       </div>
                                       <br></br><br></br><br></br>
                        <div className="media-body align-items-center">
                           <div className="d-sm-flex d-block justify-content-between my-3 my-sm-0">
                              <div>
                                 <h3 className="fs-22 text-black font-w600 mb-0">
                                 <div class="form-group">
                                 <span className="d-block text-light mb-2">
                                 Identifiant du Patient
                                 </span>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
        </div>
                                 </h3>
                            
                              </div>
                            
                           </div>
                         
                        </div>
                     </div>
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
                                    Address
                                 </span>
                                 <p className="fs-18 text-dark">
                                
        
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                                    <strong></strong>
                                 </p>
                              </div>
                           </div>
                        </div>
                        <div className="col-lg-6">
                           <div className="map-bx mb-3">
                              <img src={mapSvg} alt="" />

                              <Link
                                 to="/ajout-patient"
                                 className="map-button"
                              >
                                 
                              </Link>
                              <Link className="map-marker" to="#">
                                 <i className="las la-map-marker-alt" />
                              </Link>
                           </div>
                        </div>
                        <div className="col-lg-6 mb-md-0 mb-3">
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
                                    Numéro de
                                 </span>
                                 <p className="fs-18 text-dark font-w600 mb-0">
                                   
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="+216"/>
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
                                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-3 col-xxl-4 col-md-6">
               <div className="card">
                  <div className="card-header border-0 pb-0">
                     <h4 className="fs-20 font-w600">Antécédents médicaux</h4>
                  </div>
                  <div className="card-body">
                     <div className="widget-timeline-icon2">
                        <ul className="timeline">
                           <li>
                              <div className="icon bg-primary">
                                 <i className="las la-stethoscope" />
                              </div>
                              <Link
                                 className="timeline-panel text-muted"
                                 to="/ajout-patient"
                              >
                                 <h4 className="mb-2 mt-1"></h4>
                                 <p className="fs-15 mb-0 ">
                                 <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10"/>
                                 </p>
                              </Link>
                           </li>
                           <li>
                              <div className="icon bg-primary">
                                 <i className="las la-stethoscope" />
                              </div>
                              <Link
                                 className="timeline-panel text-muted"
                                 to="/ajout-patient"
                              >
                                 <h4 className="mb-2 mt-1"></h4>
                                 <p className="fs-15 mb-0 ">
                                 <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10"/>
                                 </p>
                              </Link>
                           </li>
                           <li>
                              <div className="icon bg-primary">
                                 <i className="las la-stethoscope" />
                              </div>
                              <Link
                                 className="timeline-panel text-muted"
                                 to="/ajout-patient"
                              >
                                 <h4 className="mb-2 mt-1"></h4>
                                 <p className="fs-15 mb-0 ">
                                 <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10"/>
                                 </p>
                              </Link>
                           </li>
                           <li>
                              <div className="icon bg-primary las">
                                 <i className="las la-stethoscope" />
                              </div>
                              <Link
                                 className="timeline-panel text-muted"
                                 to="/ajout-patient"
                              >
                                 <h4 className="mb-2 mt-1"></h4>
                                 <p className="fs-15 mb-0 ">
                                 <input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10"/>
                                 </p>
                              </Link>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
           
            <div className="col-xl-6 col-xxl-6">
               <div className="card">
                
                  <div className="card-body">
                     <div className="media d-sm-flex text-sm-left d-block text-center">
                       **
                       
                        
                        
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-xl-6 col-xxl-6">
               <div className="card patient-detail">
                  <div className="card-header border-0 pb-0">
                     <h4 className="fs-20 font-w600 text-white">
                        Note pour un Patient
                     </h4>
                     <Link to="/patient-details">
                        <svg
                           width={24}
                           height={24}
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <g clipPath="url(#clip1)">
                              <path
                                 d="M22.4455 1.55474C20.3795 -0.516293 17.0199 -0.516293 14.9539 1.55474L1.21862 15.2849C1.11124 15.3923 1.04476 15.5304 1.0243 15.6787L0.00668299 23.2162C-0.023999 23.431 0.052706 23.6458 0.201002 23.7941C0.328844 23.9219 0.507822 23.9986 0.686801 23.9986C0.717483 23.9986 0.748165 23.9986 0.778847 23.9935L5.31978 23.3798C5.6982 23.3287 5.96411 22.981 5.91297 22.6026C5.86183 22.2242 5.5141 21.9583 5.13569 22.0094L1.49476 22.5003L2.20556 17.2435L7.73855 22.7764C7.86639 22.9043 8.04537 22.981 8.22435 22.981C8.40333 22.981 8.5823 22.9094 8.71015 22.7764L22.4455 9.04625C23.4477 8.04398 24 6.71442 24 5.29794C24 3.88146 23.4477 2.5519 22.4455 1.55474ZM15.2198 3.24225L17.5261 5.54851L4.99251 18.0821L2.68624 15.7758L15.2198 3.24225ZM8.22946 21.3139L5.97433 19.0588L18.5079 6.52522L20.7631 8.78034L8.22946 21.3139ZM21.7244 7.79341L16.2068 2.27577C16.9074 1.69792 17.7818 1.38088 18.7023 1.38088C19.7506 1.38088 20.7324 1.78997 21.4739 2.52634C22.2153 3.2627 22.6193 4.24964 22.6193 5.29794C22.6193 6.22351 22.3023 7.09284 21.7244 7.79341Z"
                                 fill="white"
                              />
                           </g>
                           <defs>
                              <clipPath id="clip1">
                                 <rect width={24} height={24} fill="white" />
                              </clipPath>
                           </defs>
                        </svg>
                     </Link>
                  </div>
                  <div className="card-body fs-14 font-w300">
                  <textarea id="story" name="story"
          rows="5" cols="33">
...
</textarea>

                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PatientDetails;
