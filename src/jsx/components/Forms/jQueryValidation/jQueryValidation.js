import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../../../layouts/PageTitle";
import { Formik } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
   username: Yup.string()
      .min(3, "Your username must consist of at least 3 characters ")
      .max(50, "Your username must consist of at least 3 characters ")
      .required("Please enter a username"),
   password: Yup.string()
      .min(5, "Your password must be at least 5 characters long")
      .max(50, "Your password must be at least 5 characters long")
      .required("Please provide a password"),
});

const JQueryValidation = () => {
   const [showPassword, setShowPassword] = useState(false);
   return (
      <Fragment>
       

         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-header">
                     <h4 className="card-title">Ajouter un patient</h4>
                  </div>
                  <div className="card-body">
                     <div className="form-validation">
                        <form
                           className="form-valide"
                           action="#"
                           method="post"
                           onSubmit={(e) => e.preventDefault()}
                        >
                           <div className="row">
                              <div className="col-xl-6">
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-username"
                                    >
                                      Identifiant
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-username"
                                          name="val-username"
                                          placeholder="."
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-email"
                                    >
                                      Date D'adhésion{" "}
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="text"
                                          className="form-control"
                                          id="val-email"
                                          name="val-email"
                                          placeholder=""
                                       />
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-password"
                                    >
                                       Nom Du Patient
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <input
                                          type="password"
                                          className="form-control"
                                          id="val-password"
                                          name="val-password"
                                          placeholder=""
                                       />
                                    </div>
                                 </div>
                            
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-suggestions"
                                    >
                                       Liste Des Médecins{" "}
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <textarea
                                          className="form-control"
                                          id="val-suggestions"
                                          name="val-suggestions"
                                          rows="5"
                                          placeholder=""
                                       ></textarea>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-xl-6">
                                 <div className="form-group row">
                                    <label
                                       className="col-lg-4 col-form-label"
                                       htmlFor="val-skill"
                                    >
                                   Antécedents Médicaux	
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-6">
                                       <textarea
                                          className="form-control"
                                          id="val-suggestions"
                                          name="val-suggestions"
                                          rows="5"
                                          placeholder=""
                                       ></textarea>
                                    </div>
                                 </div>
                                 <div className="form-group row">
                              
                                   
                                 </div>
                                 <div className="form-group row">
                                  
                                   
                                 </div>
                                 <div className="form-group row">
                                
                                  
                                 </div>
                                 <div className="form-group row">
                                    
                                 
                                 </div>
                                 <div className="form-group row">
                             
                                   
                                 </div>
                                 <div className="form-group row">
                                
                                 </div>
                                 <div className="form-group row">
                                    <label className="col-lg-4 col-form-label">
                                       <Link to="/orm-validation-jquery">
                                          Termes &amp; Conditions
                                       </Link>{" "}
                                       <span className="text-danger">*</span>
                                    </label>
                                    <div className="col-lg-8">
                                       <label
                                          className="css-control css-control-primary css-checkbox"
                                          htmlFor="val-terms"
                                       >
                                          <input
                                             type="checkbox"
                                             className="css-control-input mr-2"
                                             id="val-terms"
                                             name="val-terms"
                                             value="1"
                                          />
                                          <span className="css-control-indicator"></span>{" "}
                                        Enregistrer les changements
                                       </label>
                                    </div>
                                 </div>
                                 <div className="form-group row">
                                    <div className="col-lg-8 ml-auto">
                                       <button
                                          type="submit"
                                          className="btn btn-primary"
                                       >
                                          Submit
                                       </button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-lg-12">
               <div className="card">
               
                  <div className="card-body">
                     <div className="basic-form">
                      
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default JQueryValidation;
