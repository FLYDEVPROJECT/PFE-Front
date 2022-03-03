import React, { Fragment, useState } from "react";
import { Button,Dropdown, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SRLWrapper } from "simple-react-lightbox";


// import { Link } from 'react-router-dom';
import { Row, Col, Card, Accordion } from 'react-bootstrap'
//** Import Image */
import profile02 from "../../../../images/profile/2.jpg";
import profile03 from "../../../../images/profile/3.jpg";
import profile04 from "../../../../images/profile/4.jpg";
import profile05 from "../../../../images/profile/5.jpg";
import profile06 from "../../../../images/profile/6.jpg";
import profile07 from "../../../../images/profile/7.jpg";
import profile from "../../../../images/profile/profile.png";
import PageTitle from "../../../layouts/PageTitle";

const AppProfile = () => {
  const [activeToggle, setActiveToggle] = useState("posts");
  const [sendMessage, setSendMessage] = useState(false);
  const [postModal, setPostModal] = useState(false);
  const [cameraModal, setCameraModal] = useState(false);
  const [linkModal, setLinkModal] = useState(false);
  const [replayModal, setReplayModal] = useState(false);

  const [activeDefault, setActiveDefault] = useState(0)
  const [activeBordered, setActiveBordered] = useState(0)
  const [activeWithoutSpace, setActiveWithoutSpace] = useState(0)
  
    
     
    
      const defaultAccordion = [
        {
          title: 'Changer le mot de passe ',
          text:'okkkk',
                   bg: 'primary',
        },
        {
          title: 'Accordion Header Two',
         
          bg: 'info',
        },
        {
          title: 'Accordion Header Three',
         
          bg: 'success',
        },
      ]
 
  const options = {
    settings: {
      overlayColor: "#000000",
    },
  };
  return (
    <Fragment>

     
      <div className="row">
        <div className="col-xl-4">
			<div className="row">
				<div className="col-lg-12">
					<div className="card">
						<div className="card-body">
							<div className="profile-statistics">
								<div className="text-center">
							
								
								</div>
							  {/* send Modal */}
								<Modal className="modal fade" show={sendMessage}>
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="modal-title">Send Message</h5>
											<Button variant="" type="button" className="close" data-dismiss="modal" onClick={() => setSendMessage(false)}>
												<span>×</span>
											</Button>
										</div>
										<div className="modal-body">
											<form className="comment-form" onSubmit={(e) => { e.preventDefault(); setSendMessage(false); }}>
												<div className="row">
													<div className="col-lg-6">
														<div className="form-group">
															<label htmlFor="author" className="text-black font-w600">  Name <span className="required">*</span> </label>
															<input type="text" className="form-control" defaultValue="Author" name="Author" placeholder="Author" />
														</div>
													</div>
													<div className="col-lg-6">
														<div className="form-group">
															<label htmlFor="email" className="text-black font-w600"> Email <span className="required">*</span></label>
															<input type="text" className="form-control" defaultValue="Email" placeholder="Email" name="Email"/>
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<label htmlFor="comment" className="text-black font-w600">Comment</label>
															<textarea rows={8} className="form-control" name="comment" placeholder="Comment" defaultValue={""}/>
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<input type="submit" value="Post Comment" className="submit btn btn-primary" name="submit"/>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</Modal>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-lg-12">
					<div className="card">
						<div className="card-header border-0 pb-0">
							<h5 className="text-black">Our Latest News</h5>
						</div>	
						<div className="card-body pt-3">
							<div className="profile-news">
							  <div className="media pt-3 pb-3">
								<img src={profile05} alt="" className="mr-3 rounded" width={75}/>
								<div className="media-body">
									<h5 className="m-b-5">
										<Link to="/post-details" className="text-black">
											Collection of textile samples
										</Link>
									</h5>
									<p className="mb-0">I shared this on my fb wall a few months back, and I thought. </p>
								</div>
							  </div>
							  <div className="media pt-3 pb-3">
								<img src={profile06} alt=""  className="mr-3 rounded" width={75}/>
								<div className="media-body">
									<h5 className="m-b-5">
										<Link to="/post-details" className="text-black">
										Collection of textile samples
										</Link>
									</h5>
									<p className="mb-0">
										I shared this on my fb wall a few months back, and I
										thought.
									</p>
								</div>
							  </div>
							  <div className="media pt-3 ">
								<img src={profile07} alt="" className="mr-3 rounded" width={75} />
								<div className="media-body">
									<h5 className="m-b-5">
										<Link to="/post-details" className="text-black">
											Collection of textile samples
										</Link>
									</h5>
									<p className="mb-0">
										I shared this on my fb wall a few months back, and I thought.
									</p>
								</div>
							  </div>
							</div>
						</div>	
					</div>
				</div>	
			</div>	
		</div>	
       <div> 
       <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              <div className="profile-tab">
                 <p>gggggggggggggggggggjj</p>
                 </div>
                 </div></div></div>
       </div>
      </div>
    </Fragment>
  );
};

export default AppProfile;
