import React, { Fragment, useState } from "react";
import { Button, Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";
//** Import Image */
import profile01 from "../../../../images/profile/1.jpg";
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile08 from "../../../../images/profile/8.jpg";
import profile09 from "../../../../images/profile/9.jpg";
import PageTitle from "../../../layouts/PageTitle";
import {
    Card,
    Grid,
    Container,
    Box,
    Typography,
    CardMedia,
  } from "@material-ui/core";
  import { makeStyles } from "@material-ui/core/styles";
  import clsx from "clsx";
  
const AppProfile = () => {
  const [activeToggle, setActiveToggle] = useState("posts");
  const [sendMessage, setSendMessage] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
 
  const [replayModal, setReplayModal] = useState(false);
 
  const options = {
    settings: {
      overlayColor: "#000000",
    },
  };

  const useStyles = makeStyles(({ palette, ...theme }) => ({
    media: {
      height: 300,
      width: 370,
      border: "6px solid #182731",
      boxSizing: "border-box",
    },
  
    media2: {
      width: 228,
      height: 364,
      border: "6px solid #182731",
      boxSizing: "border-box",
      marginLeft: "6em",
      marginTop: "0",
    },
  }));
  
 
    const classes = {}
  
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
              <div className="profile-details">
                  <div className="profile-name px-3 pt-2"></div>
            {/* Modal */}
            <Modal show={cameraModal} onHide={() => setCameraModal(false)} className="modal fade" id="cameraModal">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Upload images</h5>
                                                <button type="button" className="close" data-dismiss="modal" onClick={() => setCameraModal(false)}>
                                                    <span>×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input"/>
                                                        <label className="custom-file-label">Choose file</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
                <div className="profile-details">
                  <div className="profile-name px-3 pt-2">
                    <h4 className="text-primary mb-0">Dr</h4>
                    <p>Specialiste en </p>
                  </div>
                 
                  <Dropdown className="dropdown ml-auto">
                    <Dropdown.Toggle
                      variant="primary"
                      className="btn btn-primary light sharp i-false"
                      data-toggle="dropdown"
                      aria-expanded="true"
                    >
                   
                        <g
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x="0" y="0" width="24" height="24"></rect>
                          <circle fill="#008000" cx="5" cy="12" r="2"></circle>
                          <circle fill="#008000" cx="12" cy="12" r="2"></circle>
                          <circle fill="#008000" cx="19" cy="12" r="2"></circle>
                        </g>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item">
                        <i className="fa fa-user-circle text-primary mr-2" />
                        Voir le profile 
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item">
                      <Link to="/table-filtering" className="text-black">
                      <i className="fa fa-users text-primary mr-2" />
                       Tous les professionenels
                    </Link>
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
                                    <div className="row">
                                        <div className="col">
                                            <h3 className="m-b-0">+150</h3><span>Opérations</span>
                                        </div>
                                        <div className="col">
                                            <h3 className="m-b-0">+8Ans</h3> <span>d'expériences</span>
                                        </div>
                                        <div className="col">
                                            <h3 className="m-b-0">+1200</h3> <span>Patients</span>
                                        </div>
                                    </div>
                                    <div className="mt-4">
                                        
                                        <Button as="a" href="#" className="btn btn-primary mb-1 ml-1" onClick={() => setSendMessage(true)}>posez votre question</Button>
                                    </div>
                                </div>
                              {/* send Modal */}
                                <Modal className="modal fade" show={sendMessage}>
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title"></h5>
                                            <Button variant="" type="button" className="close" data-dismiss="modal" onClick={() => setSendMessage(false)}>
                                                <span>×</span>
                                            </Button>
                                        </div>
                                        <div className="modal-body">
                                            <form className="comment-form" onSubmit={(e) => { e.preventDefault(); setSendMessage(false); }}>
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="form-group">
                                                            <label htmlFor="author" className="text-black font-w600">  Nom et prénom <span className="required">*</span> </label>
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
                                                            <label htmlFor="comment" className="text-black font-w600"></label>
                                                            <textarea rows={8} className="form-control" name="Saisissez votre question" placeholder="" defaultValue={""}/>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <input type="submit" value="Envoyer" className="submit btn btn-primary" name="submit"/>
                                                        </div>
                                                        * champs obligatoires
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
                          
                            
                        </div>  
                        <div className="card-body pt-3" >  
                            <div className="profile-blog ">
                                <img  src={profile01}  alt="profile" className="img-fluid  mb-4 w-100" />
                                <Link to="/post-details"> <h4></h4> </Link>
                                <section className="section">
      <Container maxWidth="lg">
        <Box mb={8} textAlign="center">
        
        </Box>

        <Box mb={8} textAlign="center">
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
          

            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="http://www.mon-diplome.fr/Diplome/700-487142-Diplome-secretaire-medical.jpg"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="https://vignette4.wikia.nocookie.net/desencyclopedie/images/b/bd/Dipl%C3%B4me_de_DOCTEUR_2.jpg/revision/latest?cb=20121010085858s"
                alt=""
              />
            </Grid>
          </Grid>
        </Box>

        <Box mb={8} textAlign="center">
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/anti-stress.png"
                alt=""
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media2, "zoom")}
                justify-items="center"
                image="/assets/images/patrick/diplomes/psycho-travail.png"
                alt=""
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/reflexologie.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Box>

        <Box mb={8} textAlign="center">
          <Grid
            container
            spacing={2}
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/soins-corps.png"
                alt=""
              />
            </Grid>

            <Grid item xs={12} md={3}>
              <CardMedia
                className={clsx(classes.media, "zoom")}
                image="/assets/images/patrick/diplomes/sono.png"
                alt=""
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
                            </div>
                        </div>  
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header border-0 pb-0">
                           
                        </div>
                        <div className="card-body pt-3">
                            <div className="profile-interest ">
                                 <SRLWrapper options={options}>
                                    <div className="row sp4">
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                            <a href={profile02}> <img src={profile02} alt="profileImage" className="img-fluid" /> </a>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                            <a href={profile03}> <img src={profile03} alt="profile" className="img-fluid"/></a>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                            <a href={profile04}><img src={profile04} alt="profile" className="img-fluid" /> </a>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                            {" "}
                                            <a href={profile02}><img src={profile02} alt="profile" className="img-fluid" /> </a>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                            <a href={profile03} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col" >
                                                <img src={profile03} alt="profile"  className="img-fluid"/>
                                            </a>
                                        </div>
                                        <div className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col mb-1">
                                            <a href={profile04} className="col-lg-4 col-xl-4 col-sm-4 col-6 int-col">
                                                <img  src={profile04} alt="profile" className="img-fluid"/>
                                            </a>
                                        </div>
                                    </div>
                                </SRLWrapper>
                            </div>
                        </div>  
                    </div>
                </div>  
                <div className="col-lg-12">
                    <div className="card">
                      
                        <div className="card-body pt-3">
                            <div className="profile-news">
               
                              <div className="media pt-3 pb-3">
                                
                                <div className="media-body">
                                    <h5 className="m-b-5">
                                     
                                    </h5>
                               
                                </div>
                              </div>
                              <div className="media pt-3 ">
                         
                                <div className="media-body">
                                    <h5 className="m-b-5">
                                    
                                    </h5>
                                   
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
                                <Link to="#my-posts" data-toggle="tab" className={`nav-link ${ activeToggle === "posts" ? "active show" : ""}`}>Posts</Link>
                            </li>
                            <li className="nav-item" onClick={() => setActiveToggle("aboutMe")}>
                                <Link to="#about-me"  data-toggle="tab" className={`nav-link ${ activeToggle === "aboutMe" ? "active show" : ""}`}>A propos </Link>
                            </li>
                           
                        </ul>
                    <div className="tab-content">
                        <div id="my-posts" className={`tab-pane fade ${ activeToggle === "posts" ? "active show" : "" }`} >
                            <div className="my-post-content pt-3">
                                <div className="post-input">
                                        <textarea name="textarea" id="textarea" cols={30} rows={5} className="form-control bg-transparent" placeholder="Please type what you want...."defaultValue={""}/>
                                        <Link to="/app-profile" className="btn btn-primary light px-3 mr-1" data-toggle="modal" data-target="#linkModal" onClick={() => setLinkModal(true)}>
                                            <i className="fa fa-link m-0" />{" "}
                                        </Link>
                                    {/* Modal */}
                                    <Modal show={linkModal} onHide={() => setLinkModal(false)} className="modal fade post-input" id="linkModal" aria-hidden="true">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Social Links</h5>
                                                <button type="button" className="close" data-dismiss="modal" onClick={() => setLinkModal(false)}>
                                                    <span>×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <Link className="btn-social mr-1 facebook" to="/app-profile"><i className="fa fa-facebook" /></Link>
                                                <Link className="btn-social mr-1 google-plus" to="/app-profile"> <i className="fa fa-google-plus" /></Link>
                                                <Link className="btn-social mr-1 linkedin" to="/app-profile"><i className="fa fa-linkedin" /></Link>
                                                <Link className="btn-social mr-1 instagram" to="/app-profile"> <i className="fa fa-instagram" /></Link>
                                                <Link className="btn-social mr-1 twitter" to="/app-profile"><i className="fa fa-twitter" /></Link>
                                                <Link className="btn-social mr-1 youtube" to="/app-profile"><i className="fa fa-youtube" /></Link>
                                                <Link className="btn-social whatsapp" to="/app-profile"><i className="fa fa-whatsapp" /></Link>
                                            </div>
                                        </div>
                                    </Modal>
                                    <Link to="/app-profile" className="btn btn-primary light px-3 mr-1" data-toggle="modal" data-target="#cameraModal" onClick={() => setCameraModal(true)}>
                                        <i className="fa fa-camera m-0" />{" "}
                                    </Link>
                                    {/* Modal */}
                                    <Modal show={cameraModal} onHide={() => setCameraModal(false)} className="modal fade" id="cameraModal">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Upload images</h5>
                                                <button type="button" className="close" data-dismiss="modal" onClick={() => setCameraModal(false)}>
                                                    <span>×</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="input-group mb-3">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">Upload</span>
                                                    </div>
                                                    <div className="custom-file">
                                                        <input type="file" className="custom-file-input"/>
                                                        <label className="custom-file-label">Choose file</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Modal>
                                    <Link to="/app-profile" className="btn btn-primary ml-1" data-toggle="modal" data-target="#postModal" onClick={() => setPostModal(true)}>Post</Link>
                                    {/* Modal */}
                                    <Modal show={postModal}onHide={() => setPostModal(false)} className="modal fade" id="postModal">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title">Post</h5>
                                           
                                            </div>
                                            <div className="modal-body">
                                                <textarea name="textarea" id="textarea" cols={30} rows={5} className="form-control bg-transparent" placeholder="Please type what you want...." defaultValue={""}/>
                                                <Link className="btn btn-primary btn-rounded mt-1" to="/app-profile">Post</Link>
                                            </div>
                                        </div>
                                    </Modal>
                                </div>
 
                                <div className="profile-uoloaded-post border-bottom-1 pb-5">
                               
                                </div>
                                
                                <div className="profile-uoloaded-post border-bottom-1 pb-5">
                                    <img src={profile09} alt="" className="img-fluid w-100" />
                                    <Link className="post-title" to="/post-details">
                                        
                                    </Link>
                            
                              
                                    <button className="btn btn-secondary" onClick={() => setReplayModal(true)}>
                                        <span className="mr-2">  <i className="fa fa-reply" /></span>Répondre
                                    </button>
                                </div>
                                <div className="profile-uoloaded-post pb-3">
                                    <img src={profile08} alt="" className="img-fluid  w-100" />
                                    <Link className="post-title" to="/post-details">
                                      
                                    </Link>
                             
                                    
                                    <button className="btn btn-secondary" onClick={() => setReplayModal(true)}>
                                        <span className="mr-2"> <i className="fa fa-reply" /></span>Répondre
                                    </button>
                                </div>
                                {/* Modal */}
                                <Modal   show={replayModal}onHide={() => setReplayModal(false)} className="modal fade" id="replyModal">                                    
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Post Reply</h5>
                                            <button type="button" className="close"  onClick={() => setReplayModal(false)}><span>&times;</span></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <textarea className="form-control" rows="4">Message</textarea>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger light" onClick={() => setReplayModal(false)}>Close</button>
                                            <button type="button" className="btn btn-primary">Repondre</button>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div id="about-me" className={`tab-pane fade ${ activeToggle === "aboutMe" ? "active show" : ""}`}>
                            <div className="profile-about-me">
                                <div className="pt-4 border-bottom-1 pb-3">
                                    <h4 className="text-primary">Etat civil du professionel de santé    </h4>
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
                                        <h6 className="f-w-500">Identifiant RPPS<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>145789625</span>
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
                            <div className="profile-skills mb-5">
                                <h4 className="text-primary mb-2">Skills</h4>
                                <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1"> Admin</Link>
                                <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1" > Dashboard</Link>
                                <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Photoshop</Link>
                                <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Bootstrap</Link>
                                <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Responsive</Link>
                                <Link to="/app-profile" className="btn btn-primary light btn-xs mb-1 mr-1">Crypto</Link>
                            </div>
                            <div className="profile-lang  mb-5">
                                <h4 className="text-primary mb-2">Language</h4>
                                <Link to="/app-profile" className="text-muted pr-3 f-s-16">
                                    <i className="flag-icon flag-icon-us" />English
                                </Link>
                                <Link to="/app-profile" className="text-muted pr-3 f-s-16">
                                    <i className="flag-icon flag-icon-fr" />French
                                </Link>
                                <Link to="/app-profile" className="text-muted pr-3 f-s-16">
                                    <i className="flag-icon flag-icon-bd" />Bangla
                                </Link>
                            </div>
                            <div className="profile-personal-info">
                                <h4 className="text-primary mb-4">
                                    Personal Information
                                </h4>
                               
                             
                              
                               
                            </div>
                        </div>
                        <div id="profile-settings" className={`tab-pane fade ${ activeToggle === "setting" ? "active show" : ""}`}>
                            <div className="pt-3">
                                <div className="settings-form">
                                    <h4 className="text-primary">Account Setting</h4>
                                    <form onSubmit={(e) => e.preventDefault()}>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>Email</label>
                                                <input type="email" placeholder="Email" className="form-control"/>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label>Password</label>
                                                <input type="password" placeholder="Password" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" placeholder="1234 Main St" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Address 2</label>
                                            <input type="text" placeholder="Apartment, studio, or floor" className="form-control"/>
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group col-md-6">
                                                <label>City</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="form-group col-md-4">
                                                <label>State</label>
                                                <select
                                                  className="form-control"
                                                  id="inputState"
                                                  defaultValue="option-1"
                                                >
                                                  <option value="option-1">Choose...</option>
                                                  <option value="option-2">Option 1</option>
                                                  <option value="option-3">Option 2</option>
                                                  <option value="option-4">Option 3</option>
                                                </select>
                                            </div>
                                            <div className="form-group col-md-2">
                                                <label>Zip</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                  type="checkbox"
                                                  className="custom-control-input"
                                                  id="gridCheck"
                                                />
                                                <label
                                                  className="custom-control-label"
                                                  htmlFor="gridCheck"
                                                >
                                                  Check me out
                                                </label>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary" type="submit">Sign in</button>
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
    </Fragment>
  );
};
 
export default AppProfile;
 

