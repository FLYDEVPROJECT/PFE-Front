import React from "react";
 
const LockScreen = ({ history }) => {
   const submitHandler = (e) => {
      e.preventDefault();
      history.push("/");
   };
   return (
      <div className="row">
      <div className="col-lg-12 mb-2">
         <div className="form-group">
         <div className="col-lg-12 mb-2">
               <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2">
           <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> 
             
             
               <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2">
               <div className="form-group"></div>
           <h1></h1></div><br></br>   <div className="col-lg-8 mb-2">
               <div className="form-group"></div>
           <h1></h1></div><br></br>   <div className="col-lg-8 mb-2">
               <div className="form-group"></div>
           <h1>   <div className="col-lg-8 mb-2">
               <div className="form-group"></div>
           <h1></h1></div><br></br></h1></div><br></br>
           <br></br>
           
      <div className="authincation h-100 p-meddle">
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-8">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                           <h6 className="text-center mb-4">
                               Etape 2/4
                              </h6>
                              <h2 className="text-center mb-4">
                              Information sur le patient
                              </h2><br></br> <br></br>
                              <form
                                 action=""
                                 onSubmit={(e) => submitHandler(e)}
                              >
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
 
 
 
                              </form>
                              </div>
 
                        </div>
                     </div>
                  </div>
               </div>
               </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
 
export default LockScreen;