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
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"><div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
           <h1></h1></div><br></br>    <div className="col-lg-8 mb-2"> <div className="form-group"></div>
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
                               Etape 1/4
                              </h6>
                              <h2 className="text-center mb-4">
                                 Etat civil d'un patient
                              </h2> <br></br> <br></br>
                              <form
                                 action=""
                                 onSubmit={(e) => submitHandler(e)}
                              >
                                <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"> <strong>    Nom du patient*</strong></label></div>
                  <input
                     type="text"
                     name="firstName"
                     className="form-control"
                     placeholder="Nom"
                     required
                  />
               
            </div>
         <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Prénom du patient*</strong></label></div>
                  <input
                     type="text"
                     name="firstName"
                     className="form-control"
                     placeholder="Prénom "
                     required
                  />    
            </div>
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Joindrez votre photo</strong></label></div>
   
 
    <input type="file"
           id="avatar" name="avatar"
           accept="image/png, image/jpeg"  className="form-control"/>
            </div>
 
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Sexe *</strong></label>
<br></br>  
        <input type="radio" value="Male" name="gender" />     Male
        <input type="radio" value="Female" name="gender"  /> Female  
            </div>
            </div>
 
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Date de Naissance*</strong></label></div>
               <input
                     type="Date"
                     className="form-control"
                     id="inputGroupPrepend2"
                     aria-describedby="inputGroupPrepend2"
               
                     required
                  />  
            </div>
 
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Numéro de télephone</strong></label></div>
   
 
    <input
                     type="text"
                     name="phoneNumber"
                     className="form-control"
                     placeholder="(+216)"
                     required
                  />
            </div>
 
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Adresse E-mail*</strong></label></div>
   
 
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
               <label className="text-label"><strong>Ville *</strong></label></div>
   
 
    <input
                     type="Text"
                     name="place"
                     className="form-control"
                     required
                  />
            </div>
 
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Adresse *</strong></label></div>
   
 
    <input
                     type="Text"
                     name="place"
                     className="form-control"
                     required
                  />
            </div>
 
            <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label"><strong>Code Postal *</strong></label>
                  <input
                     type="number"
                     name="place"
                     className="form-control"
                     placeholder="3000"
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