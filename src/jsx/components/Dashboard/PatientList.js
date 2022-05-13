import { blue200 } from "material-ui/styles/colors";
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
const PatientList = () => {
   const [data, setData] = useState(
      document.querySelectorAll("#patient_list tbody tr")
   );
   const sort = 5;
   const activePag = useRef(0);
   const [test, settest] = useState(0);

   // Active data
   const chageData = (frist, sec) => {
      for (var i = 0; i < data.length; ++i) {
         if (i >= frist && i < sec) {
            data[i].classList.remove("d-none");
         } else {
            data[i].classList.add("d-none");
         }
      }
   };
   // use effect
   useEffect(() => {
      setData(document.querySelectorAll("#patient_list tbody tr"));
   }, [test]);

   // Active pagginarion
   activePag.current === 0 && chageData(0, sort);
   // paggination
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
   const onClick = (i) => {
      activePag.current = i;
      chageData(activePag.current * sort, (activePag.current + 1) * sort);
      settest(i);
   };

   const chackbox = document.querySelectorAll(".patient_checkbox input");
   const motherChackBox = document.querySelector(".patient_strg input");
   // console.log(document.querySelectorAll(".all_spending_strg input")[0].checked);
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
      <>
         <div className="form-head d-flex mb-3 mb-md-4 align-items-start">
            <div className="mr-auto d-none d-lg-block">
               <Link
                  to="/ajout-patient"
                  className="btn btn-primary btn-rounded"
               >
                  + Ajouter un Patient
               </Link>
            </div>
            <div className="input-group search-area ml-auto d-inline-flex mr-3">
               <input
                  type="text"
                  className="form-control"
                  placeholder="trouver votre patient"
               />
               <div className="input-group-append">
                  <button type="button" className="input-group-text">
                     <i className="flaticon-381-search-2" />
                  </button>
               </div>
            </div>
            <Link to="/patient-list" className="settings-icon">
               <i className="flaticon-381-settings-2 mr-0" />
            </Link>
         </div>
         <div className="row">
            <div className="col-xl-12">
               <div className="table-responsive">
                  <div
                     id="patient_list"
                     className="dataTables_wrapper no-footer"
                  >
                     <table
                        id="example5"
                        className="table table-striped patient-list mb-4 dataTablesCard fs-14 dataTable no-footer"
                        role="grid"
                        aria-describedby="example5_info"
                     >
                        <thead>
                           <tr role="row">
                              <th
                                 className="patient_strg"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-sort="ascending"
                                 style={{ width: 24 }}
                              >
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun("all")}
                                          className="custom-control-input"
                                          id="checkAll"
                                          required
                                       />
                                     
                                    </div>
                                 </div>
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Patient ID: activate to sort column ascending"
                                 style={{ width: 79 }}
                              >
                                Identifiant
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Date Check In: activate to sort column ascending"
                                 style={{ width: 113 }}
                              >
                                date d'adhésion
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Patient Name: activate to sort column ascending"
                                 style={{ width: 108 }}
                              >
                                 Nom du patient
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Doctor Assgined: activate to sort column ascending"
                                 style={{ width: 135 }}
                              >
                              liste des médecins
                              </th>
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label="Disease: activate to sort column ascending"
                                 style={{ width: 68 }}
                              >
                                 Antécedents médicaux
                              </th>
                
                      
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label=": activate to sort column ascending"
                                 style={{ width: 24 }}
                              />
                              <th
                                 className="sorting"
                                 tabIndex={0}
                                 aria-controls="example5"
                                 rowSpan={1}
                                 colSpan={1}
                                 aria-label=": activate to sort column ascending"
                                 style={{ width: 24 }}
                              />
                           </tr>
                        </thead>
                        <tbody>
                           <tr role="row" className="odd">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox1"
                                          required
                                       />
                                     
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00012</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>Alexia Kev</td>
                              <td>Dr. Samantha</td>
                              <td>Allergies &amp; Asthma</td>
                              <td>
                                 <span className="text-nowrap">
                                 
                                  
                                 </span>
                              </td>
                             
                              <td>
                                 <Link to="/patient-list">
                                   
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                    
                                 </Link>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox2"
                                          required
                                       />
                                      
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00013</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>Andrew Stevano</td>
                              <td>Dr. Marcus Jr</td>
                              <td>Dental Care</td>
                              <td>
                                 <span className="text-nowrap">
                                 
                                 
                                 </span>
                             
                                 <Link to="/patient-list">
                                    
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                    
                                 </Link>
                              </td>
                           </tr>
                           <tr role="row" className="odd">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox3"
                                          required
                                       />
                                     
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00014</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>Brian Lucky</td>
                              <td>Dr. David Lee</td>
                              <td>Sleep Problem</td>
                              <td>
                              
                           
                                 <Link to="/patient-list">
                                 
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                   
                                 </Link>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox4"
                                          required
                                       />
                                   
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00015</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>Bella Simatupang</td>
                              <td>Dr. Olivia Jean</td>
                              <td>Hearing Loss</td>
                              <td>
                             
                            
                                 <Link to="/patient-list">
                                 
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                
                                 </Link>
                              </td>
                           </tr>
                           <tr role="row" className="odd">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox5"
                                          required
                                       />
                                    
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00016</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>Cive Slauw</td>
                              <td>Dr. Samantha</td>
                              <td>Diabetes</td>
                              <td>
                             
                             
                                 <Link to="/patient-list">
                                  
                                    
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                   
                                 </Link>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox6"
                                          required
                                       />
                                   
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00017</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>David Bekam</td>
                              <td>Dr. Kevin Zidan
                                 Dr Mounir benArab
                              </td>
                              <td>Alcoholism</td>
                              <td>
                                 <span className="text-nowrap">
                                   
                                    
                                 </span>
                              </td>
                              
                              <td>
                                 <Link to="/patient-list">
                                   
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                   
                                 </Link>
                              </td>
                           </tr>
                           <tr role="row" className="odd">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox7"
                                          required
                                       />
                                      
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00018</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>Enjeline Sari</td>
                              <td>Dr. Gustauv Loi</td>
                              <td>Cold &amp; Flu</td>
                              <td>
                                 <span className="text-nowrap">
                                   
                                   
                                 </span>
                              </td>
                      
                              <td>
                                 <Link to="/patient-list">
                                    
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                  
                                 </Link>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox8"
                                          required
                                       />
                                  
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00019</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>Eddy Cusuma</td>
                              <td>Dr. Samantha</td>
                              <td>Dental Care</td>
                              <td>
                                 <span className="text-nowrap">
                               
                                  
                                 </span>
                              </td>
                           
                              <td>
                                 <Link to="/patient-list">
                                    
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                   
                                 </Link>
                              </td>
                           </tr>
                           <tr role="row" className="odd">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox9"
                                          required
                                       />
                                   
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00020</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>Frank Azire</td>
                              <td>Dr. David Lee</td>
                              <td>Allergies &amp; Asthma</td>
                              <td>
                                 <span className="text-nowrap">
                                 
                                
                                 </span>
                              </td>
                             
                              <td>
                                 <Link to="/patient-list">
                                  
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                    
                                 </Link>
                              </td>
                           </tr>
                           <tr role="row" className="even">
                              <td className="patient_checkbox">
                                 <div className="checkbox text-right align-self-center">
                                    <div className="custom-control custom-checkbox ">
                                       <input
                                          type="checkbox"
                                          onClick={() => chackboxFun()}
                                          className="custom-control-input"
                                          id="customCheckBox10"
                                          required
                                       />
                                 
                                    </div>
                                 </div>
                              </td>
                              <td>#P-00012</td>
                              <td>26/02/2020, 12:42 AM</td>
                              <td>Alexia Kev</td>
                              <td>Dr. Samantha</td>
                              <td>Allergies &amp; Asthma</td>
                              <td>
                                 <span className="text-nowrap">
                                  
                                 </span>
                              </td>
                            
                              <td>
                                 <Link to="/patient-list">
                                   
                                 </Link>
                              </td>
                              <td>
                                 <Link to="/patient-list">
                                   
                                 </Link>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     <div className="d-sm-flex text-center justify-content-between align-items-center">
                        <div
                           className="dataTables_info"
                           id="example5_info"
                           role="status"
                           aria-live="polite"
                        >
                  
                        </div>
                        <div className="dataTables_paginate paging_simple_numbers d-flex  justify-content-center align-items-center pb-3">
                           <Link
                              to="/patient-list"
                              className="paginate_button previous disabled"
                              aria-controls="example5"
                              data-dt-idx={0}
                              tabIndex={0}
                              id="example5_previous"
                              onClick={() =>
                                 activePag.current > 0 &&
                                 onClick(activePag.current - 1)
                              }
                           >
                              Précédent
                           </Link>
                           <span className="d-flex">
                              {paggination.map((number, i) => (
                                 <Link
                                    key={i}
                                    to="/patient-list"
                                    className={`paginate_button d-flex align-items-center justify-content-center ${
                                       activePag.current === i ? "current" : ""
                                    } ${i > 0 ? "ml-1" : ""}`}
                                    aria-controls="example5"
                                    data-dt-idx={1}
                                    tabIndex={0}
                                    onClick={() => onClick(i)}
                                 >
                                    {number}
                                 </Link>
                              ))}
                           </span>

                           <Link
                              to="/patient-list"
                              className="paginate_button next disabled"
                              aria-controls="example5"
                              data-dt-idx={2}
                              tabIndex={0}
                              id="example5_next"
                              onClick={() =>
                                 activePag.current + 1 < paggination.length &&
                                 onClick(activePag.current + 1)
                              }
                           >
                              suivant
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PatientList;
