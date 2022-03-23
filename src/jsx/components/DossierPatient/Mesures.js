import React, { Fragment } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddD from '../../../images/big/AddD.png'
import tele from '../../../images/big/tele.png'
import { Link } from "react-router-dom";
import { Row, Card, Col, Button } from 'react-bootstrap'
import poid from '../../../images/card/poid.png'
import taille from '../../../images/card/taille.jpeg'
import temperature from '../../../images/card/temperature.jpeg'
import glycemie from '../../../images/card/glycemie.jpeg'
import coeur from '../../../images/card/coeur.jpeg'
import tension from '../../../images/card/tension.jpeg'
import {Dropdown} from "react-bootstrap";





const Mesures = () => {
 
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
                  to="/dossier-medical/historique"     
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
              <h3> Mesure  </h3>
              <Row>
        <Col xl='4'>
        <Card>
            <Card.Header className=' border-0 pb-0'>
              <Card.Title>Poids</Card.Title>
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
                      <Link to="/dossier-medical/Mesures/poid" className="text-black">
                      <i className="fa fa-users text-primary mr-2" />
                        Ajouter un  poid
										</Link>
                      </Dropdown.Item>
                    
                    
                    </Dropdown.Menu>
                  </Dropdown>
            </Card.Header>
            <Card.Body>
            <img
              className='card-img-top img-fluid'
              src={poid}
              alt='Card cap'
            />
              <Card.Text>
          -
          <br></br>
          aucune valeur 
              </Card.Text>
            </Card.Body>
          
          </Card>
        </Col>
        <Col xl='4'>
          <Card>
            <Card.Header className=' border-0 pb-0'>
              <Card.Title>Taille</Card.Title>
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
                      <Link to="/dossier-medical/Mesures/taille" className="text-black">
                      <i className="fa fa-users text-primary mr-2" />
                        Ajouter un taille
										</Link>
                      </Dropdown.Item>
                   
                    
                    </Dropdown.Menu>
                  </Dropdown>
            </Card.Header>
            <Card.Body>
            <img
              className='card-img-top img-fluid'
              src={taille}
              alt='Card cap'
            />
           
              <Card.Text>
              -
          <br></br>
          aucune valeur               </Card.Text>
            </Card.Body>
           
          </Card>
        </Col>
        <Col xl='4'>
        <Card>
            <Card.Header className=' border-0 pb-0'>
              <Card.Title>Température</Card.Title>
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
                      <Link to="/dossier-medical/Mesures/temperature" className="text-black">
                      <i className="fa fa-users text-primary mr-2" />
                        Ajouter une température 
										</Link>
                      </Dropdown.Item>
                    
                    
                    </Dropdown.Menu>
                  </Dropdown>
            </Card.Header>
            <Card.Body>
            <img
              className='card-img-top img-fluid'
              src={temperature}
              alt='Card cap'
            />
              <Card.Text>
              -
          <br></br>
          aucune valeur               </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>




        <Row>
        <Col xl='4'>
        <Card>
            <Card.Header className=' border-0 pb-0'>
              <Card.Title>Glycémie</Card.Title>
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
                      <Link to="/dossier-medical/Mesures/glycemie" className="text-black">
                      <i className="fa fa-users text-primary mr-2" />
                        Ajouter la valeur de glycémie 
										</Link>
                      </Dropdown.Item>
                    
                    
                    </Dropdown.Menu>
                  </Dropdown>
            </Card.Header>
            <Card.Body>
            <img
              className='card-img-top img-fluid'
              src={glycemie}
              alt='Card cap'
            />
              <Card.Text>
          -
          <br></br>
          aucune valeur 
              </Card.Text>
            </Card.Body>
          
          </Card>
        </Col>
        <Col xl='4'>
          <Card>
            <Card.Header className=' border-0 pb-0'>
              <Card.Title>Fréquence cardiaque </Card.Title>
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
                      <Link to="/dossier-medical/Mesures/coeur" className="text-black">
                      <i className="fa fa-users text-primary mr-2" />
                       Ajouter la valeur de la fréquence cardiqaque 
										</Link>
                      </Dropdown.Item>
                     
                    
                    </Dropdown.Menu>
                  </Dropdown>
            </Card.Header>
            <Card.Body>
            <img
              className='card-img-top img-fluid'
              src={coeur}
              alt='Card cap'
            />
           
              <Card.Text>
              -
          <br></br>
          aucune valeur               </Card.Text>
            </Card.Body>
           
          </Card>
        </Col>
        <Col xl='4'>
        <Card>
            <Card.Header className=' border-0 pb-0'>
              <Card.Title>Tension arterielle</Card.Title>
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
                      <Link to="/dossier-medical/Mesures/tension" className="text-black">
                      <i className="fa fa-users text-primary mr-2" />
Ajouter la valeur de la tension arterielle 										</Link>
                      </Dropdown.Item>
                     
                    
                    </Dropdown.Menu>
                  </Dropdown>
            </Card.Header>
            <Card.Body>
            <img
              className='card-img-top img-fluid'
              src={tension}
              alt='Card cap'
            />
              <Card.Text>
              -
          <br></br>
          aucune valeur               </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>

                    <br></br>                 
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

export default Mesures ;
