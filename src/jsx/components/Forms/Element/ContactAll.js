import React, { useState , Fragment } from "react";
import { Link } from "react-router-dom";
import CategoriesDoc from './CategoriesDoc'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
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
        <AddCircleOutlineIcon variant="outlined"  />
     
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
