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
  <div class="col-8">    <div class="card-title h5">ecrivez le Nom de votre médecin et votre ville </div>
                           <p class="mb-0 subtitle card-text">et recevez votre sms/mail de confirmation. C’est aussi simple que ça !</p>
                           </div>
  <div class="col-2">
     <div  className="pull-right">
  <Button
                           variant="primary"
                           className="mb-2 mr-2" 
                           onClick={() => setContentModal(true)}
                        >
                           A propos
                        </Button></div>
                        {/* <!-- Modal --> */}
                        <Modal className="fade" show={contentModal}>
                           <Modal.Header>
                              <Modal.Title>Cardiologie</Modal.Title>
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
                        src="https://svgsilh.com/svg/497674.svg"
                        className="img-fluid mb-3 height60"
                        alt=""
                      /></div>
                              <p><strong>
                              Qu’est-ce que la Cardiologie ? </strong>
                              </p>
                              <p>
          

                         *      La cardiologie est une branche de la médecine qui traite des troubles du cœur ainsi que de certaines parties du système circulatoire. 
                              </p>
                              <p><strong>Quand consulter un cardiologue ?</strong>
                                 
                              </p>
                              <p>
                                - Insuffisance cardiaque<br></br>
                                - Insuffisance coronaire<br></br>
                                - Essoufflement <br></br>
                                - Douleurs thoraciques,<br></br>
                                - souffle au coeur<br></br>
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
