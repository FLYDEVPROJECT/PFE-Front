import React,{useState} from 'react';
import {Link}  from "react-router-dom";
import {nanoid} from 'nanoid';
import swal from "sweetalert";
import Slider from "react-slick";



const tableList = [
	{
		id:"1", name:'Tiger Nixon', department:'Architect',gender:'Male', 
		education:'M.COM., M.B.A', mobile:'12345 67890', email:'info1@example.com'
	},
	{	
		id:"2", name:'Gloria Little', department:' Administrator',gender:'Male', 
		education:'BTech, MTech', mobile:'09876 54321', email:'info2@example.com'
	},
	{	
		id:"3", name:'Bradley Greer', department:'Software Engineer',gender:'Male', 
		education:'B.CA M.CA', mobile:'98765 67890', email:'info3@example.com'
	},
	{	
		id:"4", name:'Gloria Little', department:' Administrator',gender:'Male', 
		education:'BTech, MTech', mobile:'09876 54321', email:'info4@example.com'
	},
	{
		id:"5", name:'Tiger Nixon', department:'Architect',gender:'Male', 
		education:'M.COM., M.B.A', mobile:'12345 67890', email:'info5@example.com'
	},
	{	
		id:"6", name:'Bradley Greer', department:'Software Engineer',gender:'Male', 
		education:'B.CA M.CA', mobile:'98765 67890', email:'info6@example.com'
	},
]; 

const Todo = () =>{
	const [contents, setContents] = useState(tableList);
	// delete data  
    const handleDeleteClick = (contentId) => {
        const newContents = [...contents];    
        const index = contents.findIndex((content)=> content.id === contentId);
        newContents.splice(index, 1);
        setContents(newContents);
    }
	
	//Modal box
	const [addCard, setAddCard] = useState(false);
	//Add data 
    const [addFormData, setAddFormData ] = useState({
        name:'',
        department:'',
        gender:'',
        education:'',
        mobile:'',
		email:'',
    }); 
    
    // Add contact function
    const handleAddFormChange = (event) => {
        event.preventDefault();    
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
        setAddFormData(newFormData);
    };
    
     //Add Submit data
    const handleAddFormSubmit = (event)=> {
        event.preventDefault();
        var error = false;
		var errorMsg = '';
        if(addFormData.name === ""){
            error = true;
			errorMsg = 'Please fill  name';
        }else if(addFormData.department === ""){
            error = true;
			errorMsg = 'Please fill department.';
        }else if(addFormData.gender === ""){
			error = true;
			errorMsg = "please fill gender";
		}
        if(!error){
            const newContent = {
                id: nanoid(),
                name: addFormData.name,
                department:  addFormData.department,
                gender:  addFormData.gender,
                education:  addFormData.education,
                mobile:  addFormData.mobile,
                email:  addFormData.email,
			};
            
            const newContents = [...contents, newContent];
            setContents(newContents);
            setAddCard(false);
            swal('Good job!', 'Successfully Added', "success");
            addFormData.name  = addFormData.department = addFormData.gender = addFormData.education = addFormData.mobile = addFormData.email = '';         
            
        }else{
			swal('Oops', errorMsg, "error");
		}
    };
	
	//Edit start 
	//const [editModal, setEditModal] = useState(false);	
	// Edit function editable page loop
    const [editContentId, setEditContentId] = useState(null);
   
    // Edit function button click to edit
    const handleEditClick = ( event, content) => {
        event.preventDefault();
        setEditContentId(content.id);
        const formValues = {
            name: content.name,
            department: content.department,  
            gender: content.gender,  
            education: content.education,  
            mobile: content.mobile,  
            email: content.email,  	
        }
        setEditFormData(formValues);
        //setEditModal(true);
    };
   
    // edit  data  
    const [editFormData, setEditFormData] = useState({
        name:'',
        department:'',
        gender:'',
        education:'',
        mobile:'',
		email:'',
    })
    
    //update data function
    const handleEditFormChange = (event) => {
        event.preventDefault();   
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };
    
    // edit form data submit
    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        const editedContent = {
            id: editContentId,
            name: editFormData.name,
            department: editFormData.department,
            gender: editFormData.gender,
            education: editFormData.education,
            mobile: editFormData.mobile,
            email: editFormData.email,
        }
        const newContents = [...contents];
        const index = contents.findIndex((content)=> content.id === editContentId);
        newContents[index] = editedContent;
        setContents(newContents);
        setEditContentId(null);
       // setEditModal(false);
    }
	//Cencel button to same data
    const handleCancelClick = () => {
        setEditContentId(null);    
    };
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
           <div className="owl-next" onClick={onClick} style={{ zIndex: 99 }}>
              <i className="fa fa-caret-right" />
           </div>
        );
     }
  
     function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
           <div
              className="owl-prev disabled"
              onClick={onClick}
              style={{ zIndex: 99 }}
           >
              <i className="fa fa-caret-left" />
           </div>
        );
     }
  
	
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
           {
              breakpoint: 990,
              settings: {
                 slidesToShow: 1,
                 slidesToScroll: 1,
              },
           },
        ],
     };
	return(
		<>
			<div className="col-12">
			
				<div className="card">
					<div className="card-header">
						<h4 className="card-title">Appointment</h4>
					</div>
					<div className="card-body">
					<div class="d-block d-sm-flex mb-3 mb-md-4">
						<a class="btn btn-outline-primary btn-rounded mb-2 mr-1">
						<Link to="/appoiform" >
							<i class="lar la-calendar-plus mr-2 scale5 mr-2">
								</i>+ New Appointment </Link>
								</a>
							<div class="dropdown ml-auto mr-1 d-inline-block dropdown">
								<button aria-haspopup="true" aria-expanded="false" data-toggle="dropdown" type="button" class="btn btn-primary btn-rounded dropdown-toggle light font-w600  mb-2 dropdown-toggle btn">
									<i class="las la-check-circle scale5 mr-3">
										</i>Available
									</button>
									</div>
									<a class="btn btn-primary btn-rounded mb-2" href="/react/demo/appoiform">
										<i class="las scale5 la-pencil-alt mr-2"></i> Edit</a>
										</div>

					</div>
				</div>
			</div>
            <div className="col-xl-12">
               <div className="assigned-doctor2 owl-carousel">
                  <Slider {...settings}>
                     <div className="items">
                        <div className="media bg-white p-4 rounded align-items-center">
                           <img className="mr-3" alt="" />
                           <div className="media-body d-block d-sm-flex  align-items-center justify-content-between">
                              <div className="mr-2">
                                 <h4 className="fs-20">
                                    <Link className="text-black" to="/reviews">
                                       Glee Smiley
                                    </Link>
                                 </h4>
                                 <p className="fs-14 mb-0">
                                    {" "}
                                    I came with my mother, I was very nervous.
                                    But after entering here I felt warmed with
                                    smiling
                                 </p>
                              </div>
                              
                           </div>
                        </div>
                     </div>
                     <div className="items">
                        <div className="media bg-white p-4 rounded align-items-center">
                           <img className="mr-3"  alt="" />
                           <div className="media-body d-block d-sm-flex  align-items-center justify-content-between">
                              <div className="mr-2">
                                 <h4 className="fs-20">
                                    <Link className="text-black" to="/reviews">
                                       Stevani Anderson
                                    </Link>
                                 </h4>
                                 <p className="fs-14 mb-0">
                                    {" "}
                                    I came with my mother, I was very nervous.
                                    But after entering here I felt warmed with
                                    smiling
                                 </p>
                              </div>
                            
                           </div>
                        </div>
                     </div>
                     <div className="items">
                        <div className="media bg-white p-4 rounded align-items-center">
                           <img className="mr-3" alt="" />
                           <div className="media-body d-block d-sm-flex  align-items-center justify-content-between">
                              <div className="mr-2">
                                 <h4 className="fs-20">
                                    <Link className="text-black" to="/reviews">
                                       Cive Slauw
                                    </Link>
                                 </h4>
                                 <p className="fs-14 mb-0">
                                    {" "}
                                    I came with my mother, I was very nervous.
                                    But after entering here I felt warmed with
                                    smiling
                                 </p>
                              </div>
                           
                           </div>
                        </div>
                     </div>
                     <div className="items">
                        <div className="media bg-white p-4 rounded align-items-center">
                           <img className="mr-3"  alt="" />
                           <div className="media-body d-block d-sm-flex  align-items-center justify-content-between">
                              <div className="mr-2">
                                 <h4 className="fs-20">
                                    <Link className="text-black" to="/reviews">
                                       Glee Smiley
                                    </Link>
                                 </h4>
                                 <p className="fs-14 mb-0">
                                    {" "}
                                    I came with my mother, I was very nervous.
                                    But after entering here I felt warmed with
                                    smiling
                                 </p>
                              </div>
                            
                           </div>
                        </div>
                     </div>
                     <div className="items">
                        <div className="media bg-white p-4 rounded align-items-center">
                           <img className="mr-3" alt="" />
                           <div className="media-body d-block d-sm-flex  align-items-center justify-content-between">
                              <div className="mr-2">
                                 <h4 className="fs-20">
                                    <Link className="text-black" to="/reviews">
                                       Glee Smiley
                                    </Link>
                                 </h4>
                                 <p className="fs-14 mb-0">
                                    I came with my mother, I was very nervous.
                                    But after entering here I felt warmed with
                                    smiling
                                 </p>
                              </div>
                           
                           </div>
                        </div>
                     </div>
                  </Slider>
               </div>
            </div>
		</>
	)
}
export default Todo;