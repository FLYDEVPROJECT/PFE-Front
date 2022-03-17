import React, { Fragment } from "react";
import { Row, Card, Col } from "react-bootstrap";

const DocCardio = () => {
 
   return (
      <Fragment>
          <Row>
            <div className="col-lg-12">
               <Card>
                  <Card.Header>
                     <Card.Title>cardiologie</Card.Title>
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

export default DocCardio;
