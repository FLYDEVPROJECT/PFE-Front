import React, { useState , Fragment } from "react";
import { Link } from "react-router-dom";
import CategoriesDoc from './CategoriesDoc'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';import Button from '@mui/material/Button';
/// Bootstrap
import {
   Row,
   Col,
   Card,
  
 
} from "react-bootstrap";
import { MDBCard, MDBCardBody , MDBCardHeader } from 'mdb-react-ui-kit';
import { MDBCardFooter } from "mdbreact";

const ContactAll = () => {
   
   const [data,setData]=useState(CategoriesDoc)
   const filterResult=(catItem)=>{
       const result=CategoriesDoc.filter((curData)=> {
           return curData.category===catItem ;

       }
       ) ;
       setData(result)


   }

   const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
   return (
      <Fragment>

       
<div className="row">
            <div className="col-lg-12">
                    
                       <Card>
                       <Card.Header>
                     <Card.Title>Questions médicales </Card.Title>
                     <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="dark" aria-label="add">
        
        <div>
        <Link   
                  to="/med-contact"     
                  >
        <AddCircleOutlineIcon variant="outlined" onClick={handleClickOpen} />
     
     </Link>
    </div>
      </Fab>
      </Box>
                  </Card.Header>
                           
                  <Card.Body>


                            
                                 <Row >
                             
        <Col xl='9'>
        {data.map((values) => {
                             const {title, Text}=values ;
                             return (
                              <>


 <MDBCard  style={{ height: '15rem' , minWidth: '275'}} >
            <MDBCardHeader>
              <Card.Title>{title} </Card.Title> 
            </MDBCardHeader>

            
            <MDBCardBody>        
               {Text}
            </MDBCardBody>


            <MDBCardFooter>
              <Card.Text className=' d-inline'>
              <Link to='/patient/details' className='card-link float-left'>
              Dr Sana BOUDALI EP BEN AYED    
              </Link>          
               </Card.Text>
            
            </MDBCardFooter>
            </MDBCard>


                                 </>
                                  )
                                 }
                                 )}
     
            
           
        </Col>
        <Col xl='3'>
        <Card>
        <Card.Header className=" d-block">
                     <Card.Title>Categories fréquentes</Card.Title>
                     
                  </Card.Header>
                  <Card.Body>
                  <button class="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Pneumologie')}>Pneumologie</button>
                  <button class="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Gynécologie')}>Gynécologie</button>
                  <button class="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Cardiologie')}>Cardiologie</button>
                  <button class="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Géneraliste')}>Géneraliste</button>
                  <button class="btn btn-warning w-100 mb-3" onClick={() =>filterResult('Radiologie')}>radiologie</button>
                  <button class="btn btn-warning w-100 mb-3">Pédiatrie</button>
                  <button class="btn btn-warning w-100 mb-3">Pharmacologie</button>
                  <button class="btn btn-warning w-100 mb-3"onClick={()=>setData(CategoriesDoc)}>Tous </button>

                  </Card.Body>
               </Card>
        </Col>
        </Row>
          
            
         </Card.Body>
</Card></div></div>
<div className="col-md-9">
                    
                 </div>
         
            
          
           
           
      </Fragment>
   );
};

export default ContactAll;
