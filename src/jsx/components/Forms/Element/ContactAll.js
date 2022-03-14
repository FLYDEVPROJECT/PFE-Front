import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Toggle from "./Toggle";

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

const ContactAll = () => {
   return (
      <Fragment>

       
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-8">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                              Saisissez votre question                              </h4>
                              <form
                               
                              >
                                 <div className="form-group">
                                    <label>
                                       <strong>Catégorie* </strong>
                                    </label>
                                    <select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      <option value="option-1">Dermatologie</option>
                                      <option value="option-2">Pédiatrie  </option>
                                      <option value="option-3">Psychiatrie</option>
                                      <option value="option-3">Pédopsychiatrie</option>
                                      <option value="option-3">Cardiologie</option>
                                      <option value="option-3">Néphrologie</option>
                                      <option value="option-3">Neurologie</option>
                                      <option value="option-3">Pneumologie</option>
                                      <option value="option-3">Rhumatologie</option>
                                      <option value="option-3">Gastro-entérologie</option>
                                      <option value="option-3"> généraliste</option>
                                      <option value="option-3"> Ophtalmologie</option>
                                      <option value="option-3"> généraliste</option>
                                      <option value="option-3"> Gynécologie</option>
                                      <option value="option-3"> O.R.L</option>
                                      <option value="option-3"> Anesthésie</option>
                                     
                        </select>
                                 </div>
                                 <div className="form-group">
                                    <label>
                                       <strong>Question*</strong>
                                    </label>
                                    <input
                                       type="text"
                                       className="form-control"
                                       name="text "
                                       placeholder="Titre de la question"

                                    />
                                    <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="Tapez ici votre question. Pensez à donner le maximum d'informations afin que la réponse des médecins soit la plus pertinente possible."
                     cols="20" rows="3"
                     required
                  >
                 </textarea>
                 <div className="form-group">

                 <label>
                                       <strong>Masquer mon prénom</strong>
                                    </label>
               
                 <div className="col-xl-2">
             
              <Toggle />
            </div>
            </div>
            <div className="form-group">

                   
                <label className="text-label"><strong>Joindrez votre photo</strong></label>
  
     <input type="file"
            id="avatar" name="avatar"
            accept="image/png, image/jpeg"  className="form-control"/>
             </div>
            
                                 </div>
                                 <div className="text-center">
                                    <Link >
                                    <input
                                       type="submit"
                                       value="Confirmer"
                                       className="btn btn-primary btn-block"
                                    /></Link>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
      </Fragment>
   );
};

export default ContactAll;
