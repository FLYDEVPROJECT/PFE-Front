import React, { Fragment } from "react";
import { Row, Card, Col} from "react-bootstrap";
import { Link  } from "react-router-dom";

const DocReport = () => {
 
   return (
      <Fragment>
         <Row>
            <Col xl="4">
               <Card>
                  <Card.Header>
                     <Card.Title>Medecine dentaire </Card.Title>
                  </Card.Header>
                  <Card.Body>
                   <p><strong>* les médecins qui ont l'accés de modifier votre dossier : </strong> </p>
                   <p>salah </p>
                   <p>salah </p>
                   <p>salah </p>
                   <div className="mt-6">
										<Link to ="/doc-MD"className="btn btn-primary mb-1 mr-5">Dossier MD</Link>
										
									</div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4">
               <Card>
                  <Card.Header>
                     <Card.Title>Géneraliste</Card.Title>
                  </Card.Header>
                  <Card.Body>
                   <p><strong>* les médecins qui ont l'accés de modifier votre dossier : </strong> </p>
                   <p>salah </p>
                   <p>salah </p>
                   <p>salah </p>
                   <div className="mt-6">
										<Link	to="/Doc-gen"	className="btn btn-primary mb-1 mr-5">Dossier Géneraliste</Link>
										
									</div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4">
               <Card>
                  <Card.Header>
                     <Card.Title>Cardiologie</Card.Title>
                  </Card.Header>
                  <Card.Body>
                   <p><strong>* les médecins qui ont l'accés de modifier votre dossier : </strong> </p>
                   <p>salah </p>
                   <p>salah </p>
                   <p>salah </p>
                   <div className="mt-6">
										<Link to="/Doc-Cardio"	className="btn btn-primary mb-1 mr-5">Dossier cardiologie</Link>
										
									</div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4">
               <Card>
                  <Card.Header>
                     <Card.Title>dermatologie</Card.Title>
                  </Card.Header>
                  <Card.Body>
                   <p><strong>* les médecins qui ont l'accés de modifier votre dossier : </strong> </p>
                   <p>salah </p>
                   <p>salah </p>
                   <p>salah </p>
                   <div className="mt-6">
										<Link		className="btn btn-primary mb-1 mr-5">Dossier dermatologie</Link>
										
									</div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4">
               <Card>
                  <Card.Header>
                     <Card.Title>Pneumologie</Card.Title>
                  </Card.Header>
                  <Card.Body>
                   <p><strong>* les médecins qui ont l'accés de modifier votre dossier : </strong> </p>
                   <p>salah </p>
                   <p>salah </p>
                   <p>salah </p>
                   <div className="mt-6">
										<Link		className="btn btn-primary mb-1 mr-5">Dossier Pneumologie</Link>
										
									</div>
                  </Card.Body>
               </Card>
            </Col>
            <Col xl="4">
               <Card>
                  <Card.Header>
                     <Card.Title>Médecine interne </Card.Title>
                  </Card.Header>
                  <Card.Body>
                   <p><strong>* les médecins qui ont l'accés de modifier votre dossier : </strong> </p>
                   <p>salah </p>
                   <p>salah </p>
                   <p>salah </p>
                   <div className="mt-6">
										<Link className="btn btn-primary mb-1 mr-5">Dossier Med-Interne</Link>
										
									</div>
                  </Card.Body>
               </Card>
            </Col>
           
           
         </Row>
       
      </Fragment>
   );
};

export default DocReport;
