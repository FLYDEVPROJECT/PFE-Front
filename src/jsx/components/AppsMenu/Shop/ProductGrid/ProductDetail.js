import React, { useState } from "react";
import { Modal, Nav, Tab } from "react-bootstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';
import avater1 from "../../../../../images/avatar/1.jpg";

import tab1 from "../../../../../images/tab/1.jpg";
import tab2 from "../../../../../images/tab/2.jpg";
import tab3 from "../../../../../images/tab/3.jpg";
import tab4 from "../../../../../images/tab/4.jpg";
import PageTitle from "../../../../layouts/PageTitle";
import StarRating from './../ProductList/StarRating';


const ProductDetail = () => {
  const [reviewToggle, setReviewToggle] = useState(false);
  const [activeTab, setActiveTab] = useState('0');
  const [addFormData, setAddFormData ] = useState({
	Cust_Id:'',
	Date_Join:'',
	Cust_Name:'',
	Location:'',
	image:'',
}); 
const handleAddFormChange = (event) => {
	event.preventDefault();    
	const fieldName = event.target.getAttribute('name');
	const fieldValue = event.target.value;
	const newFormData = {...addFormData};
	newFormData[fieldName] = fieldValue;
	setAddFormData(newFormData);
};


    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
  return (
    <>
      
      
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
					<div className="col-xl-3 col-lg-6  col-md-6 col-xxl-5 ">
					  {/* Tab panes */}
						<Tab.Container defaultActiveKey="first">
					
							<div className="tab-slide-content new-arrival-product mb-4 mb-xl-0">
							  {/* Nav tabs */}
								<Nav as="ul" className="nav slide-item-list mt-3" role="tablist">
								<div className="modal-body">
							
									<div className="add-contact-box">
										<div className="add-contact-content">
									
											<div class="container">
                                           
											<div className="form-group mb-3">
												<label className="text-black font-w500">Identifiant</label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="Cust_Id" required="required"
                                                        onChange={handleAddFormChange}
														placeholder=""
													/>
													<span className="validation-text"></span>
												</div>
												</div>
												</div>
                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Numéro de sécurité sociale </label>
												<div className="contact-name">
													<input type="text"  className="form-control"  autocomplete="off"
														name="Date_Join" required="required"
                                                        onChange={handleAddFormChange}
														placeholder=""
													/>
													<span className="validation-text"></span>
												</div>
											</div>
                                            <div className="form-group mb-3">
												<label className="text-black font-w500">Nom et prénom </label>
												<div className="contact-occupation">
													<input type="text"   autocomplete="off"
                                                        onChange={handleAddFormChange}
														name="Cust_Name" required="required"
														className="form-control" placeholder="" 
													/>
												</div>
											</div>
									
										</div>
									</div>
								</div>
								</Nav>
							</div>
						</Tab.Container>
					</div>
                {/*Tab slider End*/}

                <div className="col-xl-9 col-lg-6  col-md-6 col-xxl-7 col-sm-12">
                  <div className="product-detail-content">
                    {/*Product details*/}
                    <div className="new-arrival-content pr">
						<link to=""></link>
					<h4>L'ajout d'un document</h4>
						<div className="comment-review star-rating">
						
							
							<Link onClick={() => setReviewToggle(true)} className="product-review" to="/ecom-product-detail" data-toggle="modal" data-target="#reviewModal">Ajouter une remarque?</Link>
						
						</div>

					
						<p> Identifiant Patient: <span className="item">0405689</span>{" "}</p>
						
						<p>
							Mots clés:&nbsp;&nbsp;
							<span className="badge badge-success light mr-1">ESG</span>
							<span className="badge badge-success light mr-1">Scanner</span>
							<span className="badge badge-success light mr-1">Analyse</span>
							
						</p>
					
						<div className="filtaring-area my-3">
							<div className="size-filter">
								<h4 className="m-b-15">Type du document</h4>
								  <div className="btn-group" data-toggle="buttons">
										<label  className= {classnames({ active : activeTab === '1'}) + ' btn btn-outline-primary light btn-sm'}  onClick={() => { toggle('1'); }}>
											<input type="radio" className="position-absolute invisible" name="options" id="option5"/>{" "}PDF
										</label>
										<label className= {classnames({ active : activeTab === '2'}) + ' btn btn-outline-primary light btn-sm'} onClick={() => { toggle('2'); }}>
											<input type="radio" className="position-absolute invisible" name="options" id="option1" defaultChecked/>image
										</label>
										<label className= {classnames({ active : activeTab === '3'}) + ' btn btn-outline-primary light btn-sm'} onClick={() => { toggle('3'); }}>
											<input type="radio" className="position-absolute invisible" name="options" id="option2" />{" "} Word
										</label>
										<label className= {classnames({ active : activeTab === '4'}) + ' btn btn-outline-primary light btn-sm'} onClick={() => { toggle('4'); }}>
											<input type="radio" className="position-absolute invisible" name="options" id="option3" />{" "}texte
										</label>
									
								  </div>
							</div>
						</div>
                      {/*Quantity start*/}
						<div className="col-2 px-0">
							<input  type="number" name="num" className="form-control input-btn input-number" defaultValue={1}/>
						</div>
                      {/*Quanatity End*/}
						<div className="shopping-cart mt-3">
							<Link className="btn btn-primary btn-lg" to="/uc-toastr" >
								Ajouter un document
							</Link>
							
						</div>
						<Link className="btn btn-primary btn-lg" to="/medicaments" >
							  prescrire médicaments
							</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
        {/* review */}
        <Modal show={reviewToggle} className="modal fade" id="reviewModal">
          <>
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ajouter une remarque</h5>
                <button
                  type="button"
                  onClick={() => setReviewToggle(false)}
                  className="close"
                  data-dismiss="modal"
                >
                  <span>×</span>
                </button>
              </div>
              <div className="modal-body">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setReviewToggle(false);
                  }}
                >
                 
                  <div className="form-group">
                    <div className="rating-widget mb-4 text-center">
                      {/* Rating Stars Box */}
                   
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="ecrire ici ..."
                      rows={5}
                      defaultValue={""}
                    />
                  </div>
                  <button className="btn btn-success btn-block">Ajouter</button>
                </form>
              </div>
            </div>
          </>
        </Modal>
      </div>
    </>
  );
};

export default ProductDetail;
