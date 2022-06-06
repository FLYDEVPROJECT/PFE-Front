import React, { Fragment , useState , useEffect} from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import AddD from '../../../images/big/AddD.png'
import { Modal } from "react-bootstrap";

import jwt_decode from 'jwt-decode';
import axios from "axios" ; 
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container
} from "@mui/material"
import MedicalReport from '../../../images/big/MedicalReport.png'
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import { TextArea } from './TextArea';
import * as Yup from 'yup';
import './validation.css';
import Collapsible from "./Collapsible";



const Hospitalisations = () => {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const [largeModal, setLargeModal] = useState(false);
  const [addFormData, setAddFormData] = useState({
    motif:'',
    duree: '',
    heure: '',
    commentaire: '',
    date_debut:'',
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
    const newAddFormData = { ...addFormData }
    const fd = new FormData();
    fd.append('motif', addFormData.motif);
    fd.append('duree', addFormData.duree);
    fd.append('heure', addFormData.heure);
    fd.append('commentaire', addFormData.commentaire);
    fd.append('date_debut', addFormData.date_debut);


            var data = jwt_decode(localStorage.getItem('token'));
            fd.append('username', data.username);

 
           
           
            let config = {
                headers: {
                'Authorization': 'Bearer '+ localStorage.getItem('token')
                }
            };
       
        axios
        .post('http://127.0.0.1:8000/api/ajout/hospitalisation', fd, config)
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
    .post('http://127.0.0.1:8000/api/list/hospitalisation', fd, config)
    .then((res) => {
      var data = [];
      res.data.map((cliente, index) => {
        console.log(cliente);
        data.push({
          specialite:cliente.motif,
          nom:cliente.date_debut ,
          date: cliente.duree,
          heure: cliente.heure,

      
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
                                      <hr />

        <div className='mail-list mt-4'>
        

      





        </div>
        <br></br>
        <Link
                to="/dossier-medical/traitement"
              
             >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Traitements</button>
             </Link>
        <Link   
                to="/dossier-medical/hospitalisations"     
                >
                             <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Hospitalisations et chirugies</button>

             </Link>
             <Link   
                  to="/dossier-medical/Antecedents"     
                  >
          <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Antécédents familiaux</button>

               </Link>    
               <Link   
                  to="/dossier-medical/Allergies"     
                  >
               <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Allergies</button>

               </Link>

               <Link   
                  to="/dossier-medical/maladies"     
                  >
                   <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Maladie et sujets de santés</button>

               </Link>
               <Link   
                  to="/dossier-medical/Vaccinations"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Vaccinations</button>

               </Link>
               <Link   
                  to="/dossier-medical/habitudes"     
                  >

               </Link>
               <Link   
                  to="/dossier-medical/Mesures"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Mesures</button>

               </Link>
               <Link   
                  to="/dossier-medical/ProfessionnelsDeSante"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >professionnels de santé</button>

               </Link>
               <Link   
                  to="/dossier-medical/volontaire"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Entoutrages et volontés </button>

               </Link>
               <Link   
                  to="/table-Medecin"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Historique des soins</button>

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
                              onClick={() => clickhistorique(true)}
                            >
                              Voir l'historique de votre d'une Hospitalisation Ou un acte Chirurgical
                            </Button>
                            <Modal
                              className="fade bd-example-modal-lg"
                              show={largeModal}
                              size="lg"
                            >
                              <Modal.Header>
                                <Modal.Title>Historique d'une Hospitalisation Ou un acte Chirurgical </Modal.Title>
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
                                  <div class="d-flex justify-content-center">


                                  </div>
                                  <br></br>
                                  <div class="d-flex justify-content-center">
                                    <div className="card">
                                      <Container>


                                        <TableContainer className="container border mt-5 p-2">
                                          <Table striped bordered hover>
                                            <TableHead >
                                              <TableRow >
                                                <TableCell className="tableHeader">Date de début  </TableCell>
                                                <TableCell className="tableHeader">Motif </TableCell>
                                                <TableCell className="tableHeader">durée du séjour </TableCell>

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
                                                            <TableCell className="clientRow">{cliente.specialite}</TableCell>
                                                            <TableCell className="clientRow">{cliente.date} <TableRow>{"\u00A0"}</TableRow></TableCell>
 <TableCell className="clientRow">{cliente.heure} <TableRow>{"\u00A0"}</TableRow></TableCell>

                                                          </>
                                                        }
                                                      >
                                                        <>
                                                          {
                                                            <TableRow>
                                                              <TableCell></TableCell>
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
                                                    <TableCell colSpan={3}>Vide!</TableCell>
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
                                  Close
                                </Button>
                                <Button
                                  variant=""
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  Save changes
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
                               <h1 className ="card-title h5">
                               J'ajoute une hospitalisation ou un acte chirurgical
</h1>

</div>



                         <div class="d-flex justify-content-center">

                      <p>Je peux renseigner mes hospitalisations et mes actes chirurgicaux 
                         (exemples : accouchement, dialyse, appendicite, extraction des dents de sagesse...).</p>
                         </div>
                         <div class="d-flex justify-content-center">




                         <div>
      <Button  variant="outlined" onClick={handleClickOpen}>Ajouter</Button>
      <Dialog open={open} onClose={handleClose} 
>
        <DialogTitle>Ajouter une hospitalisation ou un acte chirurgical  </DialogTitle>
        <DialogContent>
        <Formik
      initialValues={{
        motif: '',
        password: '',
        date_debut:''
      }}
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
            label="Motif" 
            name="motif" 
            type="text" 
            id=""
            style={{ width: 490 }}
            onChange={handleAddFormChange}
            value={addFormData.motif}  
            placeholder='Ex : Appendicite'
            />

<br></br>

  <div >
                                                <label className='form-label'>Date d'admission (année obligatoire)</label>
                                                    <input type="datetime-local" className="form-control" autocomplete="off"
                                                        name="date_debut" required="required"
                                                        onChange={handleAddFormChange}
                                                        placeholder=""
                                                         value={addFormData.date_debut}  
 
                                                    />                                               
                                              </div>
               <br></br>
               <div >
                <label className='form-label'>Durée du séjour ( facultatif )  </label>
                <div className="row">
                <div className='col-sm-5'>

               <input
                        type='Number'
                        onChange={handleAddFormChange}
                        name="duree"
                        id="duree"
                         value={addFormData.duree}  
                        className='form-control'
                        placeholder='0'
                        style={{ width: 150 }}

                      /> 
                      </div> 
                      <div className='col-sm-5'>
                      <select
                                                  className="form-control"
                                                  onChange={handleAddFormChange}
                                                  id="heure" 
                                                  name="heure" 
                                                  value={addFormData.heure}
                                                 >
                                       <option value="1">Heure(s)</option>
                                       <option value="2">Jour(s)</option>
                                       <option value="3">Semaine(s)</option>
                                       <option value="4">Mois</option>
                                                 </select>
                                                 </div>
                </div> </div>
                <br></br>
                <TextArea
            label="Commentaire (facultatif)" 
            name="commentaire" 
            onChange={handleAddFormChange}
                        
            id="commentaire"
             value={addFormData.commentaire}  
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

export default Hospitalisations;
