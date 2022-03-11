import React, { Fragment } from "react";
import { Row, Card, Col, ListGroup, Badge, Tab } from "react-bootstrap";

const DocGen = () => {
 
   return (
      <Fragment>
          <Row>
            <div className="col-lg-12">
               <Card>
                  <Card.Header>
                     <Card.Title>Géneraliste</Card.Title>
                  </Card.Header>
                  <Card.Body>
                   <p>MD</p>
                  </Card.Body>
               </Card>
            </div>
         </Row>
       
      </Fragment>
   );
};

export default DocGen;
