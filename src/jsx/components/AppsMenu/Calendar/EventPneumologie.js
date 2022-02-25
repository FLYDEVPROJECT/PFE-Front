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
  <div class="col-8">    <div class="card-title h5">Ecrivez le nom de votre médecin et votre ville </div>
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
                              <Modal.Title>La pneumologie</Modal.Title>
                              <Button
                                 variant=""
                                 className="close"
                                 onClick={() => setContentModal(false)}
                              >
                                 <span>&times;</span>
                              </Button>
                           </Modal.Header>
                           <Modal.Body>
                           <div class="row text-center justify-content-center mt-5">

                           <img
                        src="https://svgsilh.com/svg/297492.svg"
                        className="img-fluid mb-3 height60"
                        alt=""
                      /></div>
                              <p><strong>
                              Qu’est-ce que la pneumologie ? </strong>
                              </p>
                              <p>
          
                              La pneumologie désigne la spécialité s’intéressant au fonctionnement de l’appareil respiratoire - poumons, bronches, plèvre et trachée – ainsi qu’à ses maladies :

- L’apnée du sommeil,<br></br>
- broncho-pneumopathie chronique obstructive ou BPCO,<br></br>
- L’asthme, et les allergies respiratoires<br></br>
- Les infections respiratoires (pleurésie, broncho-pneumonie, tuberculose, légionellose…),<br></br>
- Les altérations dues à l’inhalation prolongée d’un même type de poussières (pneumoconiose),<br></br>
- Les tumeurs broncho-pulmonaires,<br></br>
- L’insuffisance respiratoire,<br></br>
                              </p>
                              <p><strong>Quand consulter un pneumologue ?</strong>
                                 
                              </p>
                              <p>
                                - Une toux persistante<br></br>
                                - Une sécrétion anormale de mucus bronchique <br></br>
                                - Des essoufflements accentués par l’effort (dyspnée) <br></br>
                                - Une douleur thoracique<br></br>
                                - Des troubles du sommeil ou encore des traces de sang<br></br>
                              </p>
                            
                            
                             
                             
                           </Modal.Body></Modal>
                           </div>
</div>
                         
                            
                           </div>
                           <div class="card-body">

                           <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
               <div class="input-group search-area ml-auto d-inline-flex"><input type="text" class="form-control" placeholder="Nom du professionel de santé "/><div class="input-group-append"><button type="button" class="input-group-text"><i class="flaticon-381-search-2"></i></button></div></div>
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
