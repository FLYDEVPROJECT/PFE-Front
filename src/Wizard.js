import React, { Component, Fragment, useState } from "react";
import swal from "sweetalert";
import axios from 'axios';
import { useHistory } from "react-router-dom";



const Wizard = () => {
   let navigate = useHistory();

   const [data, setData] = useState({
      nom: '',
      num_tel: '',
      prenom: '',
      adresse: '',
      code_postal: '',
      email: '',
      ville: '',
      date_naissance: '',
      sexe: '',
      password:'',
      statut_sociale: '',
      profession: '',
      code_securite_sociale: '',
      photo: ''
   })
   const [state, setState] = useState({
      nbpage: 1,
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
   })
   const nextstep2 = () => {
      setState((prevState) => ({
         ...prevState,
         nbpage: 2,
         checked: false,
         p1: {
            visibility: "hidden",
            display: "none"
         },
         p2P: {
            visibility: "visible",
            display: "block"
         },
         p3P: {
            visibility: "hidden",
            display: "none"
         },
      }));
      console.log(state)
      console.log(state.p1)

   }

   const nextstep1 = () => {

      setState((prevState) => ({
         ...prevState,
         nbpage: 1,
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
      }));
   }
   const nextstep3 = () => {

      setState((prevState) => ({
         ...prevState,
         nbpage: 3,
         checked: false,
         p1: {
            visibility: "hidden",
            display: "none"
         },
         p2P: {
            visibility: "hidden",
            display: "none"
         },
         p3P: {
            visibility: "visible",
            display: "block"
         },
      }));
   }

   const handle = (e) => {
      const newdata = { ...data }
      newdata[e.target.id] = e.target.value
      setData(newdata)
   }

   const registre = (e) => {
      const newdata = { ...data }
      const fd = new FormData();
      fd.append('email', newdata.email);
      fd.append('nom', newdata.nom);
      fd.append('prenom', newdata.prenom);
      fd.append('password', newdata.password);
      fd.append('adresse', newdata.adresse);
      fd.append('code_postal', newdata.code_postal);
      fd.append('num_tel', newdata.num_tel);
      fd.append('nbr_enfant', newdata.nbr_enfant);
      fd.append('date_naissance', newdata.date_naissance);
      fd.append('ville', newdata.ville);
      fd.append('sexe', newdata.sexe);
      fd.append('statut_sociale', newdata.statut_sociale);
      fd.append('code_securite_sociale', newdata.code_securite_sociale);
      fd.append('profession', newdata.profession);
      

     axios
     .post('http://127.0.0.1:8000/api/registre/patient', fd)
     .then((res) => {
      navigate.push('/');
     })
     .catch((error) => 
     console.log(error));
   }

   const steps = [
      { name: "Etat civil du professionel de santé" },
      { name: "Informations sur le professionel de santé" },
      { name: "Informations sur l'établissement" },
      { name: "Sécurité" },
   ];
   const prevStyle = {
      visibility: "none",
      display: "none",
      overflow: "hidden"
   };
   const nextStyle = {
      visibility: "none",
      display: "none",
      overflow: "hidden"
   };

   return (
      <div>
         <div style={state.p1}>
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
                                                Etape 1/3
                                             </h6>
                                             <h2 className="text-center mb-4">
                                                Etat civil
                                             </h2>
                                             <div >
                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label">
                                                         <strong>  Nom*</strong> </label></div>
                                                   <input
                                                      type="text"
                                                      name="nom"
                                                      className="form-control"
                                                      placeholder="Nom"
                                                      onChange={(e) => handle(e)}
                                                      id="nom" value={data.nom}
                                                      required
                                                   />

                                                </div>
                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong> Prénom *</strong> </label></div>
                                                   <input
                                                      type="text"
                                                      name="prenom"
                                                      className="form-control"
                                                      placeholder="Parsley"
                                                      onChange={(e) => handle(e)}
                                                      id="prenom" value={data.prenom}
                                                      required
                                                   />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Joindrez votre photo</strong></label></div>
                                                   <input
                                                      onChange={(e) => handle(e)}
                                                      id="photo" value={data.photo}
                                                      name="photo"
                                                      className="form-control"
                                                      required
                                                      type="file"
                                                      accept="image/png, image/jpeg" />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Sexe *</strong></label>
                                                      <br></br>
                                                      <input type="radio" value="Male" onChange={(e) => handle(e)}
                                                         id="sexe" /> Homme
                                                      <input type="radio" value="Female" onChange={(e) => handle(e)}
                                                         id="sexe" /> Femme
                                                   </div>
                                                </div>
                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Date de Naissance*</strong></label></div>
                                                   <input
                                                      type="date"
                                                      onChange={(e) => handle(e)}
                                                      id="date_naissance" value={data.date_naissance}
                                                      name="num_tel"
                                                      className="form-control"
                                                      required
                                                   />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Numéro de télephone</strong></label></div>

                                                   <input
                                                      type="text"
                                                      onChange={(e) => handle(e)}
                                                      id="num_tel" value={data.num_tel}
                                                      name="num_tel"
                                                      className="form-control"
                                                      placeholder="(+1)408-657-9007"
                                                      required
                                                   />
                                                </div>
                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Adresse E-mail*</strong></label></div>
                                                   <input
                                                      type="email"
                                                      className="form-control"
                                                      placeholder="example@example.com.com"
                                                      required
                                                      name="email"
                                                      onChange={(e) => handle(e)}
                                                      id="email" value={data.email}
                                                   />
                                                </div>

                                                <div className="form-group">
                                                   <div className="form-group col-md-12">
                                                      <label className="text-label"><strong>Ville*</strong></label>
                                                      <select
                                                         className="form-control"
                                                         defaultValue="Ariana"
                                                         onChange={(e) => handle(e)}
                                                         id="ville" value={data.ville}
                                                      >
                                                         <option value="Ariana">Ariana</option>
                                                         <option value="Beja">Beja </option>
                                                         <option value="Ben Arous">Ben Arous</option>
                                                         <option value="Bizerte">Bizerte</option>
                                                         <option value="Gabes">Gabes</option>
                                                         <option value="Gafsa">Gafsa</option>
                                                         <option value="Jendouba">Jendouba</option>
                                                         <option value="Kairouan">Kairouan</option>
                                                         <option value="Kasserine">Kasserine</option>
                                                         <option value="kebili">kebili</option>
                                                         <option value="La Manouba">La Manouba</option>
                                                         <option value="Kef">Kef</option>
                                                         <option value="Mahdia">Mahdia</option>
                                                         <option value="Médenine">Médenine</option>
                                                         <option value="Monastir">Monastir</option>
                                                         <option value="Nabeul">Nabeul</option>
                                                         <option value="Sfax">Sfax</option>
                                                         <option value="Sidi Bouzid">Sidi Bouzid</option>
                                                         <option value="Siliana">Siliana</option>
                                                         <option value="Sousse">Sousse</option>
                                                         <option value="Tataouine">Tataouine</option>
                                                         <option value="Tozeur">Tozeur</option>
                                                         <option value="Tunis">Tunis</option>
                                                         <option value="zaghouan">zaghouan</option>
                                                      </select>
                                                   </div>
                                                </div>
                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Adresse *</strong></label></div>
                                                   <input
                                                      type="text"
                                                      name="adresse"
                                                      required
                                                      className="form-control"
                                                      onChange={(e) => handle(e)}
                                                      id="adresse" value={data.adresse}
                                                   />
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Code Postal *</strong></label>
                                                      <input
                                                         placeholder="3000"
                                                         required
                                                         name="code_postal"
                                                         onChange={(e) => handle(e)}
                                                         id="code_postal" value={data.code_postal}
                                                         className="form-control" />
                                                   </div>
                                                </div>
                                                <div className="row justify-content-around">
                                                   <div className="col-3">
                                                      <button className="btn btn-primary btn-block" onClick={nextstep2}>suivant</button>
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
               </div>
            </div>
         </div>

         <div style={state.p2P}>
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
                                                Etape 2/3
                                             </h6>
                                             <h2 className="text-center mb-4">
                                                Information sur le patient
                                             </h2><br></br> <br></br>
                                             <div>
                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Code Sécurité Sociale ( CSS)*</strong></label>
                                                      <input
                    type="password"
                    onChange={(e) => handle(e)}
                    id="code_securite_sociale" value={data.code_securite_sociale}
                    name="code_securite_sociale"
                    className="form-control"
                    required
                  />
                                                   </div>

                                                </div>
                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Statut Sociale </strong></label>
                                                      <select
                                                         className="form-control"
                                                         defaultValue="célibataire"
                                                         onChange={(e) => handle(e)}
                                                         id="statut_sociale" value={data.statut_sociale}  >

                                                         <option value="célibataire">célibataire </option>
                                                         <option value="marié(e)">Marié(e)  </option>
                                                         <option value="veuf(ve)">veuf(ve)</option>
                                                         <option value="divorcé(e)">divorcé(e) </option>

                                                      </select>
                                                   </div>
                                                </div>
                                                <div className="col-lg-12 mb-3">
                                                   <div className="form-group">
                                                      <label className="text-label"><strong>Nombre d'enfants</strong></label>
                                                      <input
                                                         type="Number"
                                                         className="form-control"
                                                         onChange={(e) => handle(e)}
                                                         id="nbr_enfant" value={data.nbr_enfant}
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
                                                         defaultValue="profession-1"
                                                         onChange={(e) => handle(e)}
                                                         id="profession"
                                                          value={data.profession}
                                                      >
                                                         <option value="profession-1">Profession</option>
                                                         <option value="option-2">Education  </option>
                                                         <option value="option-3">Autre</option>
                                                      </select>
                                                   </div>
                                                </div>
                                                
                                                <div className="row justify-content-around">
                                                   <div className="col-3">
                                                      <button className="btn btn-primary btn-block" onClick={nextstep1}>précédent
                                                      </button>
                                                   </div>
                                                   <div className="col-3">
                                                      <button className="btn btn-primary btn-block" onClick={nextstep3}>suivant</button>
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
               </div>
            </div>
         </div>

         <div style={state.p3P}>
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
                                                   Etape 3/3
                                                </h6>
                                                <h2 className="text-center mb-4">
                                                   Se connecter
                                                </h2><br></br> <br></br>
                                                <div>
                                                   <div className="col-lg-12 mb-3">
                                                      <div className="form-group">
                                                         <label className="text-label">
                                                            <strong >Mot de passe</strong>
                                                         </label>
                                                         <input
                                                            type="password"
                                                            className="form-control"
                                                            onChange={(e) => handle(e)}
                                                            id="password" value={data.password}
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
                                                         />
                                                      </div>
                                                   </div>
                                                   <div className="row justify-content-end">
                                                      <div className="col-3">
                                                         <button className="btn btn-primary btn-block" onClick={nextstep2}>précédent
                                                         </button>
                                                      </div>
                                                      <div className="col-3">
                                                         <button
                                                            onClick={registre}
                                                            className="btn btn-primary btn-block"                         >
                                                            Valider
                                                         </button>
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
                  </div>
               </div>
            </section>
         </div>

      </div>

   );
};
export default Wizard;
