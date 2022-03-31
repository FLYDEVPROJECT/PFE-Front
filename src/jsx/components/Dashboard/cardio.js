import React from "react";
import { Link } from "react-router-dom";

//Image
import doctors6 from "../../../images/doctors/6.jpg";
import doctors7 from "../../../images/doctors/7.jpg";
import doctors17 from "../../../images/doctors/17.jpg";
import doctors18 from "../../../images/doctors/18.jpg";
import doctors19 from "../../../images/doctors/19.jpg";
import doctors20 from "../../../images/doctors/20.jpg";

// Import Bootstrap
import { Dropdown, Nav, Tab } from "react-bootstrap";

const PageReview = () => {
   return (
     
      <div className="h-70 ml-0">
         <div className="page-titles">
         <p>La cardiologie, comme l'indique son nom, est la spécialité médicale qui s'intéresse des problèmes du cœur et des vaisseaux. Elle couvre ainsi certains organes du système cardiovasculaire. Le cardilogue traite l'adulte et l'enfant. Il prend en charge le diagnostic et le traitement des pathologies cardiaques, des troubles du rythme cardiaque, des maladies coronariennes, des pathologies veineuses et vasculaires, de l'insuffisance cardiaque, des cardiopathies valvulaires.</p>
         </div>
         <div className="form-head d-flex mb-3 mb-md-4 align-items-start">
   
            <div className="input-group search-area ml-auto d-inline-flex">
               <input
                  type="text"
                  className="form-control"
                  placeholder="Chercher ici"
               />
               <div className="input-group-append">
                  <button type="button" className="input-group-text">
                     <i className="flaticon-381-search-2" />
                  </button>
               </div>
            </div>
            <Dropdown className="dropdown ml-2 d-inline-block">
               
              
            </Dropdown>
         </div>
         <div className="row">
            <div className="col-xl-12">
               <Tab.Container defaultActiveKey="navpills-1">
                  <Nav as="ul" className="nav nav-pills review-tab">
                     <Nav.Item as="li" className="nav-item">
                        <Nav.Link
                           eventKey="navpills-1"
                           className="nav-link "
                           data-toggle="tab"
                           aria-expanded="false"
                        >
                          Tous les Médecins 
                        </Nav.Link>
                     </Nav.Item>
                     <Nav.Item as="li" className="nav-item">
                
                     </Nav.Item>
                     <Nav.Item as="li" className="nav-item">
                    
                     </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content">
                     <Tab.Pane eventKey="navpills-1" className="tab-pane ">
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox mr-lg-4 mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox checkbox-info">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox1"
                                       required
                                    />
                                
                                 </div>
                              </div>
                              <img
                                 className="mr-3 img-fluid rounded"
                                 width={90}
                                 src={"https://albumimag.files.wordpress.com/2021/08/lexique-medecin-2.jpg?w=500&zoom=2"}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-6 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/cardio"
                                       >
                                      Dr Mondher CHEOUR
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                     
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 mr-3" />
                                       cardiologue
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-6 text-dark mb-lg-0 mb-2">
                                 Numéro de télephone :+21698745367
                                 </div>
                              </div>
                              <div className="media-footer d-sm-flex d-block align-items-center">
                                 <div className="disease mr-5">
                                 
                                 </div>
                                 <div className="edit ml-auto">
                               
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox mr-lg-4 mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox checkbox-info">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox1"
                                       required
                                    />
                                 
                                 </div>
                              </div>
                              <img
                                 className="mr-3 img-fluid rounded"
                                 width={90}
                                 src={"https://f.hellowork.com/obs-static-images/seo/ObsJob/medecin-generaliste.jpg"}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-6 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/cardio"
                                       >
                                       Dr Rachid Boujnah
                                       </Link>
                                    </h3>
                                    <span className="fs-15 d-block">
                                     
                                    </span>
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 mr-3" />
                                       cardiologue
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-6 text-dark mb-lg-0 mb-2">
                                 Numéro de télephone :+216897425
                                 </div>
                              </div>
                              <div className="media-footer d-sm-flex d-block align-items-center">
                                 <div className="disease mr-5">
                             
                                 </div>
                                 <div className="edit ml-auto">
                               
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox mr-lg-4 mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox checkbox-info">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox3"
                                       required
                                    />
                                   
                                 </div>
                              </div>
                              <img
                                 className="mr-3 img-fluid rounded"
                                 width={90}
                                 src={"https://img.freepik.com/vecteurs-libre/contexte-du-docteur_1270-84.jpg?w=740"}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-6 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/cardio"
                                       >
                                    Dr syrine abid

                                       </Link>
                                    </h3>
                                    
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 mr-3" />
                                       cardiologue

                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-6 text-dark mb-lg-0 mb-2">
                                 Numéro de télephone :+21658632149
                                 </div>
                              
                              </div>
                              <div className="media-footer d-sm-flex d-block align-items-center">
                                 <div className="disease mr-5">
                                  
                                 </div>
                           
                              </div>
                           </div>
                        </div>
                       
                        
                        
                     </Tab.Pane>
                     <Tab.Pane eventKey="navpills-2" className="tab-pane">
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox mr-lg-4 ml-0 align-self-center">
                                 <div className="custom-control custom-checkbox checkbox-info">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox6"
                                       required
                                    />
                                
                                 </div>
                              </div>
                              <img
                                 className="mr-3 img-fluid rounded"
                                 width={90}
                                 src={doctors18}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-6 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/cardio"
                                       >
                                          Glee Smiley
                                       </Link>
                                    </h3>
                                    
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 mr-3" />
                                       Diabetes
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-6 text-dark mb-lg-0 mb-2">
                                    When I came with my mother, I was very
                                    nervous. But after entering here I felt
                                    warmed with smiling
                                 </div>
                              </div>
                              <div className="media-footer d-sm-flex d-block align-items-center">
                                 <div className="disease mr-5">
                                    <span className="star-review ml-lg-3 mb-sm-0 mb-2 ml-0 d-inline-block">
                                      <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                    </span>
                                 </div>
                                 <div className="edit ml-auto">
                                    <Link
                                       to="/cardio"
                                       className="text-primary font-w600 mr-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/cardio"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox mr-lg-4 ml-0 align-self-center">
                                 <div className="custom-control custom-checkbox checkbox-info">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox7"
                                       required
                                    />
                                  
                                 </div>
                              </div>
                              <img
                                 className="mr-3 img-fluid rounded"
                                 width={90}
                                 src={doctors17}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-6 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/cardio"
                                       >
                                          Dentiste
                                       </Link>
                                    </h3>
                                  
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 mr-3" />
                                       Allergies &amp; Atshma
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-6 text-dark mb-lg-0 mb-2">
                                    Thanks for all the services, no doubt it is
                                    the best hospital. My kidney, BP, diabetes
                                    problem
                                 </div>
                              </div>
                              <div className="media-footer d-sm-flex d-block align-items-center">
                                 <div className="disease mr-5">
                                    <span className="star-review ml-lg-3 mb-sm-0 mb-2 ml-0 d-inline-block">
                                     <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                    </span>
                                 </div>
                                 <div className="edit ml-auto">
                                    <Link
                                       to="/cardio"
                                       className="text-primary font-w600 mr-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/cardio"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                        <div className="card review-table">
                           <div className="media align-items-center">
                              <div className="checkbox mr-lg-4 mr-0 align-self-center">
                                 <div className="custom-control custom-checkbox checkbox-info">
                                    <input
                                       type="checkbox"
                                       className="custom-control-input"
                                       id="customCheckBox9"
                                       required
                                    />
                                
                                 </div>
                              </div>
                              <img
                                 className="mr-3 img-fluid rounded"
                                 width={90}
                                 src={doctors18}
                                 alt="DexignZone"
                              />
                              <div className="media-body d-lg-flex d-block row align-items-center">
                                 <div className="col-xl-4 col-xxl-5 col-lg-6 review-bx">
                                    <h3 className="fs-20 font-w600 mb-1">
                                       <Link
                                          className="text-black"
                                          to="/cardio"
                                       >
                                        aaaaaaaaaaaaaaa
                                       </Link>
                                    </h3>
                                   
                                    <span className="text-primary d-block font-w600 mt-sm-2 mt-3">
                                       <i className="las la-stethoscope scale5 mr-3" />
                                     Dentiste
                                    </span>
                                 </div>
                                 <div className="col-xl-7 col-xxl-7 col-lg-6 text-dark mb-lg-0 mb-2">
                                    Hospital &amp; staff were extremely warm
                                    &amp; quick in getting me start with the
                                    procedures
                                 </div>
                              </div>
                              <div className="media-footer d-sm-flex d-block align-items-center">
                                 <div className="disease mr-5">
                                    <span className="star-review ml-lg-3 mb-sm-0 mb-2 ml-0 d-inline-block">
                                      <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                       <i className="fa fa-star mr-1 text-orange" />
                                    </span>
                                 </div>
                                 <div className="edit ml-auto">
                                    <Link
                                       to="/cardio"
                                       className="text-primary font-w600 mr-4"
                                    >
                                       PUBLISH
                                    </Link>
                                    <Link
                                       to="/cardio"
                                       className="text-danger font-w600"
                                    >
                                       DELETE
                                    </Link>
                                 </div>
                              </div>
                           </div>
                        </div>
                        
                     </Tab.Pane>
                  </Tab.Content>
               </Tab.Container>
            </div>
         </div>
      </div>
   );
};

export default PageReview;
