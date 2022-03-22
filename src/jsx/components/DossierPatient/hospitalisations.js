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
import MedicalReport from '../../../images/big/MedicalReport.png'
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";


const hospitalisations = () => {
 
   return (
    <Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        m: 1,
        width: 1300,
        height: 1300,
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
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Habitudes de vie</button>

               </Link>
               <Link   
                  to="/dossier-medical/Mesures"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Mesures</button>

               </Link>
               <Link   
                  to="/dossier-medical/ProfessionnelsDeSanté"     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >professionnels de santé</button>

               </Link>
               <Link   
                  to=""     
                  >
        <button type="button" class="btn btn-light tp-btn"  style={{ width: 240 }} >Entoutrages et volontés </button>

               </Link>
               <Link   
                  to=""     
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



                         <Stack spacing={2} direction="row">
    <Button variant="contained">Ajouter</Button>
  </Stack>





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

export default hospitalisations;
