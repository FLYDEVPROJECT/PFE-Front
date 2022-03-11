import React, { Fragment } from "react";
import { Row, Card, Col, ListGroup, Badge, Tab } from "react-bootstrap";
import { Link  } from "react-router-dom";

const DocMD = () => {
 
   return (
      <Fragment>
          <Row>
            <div className="col-lg-12">
               <Card>
                  <Card.Header>
                     <Card.Title>Medecine dentaire</Card.Title>
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

export default DocMD;
