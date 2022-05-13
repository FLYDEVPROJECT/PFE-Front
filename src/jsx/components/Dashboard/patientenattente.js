import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";
import { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Table,
  Badge,
  Dropdown,
  ProgressBar,
} from "react-bootstrap";

/// imge
import avatar1 from "../../../images/avatar/1.jpg";
import avatar2 from "../../../images/avatar/2.jpg";
import avatar3 from "../../../images/avatar/3.jpg";
import { Link } from "react-router-dom";

const patientenattente = () => {
  const svg1 = (
    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <rect x="0" y="0" width="24" height="24"></rect>
        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
      </g>
    </svg>
  );
  // Normal page
 /*  const [data, setData] = useState(
    document.querySelectorAll(".custom-checkbox")
  ); */
  const [test, settest] = useState(false);
  // use effect
  useEffect(() => {
    //   getAppData();
    //setData(document.querySelectorAll(".custom-checkbox"));
    setTimeout(() => {
      settest(true);
    }, 2000);
  }, [test]);
  const chackbox = document.querySelectorAll(".custom-checkbox input");
  const motherChackBox = document.querySelector("#checkbox1_exam_all");
  const chackboxFun = (type) => {
    for (let i = 0; i < chackbox.length; i++) {
      const element = chackbox[i];
      if (type === "all") {
        if (motherChackBox.checked) {
          element.checked = true;
        } else {
          element.checked = false;
        }
      } else {
        if (!element.checked) {
          motherChackBox.checked = false;
          break;
        } else {
          motherChackBox.checked = true;
        }
      }
    }
  };

  return (
    <Fragment>
     
      <Row>
        <Col lg={12}>
          <Card>
            <Card.Header>
              <Card.Title>Demande d'accés</Card.Title>
            </Card.Header>
            <Card.Body>
              <Table responsive>
                <thead>
                  <tr>
                    <th className="width80">
                      <strong>#</strong>
                    </th>
                    <th>
                      <strong>Prénom du PATIENT</strong>
                    </th>
                    <th>
                      <strong>Nom du Patient</strong>
                    </th>
                    <th>
                      <strong>DATE</strong>
                    </th>
                    <th>
                      <strong>Date de Naissance</strong>
                    </th>
                 
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>01</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar3}
                          className="rounded-lg mr-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no">Jackson</span>
                      </div>
                    </td>
                    <td>Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                    11/05/2000
                    </td>
                    
                    <td>
                      <Dropdown>
                      
                            <Link
                            href="#"
                            className="btn btn-danger shadow btn-xs sharp"
                          >
                            <i className="fa fa-check"></i>
                          </Link>
                        
                       
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>02</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar3}
                          className="rounded-lg mr-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no"> Jackson</span>
                      </div>
                    </td>
                    <td> Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                      01/07/1997
                    </td>
                    <td>
                      <Dropdown>
                      <Link
                            href="#"
                            className="btn btn-danger shadow btn-xs sharp"
                          >
                            <i className="fa fa-check"></i>
                          </Link>
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </Dropdown>
                    </td>
                  
                    
                  </tr>
                  <tr>
                    <td>
                      <strong>03</strong>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img
                          src={avatar3}
                          className="rounded-lg mr-2"
                          width="24"
                          alt=""
                        />{" "}
                        <span className="w-space-no"> Jackson</span>
                      </div>
                    </td>
                    <td>Jackson</td>
                    <td>01 August 2020</td>
                    <td>
                      10/01/1950
                    </td>
                 
                    <td>
                      <Dropdown>
                       
                      <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-check"></i>
                        </Link>
                        
                        <Link
                          href="#"
                          className="btn btn-danger shadow btn-xs sharp"
                        >
                          <i className="fa fa-trash"></i>
                        </Link>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        
        
         
        
        
        
        
        
       
        
        
        
        
      </Row>
    </Fragment>
  );
};

export default patientenattente;
