import React, { useState , Fragment } from "react";
import { Link } from "react-router-dom";
import CategoriesDoc from './CategoriesDoc'
/// Bootstrap
import {
   Row,
   Col,
   Card,
  
 
} from "react-bootstrap";

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
                    
                        <div class="card">
                           <div class=" d-block card-header">
                              <div class="card-title h5">Questions médicales</div>
                      
                           </div>
                           
                           <div class="card-body">

                            
                                 <Row >
                             
        <Col xl='9'>
        {data.map((values) => {
                             const {title, Text}=values ;
                             return (
                              <>


 <Card  style={{ height: '15rem' , minWidth: '275'}} >
            <Card.Header>
              <Card.Title>{title} </Card.Title> 
            </Card.Header>

            
            <Card.Body>        
               {Text}
            </Card.Body>


            <Card.Footer>
              <Card.Text className=' d-inline'>
              <Link to='/patient/details' className='card-link float-left'>
              Dr Sana BOUDALI EP BEN AYED    
              </Link>          
               </Card.Text>
              <Link to='/Reponse' className='card-link float-right'>
              Répondre
              </Link>
            </Card.Footer>
            </Card>


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
          
            
</div></div></div></div>
<div className="col-md-9">
                    
                 </div>
         
            
          
           
           
      </Fragment>
   );
};

export default ContactAll;