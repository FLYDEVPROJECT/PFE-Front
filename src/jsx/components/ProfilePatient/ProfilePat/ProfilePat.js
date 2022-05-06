import React, { Fragment, useState } from "react";
import {  Tab , ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useForm } from "react-hook-form";

// import { Link } from 'react-router-dom';
import { Row, Col, Card} from 'react-bootstrap'
//** Import Image */


const ProfilePat = () => {
   const [activeToggle, setActiveToggle] = useState("posts");
  // handle form events
   const { register, handleSubmit, watch, formState: { errors }, trigger , } = useForm({
    mode:'onTouched'
});

// handle submit 
   const onSubmit = data => alert(JSON.stringify(data));


// handle password eye
    const [passwordEye, setPasswordEye] = useState(false);

   const handlePasswordClick = () => {
setPasswordEye(!passwordEye);
};

// handle confirm password eye
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

    const handleConfirmPasswordClick = () => {
 setConfirmPasswordEye(!confirmPasswordEye);
};

//    check password event 
    const password = watch('password')

  
  
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
                                        <h6 className="f-w-500"> Nom<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>med</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Prénom<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>med</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Sexe<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>masculin</span>
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
                                        <h6 className="f-w-500">Ville<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>Tunis</span>
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
                                        <h6 className="f-w-500"> Code postal<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>3000</span>
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
                                        <span>*************
                                        </span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Nombre d'enfants <span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>2</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Profession / Scolarité<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>scolarité</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Retreté(e)*<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>oui</span>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-3">
                                        <h6 className="f-w-500">Type d'âge *<span className="pull-right">:</span></h6>
                                    </div>
                                    <div className="col-9">
                                        <span>Enfant </span>
                                    </div>
                                </div>
                               
                           
                                    </div>
                                    </div>
 
 
                                    <div className="profile-about-me">
                                <div className="pt-4 border-bottom-1 pb-3">
                                    <h4 className="text-primary">Informations sur l'établissement</h4>
                                    <br></br>
                                    <br></br>
 
                             
                               
                              
                              
                               
                              
                             
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

                                       Changer le  mot de passe                                       </h4>
                                       <React.Fragment>
                                         <section>
                                       <p>Notre système a découvert que votre mot de passe correspond peut-être à un mot de passe volé sur 
             un autre site. 
             Protégez votre compte en changeant votre mot de passe.</p>
             <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white w-auto h-auto pb-20 mt-20 rounded-lg mx-5 sm:w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:mx-auto">
           

            {/* body */}
            <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Actuel	</label>
  
                    <div className='col-sm-12'>
                    <input
                        type='password'
                        className='form-control'
                      />
                                    	
Votre mot de passe actuel n’est peut-être pas assez fort
                    </div>
                  </div>


            <div>
              <div className="mx-8">
                {/* password section */}
                <div className='form-group row'>
                <label className='col-sm-3 col-form-label'>Nouveau Mot de passe </label>
                
                <div className="mt-10 relative">
                <div className='col-sm-9'>                 
                 <input
                    type={passwordEye === false ? "password" : "text"}
                    placeholder="Mot de passe "
                    
                    className={`w-full h-14 rounded-lg ${ 
                      errors.password &&
                        "form-control"} `}
                    {...register("password", { required: 'le mot de passe est obligatoire ',
                    pattern:{
                        value:/^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{10,16}$/,
                        message:'Le mot de passe doit inclure au moins une majuscule, une valeur numérique et un caractère spécial'
                    },
                    minLength:{
                        value:8,
                        message:' la longueur minimale exigée est 8'
                    },
                    maxLength: {
                        value: 20,
                        message: "la longueur maximale  exigée est 20",
                        
                      },
                 })}
                  />
                    {errors.password && 
                    <span className="text-sm text-red-500">{errors.password.message}</span>}
</div></div>
                  {/* eye section */}
                  <div className="text-3xl absolute top-4 right-5">
                    {passwordEye === false ? (
                      <AiFillEyeInvisible onClick={handlePasswordClick} />
                    ) : (
                      <AiFillEye onClick={handlePasswordClick} />
                    )}
                  </div>
                </div>
                <div>

                {/* confirm password section */}
                <div className="mx-8">

                <div className='form-group row'>

                <label className='col-sm-4 col-form-label'>confirmer le mot de passe 	</label>

                <div className="mt-10 relative">
                <div className='col-sm-9'>

                  <input
                    type={confirmPasswordEye === false ? "password" : "text"}
                    placeholder="Confirmer le mot de passe "
                    onPaste={(e)=>{
                        e.preventDefault()
                        return false;
                      }}
                    className={`w-full h-14 rounded-lg ${
                       errors.confirmPassword &&
                        "form-control"} `}
                    {...register("confirmPassword", { required: 'Confirmer le mot de passe est obligatoire',
                    validate: (value) =>
                    value === password || "le mot de passe n'est pas identique ",
                 })}
                  />
                  {errors.confirmPassword && <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>}
</div></div>
                  {/* eye section */}
                  <div className="text-2xl absolute top-4 right-5">
                    {passwordEye === false ? (
                      <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
                    ) : (
                      <AiFillEye onClick={handleConfirmPasswordClick} />
                    )}
                  </div>
                </div></div></div>


                {/* button section */}
                <div className="flex items-center justify-center mt-12">
                  <Link to="/login">
                    <input
                    type='Button'
                    value='Submit'
                    className="btn btn-primary mb-1 ml-1"
                    />
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
                </section>
                </React.Fragment>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="#profile">
                                       <h4 className="mb-4">
                                       Gérer les informations                                        </h4>
                                       <div className='form-group row'>
                  
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
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Numero de télephone est obligatoire ",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Nombre d'enfants</label>
                    <div className='col-sm-9'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='2'
                      />
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Retreté</label>
                    <div className='col-sm-9'>
                     
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Ville</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Sfax'
                      />
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Adresse</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='Route sidi mansour Km 4'
                      />
                    </div>
                  </div>  <div className='form-group row'>
                    <label className='col-sm-3 col-form-label'>Code Postal</label>
                    <div className='col-sm-9'>
                      <input
                        type='password'
                        className='form-control'
                        placeholder='3000'
                      />
                    </div>
                 
                  </div> 
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
