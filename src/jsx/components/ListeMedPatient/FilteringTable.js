import React,{ Fragment , useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
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
import './filtering.css';
import './tabela.css'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container
} from "@mui/material";
import fakedata from "./fakedata";
import Collapsible from "./Collapsible";


export const FilteringTable = () => {
	const [clientes, setClientes] = useState([]);

	useEffect(() => {
	  setClientes(fakedata);
	}, []);
  
	
	return(
		<>

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
            <TableCell className="tableHeader">Nom du Médecin </TableCell>
            <TableCell className="tableHeader">Spécialité  </TableCell>
            <TableCell className="tableHeader">Date </TableCell>
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
                                            Diagnostic
                                          </TableRow>
                                        </strong>
                                        <TableRow>
                                          {data.diagnostic} - {data.cidade} -{" "}
                                          {data.estado}
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

                          <TableCell>
                            {cliente.medicament ? (
                              cliente.medicament.map((data, indexC) => (
                                <>
                                  <TableRow>
                                   <strong> médicament  </strong>
                                  </TableRow>
                                  <TableRow>{data.medicament}</TableRow>
                                  <TableRow>
                                         
                                        </TableRow>

                                  <hr />
                                </>
                              ))
                            ) : (
                              <>
                                {" "}
                                <TableRow><strong> médicament </strong></TableRow>
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
                <TableCell colSpan={3}>Nenhum usuário cadastrado!</TableCell>
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











		
		</>
	)
	
}
export default FilteringTable;