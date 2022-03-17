import React, { Fragment} from "react";
import { Link } from "react-router-dom";
/// Bootstrap
import {
   Row,
   Col,
   Card,
   Button,
   ButtonGroup,
   Dropdown,
   DropdownButton,
} from "react-bootstrap";

const ContactAll = () => {
   const listItem = [
      "Radiologue ",
      "Generaliste ",
      "Pneumologue",
      "Porta ac consectetur ac",
      "Vestibulum at eros",
   ];
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
          <Card className='bg-light'>
            <Card.Header>
              <Card.Title>Apportez une réponse
à vos inquiétudes
<Link to="/patient/mail-medecin">
   <Button variant="primary">Poser ma question </Button></Link>
</Card.Title>
            </Card.Header>
            <Card.Body className=' mb-0'>
            <Card>
<Card.Body>vvv</Card.Body>

            </Card>
            
            </Card.Body>
           
          </Card>
        </Col>
        <Col xl='3'>
        <Card>
        <Card.Header className=" d-block">
                     <Card.Title>Categories fréquentes</Card.Title>
                     
                  </Card.Header>
                  <Card.Body>
                  <button class="btn btn-warning w-100 mb-3">Pneumologie</button>
                  <button class="btn btn-warning w-100 mb-3">Gynécologie</button>
                  <button class="btn btn-warning w-100 mb-3">Cardiologie</button>
                  <button class="btn btn-warning w-100 mb-3">Géneraliste</button>
                  <button class="btn btn-warning w-100 mb-3">radiologie</button>
                  <button class="btn btn-warning w-100 mb-3">Pédiatrie</button>
                  <button class="btn btn-warning w-100 mb-3">Pharmacologie</button>
                  <button class="btn btn-warning w-100 mb-3">gastrologie</button>

                  </Card.Body>
               </Card>
        </Col>
        </Row>
          
            
</div></div></div></div>
          
         
            
          
           
           
      </Fragment>
   );
};

export default ContactAll;
