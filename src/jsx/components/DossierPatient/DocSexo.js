import React, { Fragment } from "react";
import { Row, Card} from "react-bootstrap";

const DocSexo = () => {
 
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

export default DocSexo;
