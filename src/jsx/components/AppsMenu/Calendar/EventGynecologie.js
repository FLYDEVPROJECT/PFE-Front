import React, { Fragment , useState} from "react";
import {Button, Modal} from "react-bootstrap";


const UiModal = () => {
   const [contentModal, setContentModal] = useState(false);
      return (
      <Fragment>

         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                    
                        <div class="card">
                           <div class=" d-block card-header">

                           <div class="row">
  <div class="col-8">    <div class="card-title h5">ecrivez  Nom votre médecin et votre ville </div>
                           <p class="mb-0 subtitle card-text">et recevez votre sms/mail de confirmation. C’est aussi simple que ça !</p>
                           </div>
  <div class="col-2">
  <Button
                           variant="primary"
                           className="mb-2 mr-2"
                           onClick={() => setContentModal(true)}
                        >
                           A propos
                        </Button>
                        {/* <!-- Modal --> */}
                        <Modal className="fade" show={contentModal}>
                           <Modal.Header>
                              <Modal.Title>Medecine dentaire </Modal.Title>
                              <Button
                                 variant=""
                                 className="close"
                                 onClick={() => setContentModal(false)}
                              >
                                 <span>&times;</span>
                              </Button>
                           </Modal.Header>
                           <Modal.Body>
                           <div class="row text-center justify-content-center mt-1">

                           <img
                        src="https://svgsilh.com/svg/31113-9e9e9e.svg"
                        className="img-fluid mb-3 height60"
                        alt=""
                      /></div>
                              <p><strong>
                              Qu’est-ce que la gynécologie ? </strong>
                              </p>
                              <p>
          
                            *  Gynécologue désigne un médecin spécialiste de la gynécologie, c'est-à-dire de la spécialité médico-chirurgicale traitant de la physiologie et des affections liées au système génital de la femme.

                              </p>
                              <p><strong>Quand consulter un gynécologue?</strong>
                                 
                              </p>
                              <p>
                                - un besoin de contraception (pilule, stérilet, etc) ; ;<br></br>
                                - la consultation d'un gynécologue en cas de grossesse, <br></br>
                                - lors de la ménopause ; <br></br>
                                - Problème de fertilité.<br></br>
                              </p>
                            
                            
                             
                             
                           </Modal.Body></Modal>
                           </div>
</div>
                         
                            
                           </div>
                           <div class="card-body">

                           <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <div class="input-group search-area ml-auto d-inline-flex">
                  <input type="text" class="form-control" placeholder="Nom du professionel de santé "/><div class="input-group-append"><button type="button" class="input-group-text"><i class="flaticon-381-search-2"></i></button></div></div>
               </div>
            </div>
            
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <div class="input-group search-area ml-auto d-inline-flex">
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
                                                 </select>               <div class="input-group-append">
                  </div></div>
               </div>
            </div>
            
            </div>
                        

                        
          



                            </div></div>


                      
                          
                       
                     
                     </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default UiModal;
