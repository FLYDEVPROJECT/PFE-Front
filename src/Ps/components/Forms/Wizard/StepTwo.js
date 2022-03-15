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
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
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
                              Informations sur le professionel de santé
                              </h2>
                              <form
                                 action=""
                                 onSubmit={(e) => submitHandler(e)}
                              >
                                <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"> <strong>Identifiant RPPS *</strong></label>
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
               <label className="text-label"><strong> Numéro carte d'identité *</strong></label>
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
               <label className="text-label"><strong>Joindrez votre carte CIN et votre Signature</strong></label></div>
   
 
    <input type="file"
           id="avatar" name="avatar"
           accept="image/png, image/jpeg"  className="form-control"/>
            </div>
               <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Type*</strong></label>
                                    <select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      <option value="option-1">médecin</option>
                                      <option value="option-2">chirurgien  </option>
                                      <option value="option-3">Biologiste</option>
                                     
                        </select>
                        </div>
            </div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Spécialité*</strong></label>
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
            </div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Adresse E-mail professionel*</strong></label></div>
   
 
            <input
                     type="email"
                     name="place"
                     className="form-control"
                     placeholder="example@gmail.com"
                     required
                  />
            </div>

            <div className="col-lg-12 mb-3"> 
               
               <label className="text-label"><strong>Langue parlé*</strong></label></div>
              

            <div className="col-lg-12 mb-3">
               <div className="form-group">
                 
               <label className="text-label">Arabe</label>
              
  <input className="text-label" type="checkbox" id="scales" name="scales"
         />
                      <label className="text-label">Français</label>
              
              <input className="text-label" type="checkbox" id="scales" name="scales"
                     />
                                  <label className="text-label">Anglais</label>
              
              <input className="text-label" type="checkbox" id="scales" name="scales"
                     />
            </div>
            </div>
 
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">
Expérience                   </label>
                  <textarea
                     name="paragraph_text"
                     type="text"
                     name="place"
                     className="form-control"
                     cols="50" rows="10"
                     required
                  >
                 </textarea>
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
