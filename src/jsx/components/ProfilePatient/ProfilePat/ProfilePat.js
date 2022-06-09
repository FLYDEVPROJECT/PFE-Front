import React, { useEffect, Fragment, useState } from "react";
import { Tab, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Row, Col, Card } from 'react-bootstrap';



function ProfilePat() {
  const [activeToggle, setActiveToggle] = useState("posts");
  const [nom, setNom] = useState('');
  const [ville, setVille] = useState('');
  const [codesecuritesocial, setCodesecuritesocial] = useState('');
  const [email, setEmail] = useState('');
  const [statut, setStatut] = useState('');
  const [nbrenf, setNbrenf] = useState('');
  const [code, setCode] = useState('');
  const [adresse, setAdresse] = useState('');
  const [sexe, setSexe] = useState('');
  const [datenaissance, setDatenaissance] = useState('');
  const [numtel, setTel] = useState('');
  const [prenom, setPrenom] = useState('');





  //tebda mennna
  useEffect(async () => {
    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    const fd = new FormData();
    fd.append('username',decoded.username)
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    await axios.post('http://127.0.0.1:8000/api/profile/patient', fd, config)
      .then((res) => {
        console.log(res.data);
        setNom(res.data.user.nom)
        setVille(res.data.user.ville)
        setCodesecuritesocial(res.data.code_securite_sociale)
        setCode(res.data.user.code_postal)
        setStatut(res.data.statut_sociale)
        setNbrenf(res.data.nbr_enfant)
        setSexe(res.data.user.sexe)
        setAdresse(res.data.user.adresse)
        setDatenaissance(res.data.user.date_naissance)
        setTel(res.data.user.num_tel)
        setPrenom(res.data.user.prenom)
        setEmail(res.data.email)
        

      })
  });

  // handle form events
  const { register, handleSubmit, watch, formState: { errors }, trigger, } = useForm({
    mode: 'onTouched'
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




  const getProfileInfo = () => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    axios
      .get('http://127.0.0.1:8000/api/list', config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };





























  const [editModal, setEditModal] = useState(false);
  const [contacts, setContacts] = useState([]);
 
  // Edit function editable page loop
  const [editContactId, setEditContactId] = useState(null);
 
  // Edit function button click to edit
 
 
 
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);
 
    const formValues = {
 
      nom: contact.nom,
      //  password: contact.password,
      num_tel: contact.num_tel,
      statut_sociale:contact.statut_sociale,
      code_postal: contact.code_postal,
      adresse: contact.adresse,
      email: contact.email,
      ville: contact.ville,
      nbr_enfant: contact.nbr_enfant,

    }
    setEditFormData(formValues);
    setEditModal(true);
  };
 
 
 
 
 
 
  // edit  data  
  const [editFormData, setEditFormData] = useState({
 
    //password: '',
    num_tel: '',
    statut_sociale: '',
    code_postal: '',
    nbr_enfant:'',
    adresse:'',
    ville:'',
    email:'',

 
  })
 
  //update data function
  const handleEditFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;
    setEditFormData(newFormData);
  };
 
  // edit form data submit
  const handleEditFormSubmit = (event) => {
    //event.preventDefault();
 
    //recuperer data
    console.log(editFormData);
    var token = localStorage.getItem('token');
    var decoded = jwt_decode(token);
    const fd = new FormData();
    fd.append('username', decoded.username)
    // fd.append('password', editFormData.password);
    fd.append('num_tel', editFormData.num_tel);
    fd.append('statut_sociale', editFormData.statut_sociale);
    fd.append('adresse', editFormData.adresse);
    fd.append('nbr_enfant', editFormData.nbr_enfant);
    fd.append('code_postal', editFormData.code_postal);
    fd.append('email', editFormData.email);
    fd.append('ville', editFormData.ville);
    fd.append('photo', editFormData.photo);

    let config = {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    const editedContact = {
 
      //password: editFormData.password,
      num_tel: editFormData.num_tel,
      statut_sociale: editFormData.statut_sociale,
      nbr_enfant: editFormData.nbr_enfant,
      email: editFormData.email,
      code_postal: editFormData.code_postal,
      adresse: editFormData.adresse,
      ville: editFormData.ville,
      photo: editFormData.photo,

     
 
     
    }
 
 
    axios
      .post('http://127.0.0.1:8000/api/update/patient', fd, config)
      .then((res) => {
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === editContactId);
        newContacts[index] = editedContact;
        console.log(editedContact);
        setContacts(newContacts);
        setEditContactId(null);
        setEditModal(false);
      })
    return false;
  }
 
  //For Image upload in ListBlog
 


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
                    <h4 className="text-primary mb-0">Profile de  {nom} {prenom} </h4>
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
                      <Link to="#my-posts" data-toggle="tab" className={`nav-link ${activeToggle === "posts" ? "active show" : ""}`}>Mes Informations</Link>
                    </li>
                    <li className="nav-item" onClick={() => setActiveToggle("aboutMe")}>
                      <Link to="#about-me" data-toggle="tab" className={`nav-link ${activeToggle === "aboutMe" ? "active show" : ""}`}>Réglage</Link>
                    </li>

                  </ul>
                  <div className="tab-content">

                    <div id="my-posts" className={`tab-pane fade ${activeToggle === "posts" ? "active show" : ""}`} >
                      <div className="profile-about-me">
                        <div className="pt-4 border-bottom-1 pb-3">
                          <h4 className="text-primary">Etat civil de Mr/Mme {prenom}</h4>
                          <br></br>
                          <br></br>

                          <div className="row mb-2">
                            <div className="col-3">
                              <h6 className="f-w-500"> Nom<span className="pull-right">:</span></h6>
                            </div>
                            <div className="col-9">
                              <span>{nom}</span>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-3">
                              <h6 className="f-w-500">Prénom<span className="pull-right">:</span></h6>
                            </div>
                            <div className="col-9">
                              <span>{prenom}</span>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-3">
                              <h6 className="f-w-500">Sexe<span className="pull-right">:</span></h6>
                            </div>
                            <div className="col-9">
                              <span>{sexe}</span>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-3">
                              <h6 className="f-w-500">Date de Naissance<span className="pull-right">:</span></h6>
                            </div>
                            <div className="col-9">
                              <span>{datenaissance}</span>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-3">
                              <h6 className="f-w-500">Numéro de télephone<span className="pull-right">:</span></h6>
                            </div>
                            <div className="col-9">
                              <span>{numtel}</span>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-3">
                              <h6 className="f-w-500">Adresse E-mail<span className="pull-right">:</span></h6>
                            </div>
                            <div className="col-9">
                              <span>{email}</span>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-3">
                              <h6 className="f-w-500">Ville<span className="pull-right">:</span></h6>
                            </div>
                            <div className="col-9">
                              <span>{ville}</span>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-3">
                              <h6 className="f-w-500"> Adresse<span className="pull-right">:</span></h6>
                            </div>
                            <div className="col-9">
                              <span>{adresse}</span>
                            </div>
                          </div>
                          <div className="row mb-2">
                            <div className="col-3">
                              <h6 className="f-w-500"> Code postal<span className="pull-right">:</span></h6>
                            </div>
                            <div className="col-9">
                              <span>{code}</span>
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
                                <span>{codesecuritesocial}</span>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="col-3">
                                <h6 className="f-w-500">Statut social <span className="pull-right">:</span></h6>
                              </div>
                              <div className="col-9">
                                <span>{statut}</span>
                              </div>
                            </div>
                            <div className="row mb-2">
                              <div className="col-3">
                                <h6 className="f-w-500">Nombre d'enfants <span className="pull-right">:</span></h6>
                              </div>
                              <div className="col-9">
                                <span>{nbrenf}</span>
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
                          </div>
                        </div>
                      </div>

                    </div>
                    <div id="#about-me" className={`tab-pane fade ${activeToggle === "aboutMe" ? "active show" : ""}`}>
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
                                        Changer votre mot de passe
                                      </ListGroup.Item>
                                      <ListGroup.Item action href="#profile">
                                        Changer vos informations
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
                                                  <label >  <strong> Actuel  </strong>	</label>

                                                  <div className='col-sm-12'>
                                                    <input
                                                      type='password'
                                                      className='form-control'
                                                    />

                                                    Votre mot de passe actuel n’est peut-être pas assez fort
                                                  </div>
                                                </div>



                                                <div className='form-group row'>
                                                  <label ><strong> Nouveau mot de passe </strong>	</label>

                                                  <div className='col-sm-12'>
                                                    <input
                                                      type='password'
                                                      className='form-control'
                                                    />

                                                  </div>
                                                </div>   <div className='form-group row'>
                                                  <label ><strong> Confirmer mot de passe </strong>	</label>

                                                  <div className='col-sm-12'>
                                                    <input
                                                      type='password'
                                                      className='form-control'
                                                    />

                                                  </div>
                                                </div>


                                                <div>
                                                  <div className="mx-8">
                                                    {/* password section */}
                                                   

                                                     


                                                    {/* button section */}
                                                    <div className="flex items-center justify-center mt-12">
                                              
                                                        <input
                                                          type='Button'
                                                          value='Valider'
                                                          className="btn btn-primary mb-1 ml-1"
                                                        />
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
                                          changer vos informations                                        </h4>
                                        <div className='form-group row'>
                                        </div>
                                        <div className='form-group row'>
                                          <label className='col-sm-3 col-form-label'>Adresse Email</label>
                                          <div className='col-sm-9'>
                                            <input
                                               type='email'
                                               className='form-control'
                                               name="email"
                                               
                                                onChange={handleEditFormChange}
                                                value={editFormData.email}



                                            />
                                          </div>
                                        </div>  <div className='form-group row'>
                                          <label className='col-sm-3 col-form-label'>Numéro de telephone</label>
                                          <div className='col-sm-9'>
                                            <input
                                              value={editFormData.num_tel}
                                              type="text"
                                              name="num_tel"
                                              onChange={handleEditFormChange}

                                              className={`form-control ${errors.phone && "invalid"}`}
                                              {...register("phone", {
                                                required: "Numero de télephone est obligatoire ",
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
                                              type='number'
                                              name="nbr_enfant"
                                              className='form-control'
                                              placeholder='0'
                                              onChange={handleEditFormChange}
                                              value={editFormData.nbr_enfant}
                                           />
                                          </div>
                                        </div>
                                        <div className='form-group row'>
                                          <label className='col-sm-3 col-form-label'>Ville</label>
                                          <div className='col-sm-9'>
                                            <input
                                              type='text'
                                              name="ville"
                                              className='form-control'
                                              onChange={handleEditFormChange}
                                              value={editFormData.ville}

                                            />
                                          </div>
                                        </div>  
                                        <div className='form-group row'>
                                          <label className='col-sm-3 col-form-label'>Adresse</label>
                                          <div className='col-sm-9'>
                                            <input
                                              type='text'
                                              name="adresse"
                                              className='form-control'
                                              placeholder='Route sidi mansour Km 4'
                                              onChange={handleEditFormChange}
                                              value={editFormData.adresse}

                                            />
                                          </div>
                                        </div>  
                                        <div className='form-group row'>
                                          <label className='col-sm-3 col-form-label'>Code Postal</label>
                                          <div className='col-sm-9'>
                                            <input
                                              type='text'
                                              className='form-control'
                                              placeholder='3000'
                                              name="code_postal"
                                              onChange={handleEditFormChange}
                                              value={editFormData.code_postal}

                                            />
                                          </div>

                                        </div>


                                        <div className='form-group row'>
                                          <label className='col-sm-3 col-form-label'>Statut social </label>
                                          <div className='col-sm-9'>
                                          <select
                                                         className="form-control"
                                                         defaultValue="célibataire"
                                                         name="statut_sociale"
                                                         onChange={handleEditFormChange}
                                                         value={editFormData.statut_sociale}

                                                         >

                                                         <option value="célibataire">célibataire </option>
                                                         <option value="marié(e)">Marié(e)  </option>
                                                         <option value="veuf(ve)">veuf(ve)</option>
                                                         <option value="divorcé(e)">divorcé(e) </option>

                                                      </select>
                                          </div>
                                        </div>  


                                        <div className='form-group row'>
                                          <label className='col-sm-3 col-form-label'>profession / scolarité </label>
                                          <div className='col-sm-9'>
                                          <select
                                                         className="form-control"
                                                         defaultValue="profession-1"
                                                        
                                                      >
                                                         <option value="profession-1">Profession</option>
                                                         <option value="option-2">Education  </option>
                                                         <option value="option-3">Autre</option>
                                                      </select>
                                          </div>

                                        </div>

                                        <div className='form-group row'>
                                          <label className='col-sm-3 col-form-label'>photo de profil  </label>
                                          <div className='col-sm-9'>
                                          <input
                                                      name="photo"
                                                      className="form-control"
                                                      required
                                                      type="file"
                                                      accept="image/png, image/jpeg" />
                                          </div>

                                        </div>

                                        
                                        <div className="flex items-center justify-center mt-12">
                                                      
                                                        <input
                                                          type='Button'
                                                          value='Enregistrer les modification '
                                                          className="btn btn-primary mb-1 ml-1"
                                                          onClick={(event) => handleEditFormSubmit(event)}

                                                        />
                                                    
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
