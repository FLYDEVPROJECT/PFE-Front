import React, { Component ,Fragment , useState} from "react";
import swal from "sweetalert";
import Multistep from "react-multistep";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Formik} from 'formik';
import * as Yup from 'yup';
import './validation.css';

class Wizard extends Component {
  constructor() {
    super();
  
    this.state = {
      nbpage : 1,
      checked: false,
      p1: {
        visibility: "visible",
        display: "block"
      },
      p2P: {
        visibility: "hidden",
        display: "none"
      },
      p3P: {
        visibility: "hidden",
        display: "none"
      },
      p4P: {
        visibility: "hidden",
        display: "none"
      },
      p2M: {
        visibility: "hidden",
        display: "none"
      },
      p3M: {
        visibility: "hidden",
        display: "none"
      },
      p4M: {
        visibility: "hidden",
        display: "none"
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  nextp2 = () => {
    if (this.state.checked == false) { // false mean patient
      //treat your object patient state 
      this.setState({ p1: { visibility: "hidden", display: "none" } })
      this.setState({ p2M: { visibility: "hidden", display: "none" } })
      this.setState({ p3P: { visibility: "hidden", display: "none" } })
      this.setState({ p4P: { visibility: "hidden", display: "none" } })
      this.setState({ p3M: { visibility: "hidden", display: "none" } })
      this.setState({ p4M: { visibility: "hidden", display: "none" } })
      this.setState({ p2P: { visibility: "visible", display: "block" } })
    } 
    this.setState({nbpage:2})
 
  }
  nextp1 = () => {
   if (this.state.checked == false) { // false mean patient
     //treat your object patient state 
     this.setState({ p1: { visibility: "visible", display: "block" } })
     this.setState({ p2M: { visibility: "hidden", display: "none" } })
     this.setState({ p3P: { visibility: "hidden", display: "none" } })
     this.setState({ p4P: { visibility: "hidden", display: "none" } })
     this.setState({ p3M: { visibility: "hidden", display: "none" } })
     this.setState({ p4M: { visibility: "hidden", display: "none" } })
     this.setState({ p2P: { visibility: "hidden", display: "none" } })
   } 
   this.setState({nbpage:1})

 }
  nextp3 = () => {
    if (this.state.checked == false) {
      //treat your object patient state

      this.setState({ p1: { visibility: "hidden", display: "none" } })
      this.setState({ p2M: { visibility: "hidden", display: "none" } })
      this.setState({ p2P: { visibility: "hidden", display: "none" } })
      this.setState({ p4P: { visibility: "hidden", display: "none" } })
      this.setState({ p3M: { visibility: "hidden", display: "none" } })
      this.setState({ p4M: { visibility: "hidden", display: "none" } })
      this.setState({ p3P: { visibility: "visible", display: "block" } })
    } 
    this.setState({nbpage:3})
 

   
  }
  nextp4 = () => {
    if (this.state.checked == false) {
      //treat your object patient state

      this.setState({ p1: { visibility: "hidden", display: "none" } })
      this.setState({ p2M: { visibility: "hidden", display: "none" } })
      this.setState({ p2P: { visibility: "hidden", display: "none" } })
      this.setState({ p3P: { visibility: "hidden", display: "none" } })
      this.setState({ p3M: { visibility: "hidden", display: "none" } })
      this.setState({ p4M: { visibility: "hidden", display: "none" } })
      this.setState({ p4P: { visibility: "visible", display: "block" } })
    }
    this.setState({nbpage:4})
 

   
  }
 
  finish = () => {
    if (this.state.checked == false) {
      //treat your object patient state
      console.log('signin as patient')

    }

  }
  finish = () => {
  }

  render() {
    const steps = [
        { name: "Etat civil du professionel de santé"  },
        { name: "Informations sur le professionel de santé" },
        { name: "Informations sur l'établissement" },
        { name: "Sécurité" },
     ];
     const prevStyle = {
       visibility:"none",
       display:"none",
       overflow:"hidden"
     };
     const nextStyle = {
        visibility:"none",
        display:"none",
        overflow:"hidden"
     };
  console.log(this.state.nbpage)
    return (
      <>
      
     
        
   
                         <Fragment>
     

     <div className="row text-center" >
        <div className="col-xl-12 col-xxl-12">
             
                 <form onSubmit={(e) => e.preventDefault()}
                     
  id="step-form-horizontal"
  className="step-form-vertical"

                 >
                   <Multistep
                       showNavigation={true}
                       steps={steps}
                       activeStep={this.state.nbpage+1}
                       prevStyle={prevStyle}
                       nextStyle={nextStyle}
                    />
                 </form>
        </div>
     </div>
  </Fragment>
        <div style={this.state.p1}>
         
  
 
       <div className="row">
      
       
       <div className="col-lg-12 mb-2">
          <div className="form-group">   
       <div className="authincation h-100 p-meddle">
          <div className="container h-100">
             <div className="row justify-content-center h-100 align-items-center">
                <div className="col-md-8">
                   <div className="authincation-content">
                      <div className="row no-gutters">
                         <div className="col-xl-12">
                            <div className="auth-form">
                            
                               <h2 className="text-center mb-4">
                                  Etat civil 
                               </h2>
                               <form
                                  action=""
                               >
                                 <div className="col-lg-12 mb-3">
                <div className="form-group">
                <label className="text-label">  <strong>  Nom*</strong> </label></div>
                   <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Parsley"
                      required
                   />
                
             </div>
          <div className="col-lg-12 mb-3">
                <div className="form-group">
                <label className="text-label"><strong> Prénom *</strong> </label></div>
                   <input
                      type="text"
                      name="firstName"
                      className="form-control"
                      placeholder="Parsley"
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
         <input type="radio" value="Male" name="gender" /> Homme         
         <input type="radio" value="Female" name="gender" /> Femme  
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
  
                <div className="form-group">
                <div className="form-group col-md-12">
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
             <div class="row justify-content-around">
   
    <div class="col-3">
    <button className="btn btn-primary btn-block"  onClick={this.nextp2}>suivant</button>   
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
    
 
  

           
          
        </div>

        <div style={this.state.p2P}>
        <div className="row">
      <div className="col-lg-12 mb-2">
         <div className="form-group">
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
 
 
            <div class="row justify-content-around">
    <div class="col-3">
    <button className="btn btn-primary btn-block"  onClick={this.nextp1}>précédent
    </button>  

</div>
    <div class="col-3">
    <button className="btn btn-primary btn-block"  onClick={this.nextp3}>suivant</button>  
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
        </div>

        <div style={this.state.p3P}>
        <div className="row">
      <div className="col-lg-12 mb-2">
         <div className="form-group">
         <div className="col-lg-12 mb-2">
               <div className="form-group"></div>
           <h1></h1></div><br></br> 
           
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
                              Antécédents
                              </h2><br></br> <br></br>
                              <form
                                 action=""
                                
                              >
                                <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label">  <strong>  Avez-vous des problèmes cardiaques </strong> </label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <input type="radio" value="Male" name="gender" /> OUI
        <input type="radio" value="Female" name="gender"  /> NON
               </div>
            </div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> 
                  <strong> Avez-vous déjà fumé du tabac de quelque sorte?
Veuillez indiquer quel produit</strong></label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <input type="radio" value="Male" name="gender" /> OUI
        <input type="radio" value="Female" name="gender"  /> NON
               </div>
            </div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Avez-vous d’autres problèmes respiratoires? </strong> </label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <input type="radio" value="Male" name="gender" /> OUI
        <input type="radio" value="Female" name="gender"  /> NON
               </div>
            </div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Avez-vous déjà eu une maladie ou un trouble lié au sang? </strong></label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <input type="radio" value="Male" name="gender" /> OUI
        <input type="radio" value="Female" name="gender"  /> NON
               </div>
            </div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Avez-vous déjà eu des problèmes importants de mémoire ou de démence? </strong> </label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <input type="radio" value="Male" name="gender" /> OUI
        <input type="radio" value="Female" name="gender"  /> NON
               </div>
            </div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong> Est-ce que vous ou un membre de votre famille (lié à vous par le sang)
avez eu des problèmes graves autres que des nausées et vomissements
après avoir reçu une anesthésie générale </strong> </label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <input type="radio" value="Male" name="gender" /> OUI
        <input type="radio" value="Female" name="gender"  /> NON
               </div>
            </div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez"
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> <strong>Avez-vous été admis(e) à l’hôpital dans le passé? </strong></label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <input type="radio" value="Male" name="gender" /> OUI
        <input type="radio" value="Female" name="gender"  /> NON
               </div>
            </div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                  cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"> 
                  <strong> Etes vous concerné par des problèmes de santé mentale (ex.
, crises d’angoisse, phobie des aiguilles)?</strong></label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <input type="radio" value="Male" name="gender" /> OUI
        <input type="radio" value="Female" name="gender"  /> NON
               </div>
            </div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez ( Quand? Où? Pourquoi?)"                     
                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
                 <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label"><strong> Y’a-t-il des problèmes d’allergie dans l’anamnèse personnelle ?</strong></label>
               
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <input type="radio" value="Male" name="gender" /> OUI
        <input type="radio" value="Female" name="gender"  /> NON
               </div>
            </div></div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
               <textarea
                     name="paragraph_text"
                     type="text"
                     className="form-control"
                     placeholder="présisez ( Quand? Où? Pourquoi?)"                     cols="20" rows="2"
                     required
                  >
                 </textarea>
                 </div>
                 </div>
 
 
 
 
                 
                 <div class="row justify-content-around">
    <div class="col-3">
    <button className="btn btn-primary btn-block"  onClick={this.nextp2}>précédent</button>  


</div>
    <div class="col-3">
    <button className="btn btn-primary btn-block"  onClick={this.nextp4}>suivant</button>  
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
        </div>

        <div style={this.state.p4P}>
        <section>
        <div className="row">
      <div className="col-lg-12 mb-2">
         <div className="form-group"> 
      <div className="authincation h-100 p-meddle">
         <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
               <div className="col-md-8">
                  <div className="authincation-content">
                     <div className="row no-gutters">
                        <div className="col-xl-12">
                           <div className="auth-form">
                           <h6 className="text-center mb-4">
                               Etape 4/4
                              </h6>
                              <h2 className="text-center mb-4">
                               Se connecter
                              </h2><br></br> <br></br>
                              <form
                               
                              >
                                <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label">
                                       <strong >Mot de passe</strong>
                                    </label>
                  <input
                     type="password"
                     className="form-control"
                     defaultValue="Password"
                     name="password"
                  />
               </div>
            </div>
         <div className="col-lg-12 mb-3">
               <div className="form-group">
               <label className="text-label">
                                       <strong >Confirmez le Mot de passe</strong>
                                    </label>
                  <input
                     type="password"
                     className="form-control"
                     defaultValue="Password"
                     name="password"
                  />
               </div>
            </div>
                              
                                


          
  <div class="row justify-content-end">
    <div class="col-4">
    <div className="sweetalert mt-5">
    <button
                              onClick={() =>
                                 swal(
                                    "Attention ",
                                    "Votre demande a bien été enregistrée",
                                    "success"
                                 )
                              }
                            
                              className="btn btn-primary btn-block"                         >
                            Valider
                         </button>
                         
   </div>
                        
    </div>
    <div class="col-4">
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
      </section>
        </div>
      
      

    
      </>

    );
  }

}
export default Wizard;
