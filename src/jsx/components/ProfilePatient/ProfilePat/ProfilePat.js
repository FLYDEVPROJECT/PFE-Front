import React, { Fragment, useState } from "react";
import { Button,Dropdown,  Tab , ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


// import { Link } from 'react-router-dom';
import { Row, Col, Card} from 'react-bootstrap'
//** Import Image */


const ProfilePat = () => {
  const [activeToggle, setActiveToggle] = useState("posts");

  
    
     
    
    
    
  
  return (
    <Fragment>

      <div className="row">
        <div className="col-lg-12">
          <div className="profile card card-body px-3 pt-3 pb-0">
            <div className="profile-head">
              <div className="photo-content">
                <div className="cover-photo"></div>
              </div>
              <div className="profile-info">
                <div className="profile-photo">
                 
                </div>
                <div className="profile-details">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">mr/mme </h4>
                  </div>
                 
                  <Dropdown className="dropdown ml-auto">
                    <Dropdown.Toggle
                      variant="primary"
                      className="btn btn-primary light sharp i-false"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        //    xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24"></rect>
                          <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                          <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                        </g>
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item">
                      <Link to="/Reponse" className="text-black">
                      <i className="fa fa-users text-primary mr-2" />
                        Voir liste médecin
										</Link>
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-users text-primary mr-2" />
                        Voir liste rendez vous 
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-plus text-primary mr-2" />
                        Add to group
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-ban text-primary mr-2" />
                        Block
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
       
        <div className="col-xl-12">
          <div className="card">
            <div className="card-body">
              <div className="profile-tab">
                <div className="custom-tab-1">
						<ul className="nav nav-tabs">
							<li className="nav-item" onClick={() => setActiveToggle("posts")}>
								<Link to="#my-posts" data-toggle="tab" className={`nav-link ${ activeToggle === "posts" ? "active show" : ""}`}>Mes Informations</Link>
							</li>
							<li className="nav-item" onClick={() => setActiveToggle("aboutMe")}>
								<Link to="#about-me"  data-toggle="tab" className={`nav-link ${ activeToggle === "aboutMe" ? "active show" : ""}`}>Réglage</Link>
							</li>
							
						</ul>
					<div className="tab-content">
						
						<div id="my-posts" className={`tab-pane fade ${ activeToggle === "posts" ? "active show" : "" }`} >
                        <div className="profile-about-me">
                                <div className="pt-4 border-bottom-1 pb-3">
                                    <h4 className="text-primary">Etat civil de monsieur</h4>
                                    <br></br>
                                    <br></br>
 



 
                                    <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500"> Nom et prénom<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>Dr</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Date de Naissance<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>jj/mm/aaaa</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Numéro de télephone<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>+216        </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Adresse E-mail<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>example @gmail.com</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Age<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>27</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500"> Adresse<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>Rosemont Avenue Melbourne, Florida</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Ville<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>Tunis</span>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-about-me">
                                <div className="pt-4 border-bottom-1 pb-3">
                                    <h4 className="text-primary">Informations Génerale  </h4>
                                    <br></br>
                                    <br></br>
 
                                    <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Code Sécurité Sociale ( CSS)*<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>********
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Numéro carte d'identité <span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>********</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Type et Spécialité<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>+216        </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Adresse E-mail professionel<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>example @gmail.com</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Langue parlée<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>Espagnol - français - allemand</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Expérience Professionelle<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>ans d'experience  ..</span>
                                    </div>
                                </div>
                           
                                    </div>
                                    </div>
 
 
                                    <div className="profile-about-me">
                                <div className="pt-4 border-bottom-1 pb-3">
                                    <h4 className="text-primary">Informations sur l'établissement</h4>
                                    <br></br>
                                    <br></br>
 
                                    <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Nom de l'établissement<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>Hopital ..</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Numéro de l'établissement <span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>+9875685487555</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Adresse de l'établissement <span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span> Avenue chanigol pad      </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Ville<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span> padto </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Adresse E-mail de l'établissement<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>hopital x @gmail.com</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Site web <span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>www.medical.fr</span>
                                    </div>
                                </div>
 
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Heure début de journée <span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>9h</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Heure fin de journée <span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>18h</span>
                                    </div>
                                </div>
                           
                                    </div>
                                    </div>
                                   
                                </div>
						
						</div>
            <div id="#about-me" className={`tab-pane fade ${ activeToggle === "aboutMe" ? "active show" : ""}`}>
                            <div className="pt-3">
                               

                                <Card>
                                    
            <Card.Header className='d-block card-header'>
              <Card.Title>Sécurité et connexion</Card.Title>
            </Card.Header>
            <Card.Body className='card-body'>
            <div className="basic-list-group">
                      
            <Row>
                           <Tab.Container defaultActiveKey="#home">
                              <Col lg="6" xl="4">
                                 <ListGroup className="mb-4" id="list-tab">
                                    <ListGroup.Item action href="#home">
                                    Gérer votre mot de passe
                                    </ListGroup.Item>
                                    <ListGroup.Item action href="#profile">
                                      Gérer informations
                                    </ListGroup.Item>
                                  
                                 </ListGroup>
                              </Col>
                              <Col lg="10" xl="7">
                                 <Tab.Content>
                                    <Tab.Pane eventKey="#home">
                                       <h4 className="mb-2" >

                                       Changer votre mot de passe                                       </h4>
                                       <p>Notre système a découvert que votre mot de passe correspond peut-être à un mot de passe volé sur 
             un autre site. 
             Protégez votre compte en changeant votre mot de passe.</p>
             <form onSubmit={(e) => e.preventDefault()}>
                  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Actuel	</label>
  
                    <div className='col-sm-9'>
                    <input
                        type='password'
                        className='form-control'
                      />
                                    	
Votre mot de passe actuel n’est peut-être pas assez fort
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Nouveau</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Confirmer</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                      />
                    </div>
                  </div>
                
                  <a class="text-black" href="/react/demo/page-register">Mot de passe oublié ?</a>
                  <div className="mt-4">
									
										<Button as="a" href="#" className="btn btn-primary mb-1 ml-1" >Enregistrer les modifications</Button>
									</div>
                </form>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#profile">
                                       <h4 className="mb-4">
                                       Gérer les informations                                        </h4>
                                       <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>phootttoo</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                  </div>
                  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Adresse Email</label>
                    <div className='col-sm-9'>
                      <input
                        type='Email'
                        className='form-control'
                        placeholder='maissaba@aiesec.net'
                      />
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Numéro de telephone</label>
                    <div className='col-sm-9'>
                      <input
                        type='Numberphone'
                        className='form-control'
                        placeholder='+216 125 478'
                      />
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Nombre d'enfants</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Retreté</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Ville</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Adresse</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Code Postal</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Password'
                      />
                    </div>
                 
                  </div> 
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#messages">
                                       <h4 className="mb-4">
                                          Messages Tab Content
                                       </h4>
                                       <p>
                                          Ut ut do pariatur aliquip aliqua
                                          aliquip exercitation do nostrud
                                          commodo reprehenderit aute ipsum
                                          voluptate. Irure Lorem et laboris
                                          nostrud amet cupidatat cupidatat anim
                                          do ut velit mollit consequat enim
                                          tempor. Consectetur est minim nostrud
                                          nostrud consectetur irure labore
                                          voluptate irure. Ipsum id Lorem sit
                                          sint voluptate est pariatur eu ad
                                          cupidatat et deserunt culpa sit
                                          eiusmod deserunt. Consectetur et
                                          fugiat anim do eiusmod aliquip nulla
                                          laborum elit adipisicing pariatur
                                          cillum.
                                       </p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#settings">
                                       <h4 className="mb-4">
                                          Settings Tab Content
                                       </h4>
                                       <p>
                                          Irure enim occaecat labore sit qui
                                          aliquip reprehenderit amet velit.
                                          Deserunt ullamco ex elit nostrud ut
                                          dolore nisi officia magna sit occaecat
                                          laboris sunt dolor. Nisi eu minim
                                          cillum occaecat aute est cupidatat
                                          aliqua labore aute occaecat ea aliquip
                                          sunt amet. Aute mollit dolor ut
                                          exercitation irure commodo non amet
                                          consectetur quis amet culpa. Quis
                                          ullamco nisi amet qui aute irure eu.
                                          Magna labore dolor quis ex labore id
                                          nostrud deserunt dolor eiusmod eu
                                          pariatur culpa mollit in irure.
                                       </p>
                                    </Tab.Pane>
                                 </Tab.Content>
                              </Col>
                           </Tab.Container>
                        </Row>


                     </div>
            </Card.Body>
          </Card>                            </div>
                        </div>
                     
            
            </div></div></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfilePat;
