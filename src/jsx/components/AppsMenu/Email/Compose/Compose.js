import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import DropFile from "./DropFile";

import PageTitle from "../../../../layouts/PageTitle";
import { Dropdown } from "react-bootstrap";

const Compose = () => {
   return (
      <Fragment>
    

         <div className="row">
            <div className="col-lg-12">
               <div className="card">
                  <div className="card-body">
                     <div className="email-left-box px-0 mb-3">
                        <div className="p-0">
                          
                              
                           
                        </div>
                        <div className="mail-list mt-4">
                           <Link
                              to="/email-inbox"
                              className="list-group-item active"
                           >
                              <i className="fa fa-inbox font-18 align-middle mr-2"></i>
                              Inbox
                              <span className="badge badge-primary badge-sm float-right">
                                 
                              </span>
                           </Link>
                           <Link
                              to="/contact"
                              className="list-group-item"
                           >
                              <i className="fa fa-paper-plane font-18 align-middle mr-2"></i>
                              Envoyé
                           </Link>
                           <Link
                              to="/contact"
                              className="list-group-item"
                           >
                              <i className="fa fa-star-o font-18 align-middle mr-2"></i>
                              Important
                              <span className="badge badge-danger text-white badge-sm float-right">
                                 47
                              </span>
                           </Link>
                           <Link
                              to="/contact"
                              className="list-group-item"
                           >
                              <i className="mdi mdi-file-document-box font-18 align-middle mr-2"></i>
                              
Brouillon
                           </Link>
                           <Link
                              to="/contact"
                              className="list-group-item"
                           >
                              <i className="fa fa-trash font-18 align-middle mr-2"></i>
                              Supprimé
                           </Link>
                        </div>
                     
                     </div>
                     <div className="email-right-box ml-0 ml-sm-4 ml-sm-0">
                        <div className="toolbar mb-4" role="toolbar">
                     
                          
                           <Dropdown className="btn-group mb-1">
                              <Dropdown.Toggle
                                 className="btn btn-primary light dropdown-toggle px-3 ml-1"
                                 data-toggle="dropdown"
                              >
                                 <i className="fa fa-tag"></i>
                              </Dropdown.Toggle>
                              <Dropdown.Menu>
                                 <Dropdown.Item as="a">Updates</Dropdown.Item>
                                 <Dropdown.Item as="a">Social</Dropdown.Item>
                                 <Dropdown.Item as="a">
                                    Promotions
                                 </Dropdown.Item>
                                 <Dropdown.Item as="a">Forums</Dropdown.Item>
                              </Dropdown.Menu>
                           </Dropdown>
                          
                        </div>
                        <div className="compose-content">
                           <form action="#">
                              <div className="form-group">
                                 <input
                                    type="text"
                                    className="form-control bg-transparent"
                                    placeholder=" To:"
                                 />
                              </div>
                              <div className="form-group">
                                 <input
                                    type="text"
                                    className="form-control bg-transparent"
                                    placeholder=" Sujet:"
                                 />
                              </div>
                              <div className="form-group">
                                 <textarea
                                    id="email-compose-editor"
                                    className="textarea_editor form-control bg-transparent"
                                    rows="15"
                                    placeholder="Enter text ..."
                                 ></textarea>
                              </div>
                           </form>
                           <h5 className="mb-4">
                              <i className="fa fa-paperclip"></i> 
Attachement
                           </h5>
                           <DropFile />
                        </div>
                        <div className="text-left mt-4 mb-5">
                           <button
                              className="btn btn-primary btn-sl-sm mr-2"
                              type="button"
                           >
                              <span className="mr-2">
                                 <i className="fa fa-paper-plane"></i>
                              </span>
                              Envoyé
                           </button>
                           <button
                              className="btn btn-danger light btn-sl-sm"
                              type="button"
                           >
                              <span className="mr-2">
                                 <i
                                    className="fa fa-times"
                                    aria-hidden="true"
                                 ></i>
                              </span>
                              Discard
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};

export default Compose;
