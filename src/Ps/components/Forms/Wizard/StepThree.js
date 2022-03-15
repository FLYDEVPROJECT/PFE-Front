
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
                               Etape 3/4
                              </h6>
                              <h2 className="text-center mb-4">
                              Informations sur l'établissement
                              </h2>
                              <form
                                 action=""
                                 onSubmit={(e) => submitHandler(e)}
                              >
                                <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"> <strong>Nom de l'établissement * *</strong></label>
                  <input
                     type="Password"
                     name="place"
                     className="form-control"
                     placeholder=""
                     required
                  />
                  </div>
               
            </div>
            <div className="col-lg-12 mb-3">
            <div className="form-group">
               <label className="text-label"><strong> Numéro de l'établissement *</strong></label>
                  <input
                     type="Password"
                     name="place"
                     className="form-control"
                     placeholder=""
                     required
                  />
                  </div>
                  </div>
              

                  <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Adresse de l'établissement *</strong></label>
               <input
                     type="Password"
                     name="place"
                     className="form-control"
                     placeholder=""
                     required
                  />
               </div>
               </div>
   
 
    
              
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Ville*</strong></label>
                                    <select
                                      className="form-control"
                                      id="inputState"
                                      defaultValue="option-1"
                                    >
                                      	
												  <option value="option-1">Ariana</option>
												  <option value="option-2">Beja </option>
												  <option value="option-3">Ben Arous</option>
												  <option value="option-4">Bizerte</option>
                                      <option value="option-5">Gabes</option>
                                      <option value="option-6">Gafsa</option>
                                      <option value="option-7">Jendouba</option>
                                      <option value="option-8">Kairouan</option>
                                      <option value="option-9">Kasserine</option>
                                      <option value="option-10">kebili</option>
                                      <option value="option-11">La Manouba</option>
                                      <option value="option-12">Kef</option>
                                      <option value="option-13">Mahdia</option>
                                      <option value="option-14">Médenine</option>
                                      <option value="option-15">Monastir</option>
                                      <option value="option-16">Nabeul</option>
                                      <option value="option-17">Sfax</option>
                                      <option value="option-18">Sidi Bouzid</option>
                                      <option value="option-19">Siliana</option>
                                      <option value="option-20">Sousse</option>
                                      <option value="option-21">Tataouine</option>
                                      <option value="option-22">Tozeur</option>
                                      <option value="option-23">Tunis</option>
                                      <option value="option-24">zaghouan</option>
                                     
                        </select>
                        </div>
            </div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Adresse E-mail de l'établissement*</strong></label></div>
   
 
            <input
                     type="email"
                     name="place"
                     className="form-control"
                     placeholder="example@gmail.com"
                     required
                  />
            </div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Site web*</strong></label></div>
   
 
            <input
                     type="email"
                     name="place"
                     className="form-control"
                     placeholder="example@gmail.com"
                     required
                  />
            </div>
           
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Heure début de journée  *</strong></label>
                  <input
                     type="number"
                     name="place"
                     className="form-control"
                     placeholder="9H"
                     required
                  />
            </div>
            </div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Heure fin de journée *</strong></label>
                  <input
                     type="number"
                     name="place"
                     className="form-control"
                     placeholder="18H"
                     required
                  />
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
