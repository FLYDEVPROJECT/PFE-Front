import React, { Fragment, useState, useEffect, } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import AddD from '../../../images/big/AddD.png'
import MedicalReport from '../../../images/big/MedicalReport.png'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import { TextArea } from './TextArea';
import * as Yup from 'yup';
import './validation.css';
import jwt_decode from 'jwt-decode';
import { Modal } from "react-bootstrap";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container
} from "@mui/material";
import Collapsible from "./Collapsible";
import axios from "axios" ; 


const DocReport = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [largeModal, setLargeModal] = useState(false);
  const [addFormData, setAddFormData] = useState({
    nom:'',
    postologie_trait: '',
    date_trait: '',
    commentaire: '',
});


  const handleClose = () => {
    setOpen(false);
  };
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    setAddFormData(newFormData);
    console.log(newFormData)
};     



  const submit = () => {
    const fd = new FormData();
    fd.append('nom', addFormData.nom);
    fd.append('postologie_trait', addFormData.postologie_trait);
    fd.append('date_trait', addFormData.date_trait);
    fd.append('commentaire', addFormData.commentaire);

            var data = jwt_decode(localStorage.getItem('token'));
            fd.append('username', data.username);

 
           
           
            let config = {
                headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            };
       
        axios
        .post('http://127.0.0.1:8000/api/ajout/traitement', fd, config)
        .then((res) => {
            console.log(res.data);
          })
          .catch((error) => console.log(error));
    

    setOpen(false);
  };
  const [clientes, setClientes] = useState([]);


  
  const clickhistorique = ()=>{
    let config = {
      headers: {
      'Authorization': 'Bearer '+ localStorage.getItem('token')
      }
    };

    const fd = new FormData();
    var decoded = jwt_decode(localStorage.getItem('token'));
    fd.append('username', decoded.username);

    axios
    .post('http://127.0.0.1:8000/api/list/traitements', fd, config)
    .then((res) => {
      var data = [];
      res.data.map((cliente, index) => {
        console.log(cliente);
        data.push({
          specialite:cliente.posologie_trait,
          nom:cliente.nom ,
          date: cliente.date_trait,
      
          endereco: [
            {
              diagnostic: cliente.commentaire,
              principal: true,
            },
      
          ]
        })
    });
      setClientes(data);
    }).catch((error) => console.log(error));
    
    setLargeModal(true)
  }
  const validate = Yup.object({
    Nomdutraitement: Yup.string()
      .max(20, 'Doit contenir 15 caractères ou moins')
      .required(' champ obligatoire'),

    email: Yup.string()
      .email('Email est invalide')
      .required('Email est obligatoire'),
    password: Yup.string()
      .min(6, 'Mot de passe doit contenir au mois 6 caractéres')
      .required('Mot de passe est obligatoire'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Le mot de passe doit correspondre')
      .required('confirmer mot de passe est obligatoire '),
    dates: Yup.string()
      .oneOf([Yup.ref('dates'), null], 'Le mot de passe doit correspondre')
      .required('confirmer mot de passe est obligatoire '),
  })
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,

        },
      }}
    >
      <Paper elevation={3} >

        <Fragment>

          <div className='row'>
            <div className='col-lg-12'>
              <div className='card'>
                <div className='card-body'>
                  <div className='email-left-box generic-width px-0 mb-5'>
                  <img
                      className='mr-3 rounded'
                      width='130'
                      height='130'
                      alt=''
                      src={AddD}
                    />

                    <div className='mail-list mt-4'>


                    




                    </div>
                    <br></br>
                    <Link
                      to="/dossier-medical/traitement"

                    >
                      <button type="button" className="mr-2 btn btn-light btn-rounded" style={{ width: 240 }} >Traitements</button>
                    </Link>
                    <Link
                      to="/dossier-medical/hospitalisations"
                    >
                      <button type="button" class="btn btn-light tp-btn" style={{ width: 240 }} >Hospitalisations et chirugies</button>

                    </Link>

                    <Link
                      to="/dossier-medical/Antecedents"
                    >
                      <button type="button" class="btn btn-light tp-btn" style={{ width: 240 }} >Antécédents familiaux</button>

                    </Link>
                    <Link
                      to="/dossier-medical/Allergies"
                    >
                      <button type="button" class="btn btn-light tp-btn" style={{ width: 240 }} >Allergies</button>

                    </Link>
                    <Link
                      to="/dossier-medical/maladies"
                    >
                      <button type="button" class="btn btn-light tp-btn" style={{ width: 240 }} >Maladie et sujets de santés</button>

                    </Link>
                    <Link
                      to="/dossier-medical/Vaccinations"
                    >
                      <button type="button" class="btn btn-light tp-btn" style={{ width: 240 }} >Vaccinations</button>

                    </Link>
                    <Link
                      to="/dossier-medical/habitudes"
                    >

                    </Link>
                    <Link
                      to="/dossier-medical/Mesures"
                    >
                      <button type="button" class="btn btn-light tp-btn" style={{ width: 240 }} >Mesures</button>

                    </Link>
                    <Link
                      to="/dossier-medical/ProfessionnelsDeSante"
                    >
                      <button type="button" class="btn btn-light tp-btn" style={{ width: 240 }} >professionnels de santé</button>

                    </Link>

                    <Link
                      to="/dossier-medical/volontaire"
                    >
                      <button type="button" class="btn btn-light tp-btn" style={{ width: 240 }} >Entoutrages et volontés </button>

                    </Link>

                    <Link
                      to="/table-Medecin"
                    >
                      <button type="button" class="btn btn-light tp-btn" style={{ width: 240 }} >Historique des soins</button>

                    </Link>





                  </div>
                  <div className='email-right-box ml-0 ml-sm-4 ml-sm-0'>
                    <div className='row'>
                      <div className='col-12'>
                        <div className='right-box-padding'>

                          <div className='read-content'>
                            <div className='media pt-3 d-sm-flex d-block justify-content-between'>
                              <div className='clearfix mb-3 d-flex'>

                                <div className='media-body mr-2'>
                                  <h1 className='text-primary mb-0 mt-1'>
                                    Profil médical

                                  </h1>
                                  <p className='mb-0'>Je complète mon profil médical pour retrouver facilement toutes les informations importantes qui caractérisent ma santé.</p>
                                </div>
                              </div>

                            </div>
                            <hr />

                            {/* <!-- Large modal --> */}
                            <Button
                              variant="primary"
                              className="mb-2 mr-2"
                              onClick={() => clickhistorique()}
                            >
                              Voir l'historique de votre traitement
                            </Button>
                            <Modal
                              className="fade bd-example-modal-lg"
                              show={largeModal}
                              size="lg"
                            >
                              <Modal.Header>
                                <Modal.Title>Historique traitement </Modal.Title>
                                <Button
                                  variant=""
                                  className="close"
                                  onClick={() => setLargeModal(false)}
                                >
                                  <span>&times;</span>
                                </Button>
                              </Modal.Header>
                              <Modal.Body>
                                <div className='form-group pt-3'>
                                  <br></br>
                                  <div class="d-flex justify-content-center">
                                    <div className="card">
                                      <Container>


                                        <TableContainer className="container border mt-5 p-2">
                                          <Table striped bordered hover>
                                            <TableHead >
                                              <TableRow >
                                                <TableCell className="tableHeader">Nom du Traitement  </TableCell>
                                                <TableCell className="tableHeader">Posologie  </TableCell>
                                                <TableCell className="tableHeader">Date d'admession  </TableCell>
                                              </TableRow>
                                            </TableHead>
                                            <TableBody>
                                              <>
                                                {clientes.length > 0 ? (
                                                  clientes.map((cliente, index) => (
                                                    <>
                                                      <Collapsible
                                                        header={
                                                          <>
                                                            <TableCell className="clientRow">{cliente.nom}</TableCell>
                                                            <TableCell className="clientRow">{cliente.specialite}<TableRow>
                                                            </TableRow></TableCell>
                                                            <TableCell className="clientRow">{cliente.date} <TableRow>{"\u00A0"}</TableRow></TableCell>

                                                          </>
                                                        }
                                                      >
                                                        <>
                                                          {
                                                            <TableRow>
                                                              <TableCell>
                                                                {cliente.endereco ? (
                                                                  cliente.endereco.map((data, indexB) => (
                                                                    <>
                                                                      <TableRow>
                                                                        {data.principal ? (
                                                                          <>
                                                                            <strong>
                                                                              <TableRow>
                                                                                Commentaire
                                                                              </TableRow>
                                                                            </strong>
                                                                            <TableRow>
                                                                              {data.diagnostic}
                                                                            </TableRow>
                                                                            <TableRow>

                                                                            </TableRow>
                                                                          </>
                                                                        ) : (
                                                                          <>
                                                                            {`\u00A0`}
                                                                            <strong>

                                                                            </strong>
                                                                            <TableRow>
                                                                              {data.diagnostic} -{data.cidade} -
                                                                              {data.estado}
                                                                            </TableRow>

                                                                            <TableRow>

                                                                            </TableRow>
                                                                          </>
                                                                        )}
                                                                      </TableRow>

                                                                      <hr />
                                                                    </>
                                                                  ))
                                                                ) : (
                                                                  <>
                                                                    {" "}
                                                                    <TableRow> Nenhum Endereço </TableRow>
                                                                    <hr />
                                                                  </>
                                                                )}

                                                              </TableCell>

                                                            
                                                            </TableRow>
                                                          }
                                                        </>
                                                      </Collapsible>
                                                    </>
                                                  ))
                                                ) : (
                                                  <TableRow>
                                                    <TableCell colSpan={3}>Vide !</TableCell>
                                                  </TableRow>
                                                )}
                                              </>
                                            </TableBody>
                                          </Table>
                                        </TableContainer>
                                      </Container>












                                    </div>








                                  </div>


                                </div>
                              </Modal.Body>
                              <Modal.Footer>
                                <Button
                                  variant="danger light"
                                  onClick={() => setLargeModal(false)}
                                >
                                  Fermer
                                </Button>
                               
                              </Modal.Footer>
                            </Modal>

                            <div className='form-group pt-3'>
                              <div class="d-flex justify-content-center">

                                <img
                                  className='mr-3 rounded'
                                  width='130'
                                  height='130'
                                  alt=''
                                  src={MedicalReport}
                                />


                              </div>
                              <br></br>
                              <div class="d-flex justify-content-center">
                                <h1 className="card-title h5">
                                  J'ajoute un traitement
                                </h1>

                              </div>



                              <div class="d-flex justify-content-center">

                                <p>Je peux renseigner mes hospitalisations et mes actes chirurgicaux
                                  (exemples : accouchement, dialyse, appendicite, extraction des dents de sagesse...).</p>
                              </div>
                              <br></br>
                              <div class="d-flex justify-content-center">



                                <div>
                                  <Button variant="outlined" onClick={handleClickOpen}>Ajouter</Button>
                                  <Dialog open={open} onClose={handleClose}
                                  >
                                    <DialogTitle>Ajouter un traitement </DialogTitle>
                                    <DialogContent>
                                      <Formik
                                        validationSchema={validate}
                                        onSubmit={values => {
                                          console.log(values)
                                        }}
                                      >
                                        {formik => (
                                          <div>
                                            <Form>
                                              <br></br>

                                              <TextField
                                                label="Nom du traitement"
                                                name="nom"
                                                type="text"
                                                style={{ width: 500 }}
                                                onChange={handleAddFormChange}
                                                placeholder='Ex : pilule' />
                                              <br></br>

                                              <div >
                                                <label className='form-label'>Date d'admission (année obligatoire)</label>
                                                    <input type="datetime-local" className="form-control" autocomplete="off"
                                                        name="date_trait" 
                                                        required="required"
                                                        onChange={handleAddFormChange}
                                                        placeholder=""
                                                        id="date_trait"
                                                         value={addFormData.date_trait}  
 
                                                    />                                               
                                              </div>
                                              <br></br>


                                              <TextArea
                                                label="Posologie (facultatif)"
                                                name="postologie_trait"
                                                type="text"
                                                style={{ width: 500 }}
                                                onChange={handleAddFormChange}
                                                placeholder="ex : 2 sachets de 1mg par jour , matin et soir aprés le repas" rows={4} />
                                              <br></br>
                                              <TextArea
                                                label="Commentaire (facultatif)"
                                                name="commentaire"
                                                onChange={handleAddFormChange}
                                                type="text"
                                                style={{ width: 500 }}
                                                placeholder="ex : 2 sachets de 1mg par jour , matin et soir aprés le repas" rows={4} />



                                            </Form>
                                          </div>
                                        )}
                                      </Formik>
                                    </DialogContent>
                                    <DialogActions>
                                      <button onClick={handleClose} className="btn btn-danger mt-3 ml-3" >annuler</button>
                                      <button onClick={submit} className="btn btn-dark mt-3">Valider</button>
                                    </DialogActions>
                                  </Dialog>
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
        </Fragment>






      </Paper>

    </Box>
  );
}

export default DocReport;
