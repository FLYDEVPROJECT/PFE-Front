import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddD from '../../../images/big/AddD.png'
import tele from '../../../images/big/tele.png'
import { Link } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import './validation.css';

const Volontaire = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const validate = Yup.object({
    Nom: Yup.string()
      .max(15, 'Doit contenir 15 caractères ou moins')
      .required('Champ obligatoire'),
    prenom: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
      telephone: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      ville: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
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
        

        <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="150"
      src={tele}
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h7" component="div">
      Synthèse de mon profil
              </Typography>
      <Typography variant="body2" color="text.secondary">
      Je souhaite visualiser et partager la synthèse PDF 
      de mon profil médical avec mes professionnels de santé.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Continuer</Button>
    </CardActions>
  </Card>





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
               
               
              
                <div className='form-group pt-3'>
              
                               <br></br>
                           

                      
                         <div class="d-flex justify-content-center">
                         
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

<div class="justify-content-center">
                         <Card >
   
    <CardContent>
     
      <Typography variant="body2" color="text.secondary">
      Je peux renseigner ma personne de confiance , mes contact d'urgence , mes proche aidants ou aidés . Ces contacts seront communiqués aux établissements de santé en cas d'urgence .
      </Typography>
    </CardContent>
    <CardActions>
    <div>
      <Button  variant="outlined" onClick={handleClickOpen}>Ajouter un  contact </Button>
      <Dialog open={open} onClose={handleClose} 
>
        <DialogTitle>Ajouter un Contact </DialogTitle>
        <DialogContent>
        <Formik
      initialValues={{
        Nom: '',
        prenom: '',
        telephone: '',
        ville: '',
        email: ''
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
                    <label className='col-sm-12 col-form-label'>Type de contact ( plusieurs choix disponibles)</label>
                    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked />} label="Contact d'urgence " />
      <FormControlLabel control={<Checkbox  />} label="Personne de confiance " />
      <FormControlLabel control={<Checkbox  />} label="Proche aidant" />
      <FormControlLabel control={<Checkbox  />} label="Proche aidé " />

    </FormGroup>

     
                <br></br> 
            <TextField label="Nom " name="Nom" type="text" 
               style={{ width: 500 }}/>
            <br></br>
            <TextField label="prénom" name="prenom" type="text"
               style={{ width: 500 }} />
            <br></br>

                      

<label className='form-label'> Lien avec ce contact   </label>
<select
                                   className="form-control"
                                   id="inputState"
                                   defaultValue="option-2"
                                   style={{ width: 500 }}
                                 >
                       <option value="option-5">Mére</option>
                       <option value="option-6">Pére</option>
                       <option value="option-23">Enfant</option>
                       <option value="option-24">Partenaire</option>
                       <option value="option-24">Autre</option>

                                 </select>

<br></br>
<TextField label="Télephone" name="telephone" type="text"    style={{ width: 500 }} />
            <br></br>

            <TextField label="Adresse email" name="email" type="text"     style={{ width: 500 }}/>
            <br></br>
<TextField label="Ville" name="ville" type="text"    style={{ width: 500 }} />
            <br></br>
           
          </Form>
        </div>
      )}
    </Formik>

        </DialogContent>
        <DialogActions>
        <button onClick={handleClose} className="btn btn-danger mt-3 ml-3" >annuler</button>
          <button onClick={handleClose} className="btn btn-dark mt-3">Valider</button>
        </DialogActions>
      </Dialog>
      </div>    </CardActions>
  </Card>
  <br>
  </br>
  <br></br>
  <Card >
   
   <CardContent>
    
     <Typography variant="body2" color="text.secondary">
<h4> don d'organes et de tissus  </h4>    
 </Typography>
   </CardContent>
   <CardActions>
   <FormGroup>
      <FormControlLabel control={<Checkbox  />} label="Je ( ou mon représentant légal ) déclare avoir pris connaissance des dispositions réglementaires relatives au don d'organes et de tissus" />
    </FormGroup>


      </CardActions>
 </Card>
  </div>            
  </div>




</div>
                               
                               
                                </div>
              </div>
            
            </div>
          </div> <div>

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

export default Volontaire ;
