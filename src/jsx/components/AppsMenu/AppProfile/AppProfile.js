import React, { Fragment, useState } from "react";
import { Button,Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";


// import { Link } from 'react-router-dom';
import { Row, Col, Card, Accordion } from 'react-bootstrap'
//** Import Image */
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile from "../../../../images/profile/profile.png";
import PageTitle from "../../../layouts/PageTitle";

const AppProfile = () => {
  const [activeToggle, setActiveToggle] = useState("posts");
  const [sendMessage, setSendMessage] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const [replayModal, setReplayModal] = useState(false);

  const [activeDefault, setActiveDefault] = useState(0)
  const [activeBordered, setActiveBordered] = useState(0)
  const [activeWithoutSpace, setActiveWithoutSpace] = useState(0)
  
    
     
    
      const defaultAccordion = [
        {
          title: 'Changer le mot de passe ',
          text:'okkkk',
                   bg: 'primary',
        },
        {
          title: 'Accordion Header Two',
         
          bg: 'info',
        },
        {
          title: 'Accordion Header Three',
         
          bg: 'success',
        },
      ]
 
  const options = {
    settings: {
      overlayColor: "#000000",
    },
  };
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
                  <img
                    src={profile}
                    className="img-fluid rounded-circle"
                    alt="profile"
                  />
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
                      <Link to="/table-Medecin" className="text-black">
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
        <div className="col-xl-4">
			<div className="row">
				<div className="col-lg-12">
					<div className="card">
						<div className="card-body">
							<div className="profile-statistics">
								<div className="text-center">
							
									<div className="mt-4">
										<Link	to="/post-details"	className="btn btn-primary mb-1 mr-1">Follow</Link>
										<Button as="a" href="#" className="btn btn-primary mb-1 ml-1" onClick={() => setSendMessage(true)}>Send Message</Button>
									</div>
								</div>
							  {/* send Modal */}
								<Modal className="modal fade" show={sendMessage}>
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title">Send Message</h5>
											<Button variant="" type="button" className="close" data-dismiss="modal" onClick={() => setSendMessage(false)}>
												<span>×</span>
											</Button>
										</div>
										<div className="modal-body">
											<form className="comment-form" onSubmit={(e) => { e.preventDefault(); setSendMessage(false); }}>
												<div className="row">
													<div className="col-lg-6">
														<div className="form-group">
															<label htmlFor="author" className="text-black font-w600">  Name <span className="required">*</span> </label>
															<input type="text" className="form-control" defaultValue="Author" name="Author" placeholder="Author" />
														</div>
													</div>
													<div className="col-lg-6">
														<div className="form-group">
															<label htmlFor="email" className="text-black font-w600"> Email <span className="required">*</span></label>
															<input type="text" className="form-control" defaultValue="Email" placeholder="Email" name="Email"/>
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<label htmlFor="comment" className="text-black font-w600">Comment</label>
															<textarea rows={8} className="form-control" name="comment" placeholder="Comment" defaultValue={""}/>
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<input type="submit" value="Post Comment" className="submit btn btn-primary" name="submit"/>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</Modal>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-12">
					<div className="card">
						<div className="card-header border-0 pb-0">
							<h5 className="text-black">Our Latest News</h5>
						</div>	
						<div className="card-body pt-3">
							<div className="profile-news">
							  <div className="media pt-3 pb-3">
								<img src={profile05} alt="" className="mr-3 rounded" width={75}/>
								<div className="media-body">
									<h5 className="m-b-5">
										<Link to="/post-details" className="text-black">
											Collection of textile samples
										</Link>
									</h5>
									<p className="mb-0">I shared this on my fb wall a few months back, and I thought. </p>
								</div>
							  </div>
							  <div className="media pt-3 pb-3">
								<img src={profile06} alt=""  className="mr-3 rounded" width={75}/>
								<div className="media-body">
									<h5 className="m-b-5">
										<Link to="/post-details" className="text-black">
										Collection of textile samples
										</Link>
									</h5>
									<p className="mb-0">
										I shared this on my fb wall a few months back, and I
										thought.
									</p>
								</div>
							  </div>
							  <div className="media pt-3 ">
								<img src={profile07} alt="" className="mr-3 rounded" width={75} />
								<div className="media-body">
									<h5 className="m-b-5">
										<Link to="/post-details" className="text-black">
											Collection of textile samples
										</Link>
									</h5>
									<p className="mb-0">
										I shared this on my fb wall a few months back, and I thought.
									</p>
								</div>
							  </div>
							</div>
						</div>	
					</div>
				</div>	
			</div>	
		</div>	
        <div className="col-xl-8">
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
                                <div className="settings-form">
                                    <h4 className="text-primary">Account Setting</h4>
                                </div>
                                <Card>
                                    
            <Card.Header className='d-block card-header'>
              <Card.Title>Default </Card.Title>
             
            </Card.Header>
            <Card.Body className='card-body'>
              {/* <!-- Default accordion --> */}
              <Accordion
                className='accordion accordion-primary'
                defaultActiveKey='0'
              > 
             
                {defaultAccordion.map((d, i) => (
                  <div className='accordion__item' key={i}>
                    <Accordion.Toggle
                      as={Card.Text}
                      eventKey={`${i}`}
                      className={`accordion__header rounded-lg ${
                        activeDefault === i ? '' : 'collapsed'
                      }`}
                      onClick={() =>
                        setActiveDefault(activeDefault === i ? -1 : i)
                      }
                    >
                      <span className='accordion__header--text'>{d.title}</span>
                      <span className='accordion__header--indicator'></span>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={`${i}`}>
                      <div className='accordion__body--text'>{d.text}</div>
                    </Accordion.Collapse>
                  </div>
                ))}
              </Accordion>
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

export default AppProfile;
