import React, { Fragment, useState } from "react";
const QetR = () => {
   return (
      <Fragment>
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-8">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                              <h4 className="text-center mb-4">
                              Ma question médicale                              </h4>
                              <form>
             
                              <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Catégorie*</strong></label>
                                    <select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      	
                                         <option value="1">Médecine générale</option>
<option value="2">Médecine dentaire</option>
<option value="3">Cardiologie</option>
<option value="4">Dermatologie</option>
<option value="5">Endocrinologie - Diabétologie</option>
<option value="6">Gynécologie</option>
<option value="7">Ophtalmologie</option>
<option value="8">O.R.L</option>
<option value="9">Orthopédie - Traumatologie</option>
<option value="10">Pédiatrie</option>
<option value="11">Psychiatrie</option>
<option value="12">Sexologie</option>
<option value="13">Médecine esthétique</option>
<option value="14">Gastro-entérologue</option>
<option value="15">Carcinologie</option>
<option value="16">Urologie</option>
<option value="0">Je ne sais pas</option>
<option value="18">Hématologie</option>
<option value="19">Neurologie</option>
<option value="20">Nutrition</option>
<option value="21">Rhumatologie</option>
<option value="22">Néphrologie</option>
<option value="23">Pédopsychiatrie</option>
<option value="24">Orthophonie</option>
<option value="25">Pneumologie</option>
<option value="26">Médecine interne</option>
<option value="27">Chirurgie Esthétique</option>
<option value="28">Angiologie</option>
<option value="29">Kinésithérapie</option>
<option value="30">Podologie</option>
<option value="31">Psychothérapie</option>
<option value="32">Orthodontie</option>
<option value="33">Gériatrie</option>
<option value="34">Addictologie</option>
<option value="35">Médecine vétérinaire</option>
                                     
                        </select>
                        </div>
            </div>
          

                  <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Question*</strong></label>
               <input
                     type="Text"
                     className="form-control"
                     placeholder="Titre de la question"
                     required
                  />
               </div>
               </div>

           
            <div className="col-lg-12 mb-3">
               <div className="form-group">
             </div>
   
 
             <textarea name="paragraph_text" type="text" class="form-control" placeholder="Tapez ici votre question. Pensez à donner le maximum d'informations afin que la réponse des médecins soit la plus pertinente possible.
" cols="20" rows="4" ></textarea>
            </div>
           
            <input type="file" id="avatar" accept="image/png, image/jpeg" class="form-control"/>
       


             

            <div className="col-lg-12 mb-3">

                                 <div className="text-center">
                                    <input
                                       type="valider"
                                       value="Valider"
                                       className="btn btn-primary btn-block"
                                    />
                                 </div></div>


                                 
                              </form>
                        </div></div>
                     </div>
                  </div>
               </div>
            </div>
      </Fragment>
   );
};

export default QetR;
