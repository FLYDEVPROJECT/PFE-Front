import React from "react";

const StepTwo = () => {
   return (
      <section>
         <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Code Sécurité Sociale ( CSS)*</strong></label>
                  <input
                     type="Password"
                     name="place"
                     className="form-control"
                     placeholder="*********"
                     required
                  />
                  </div>
               
            </div>
         <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Nombre d'enfants</strong></label>
                  <input
                     type="Number"
                     className="form-control"
                     id="emial1"
                     placeholder="0"
                     required
                  />
                  </div>
            </div>
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Profession / Scolarité*</strong></label>
                                    <select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      <option value="option-1">Profession</option>
                                      <option value="option-2">Education  </option>
                                      <option value="option-3">Autre</option>
                                     
                        </select>
                        </div>
            </div>
 
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Retreté(e)*</strong></label>
  <input className="text-label" type="checkbox" id="scales" name="scales"
         />
            </div>
            </div>
 
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Type d'âge *</strong></label>
                                    <select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      <option value="option-1">Enfants (entre 00 à 14 ans )</option>
                                      <option value="option-2"> Adolescents (entre 15 à 24 ans ) </option>
                                      <option value="option-3">Adultes ( entre 25 à 64 ans)</option>
                                      <option value="option-3">Aînés (entre 65 ans et plus)</option>
 
                                     
                                    </select>
            </div>
            </div>
 
 
         

      </section>
   );
};

export default StepTwo;
